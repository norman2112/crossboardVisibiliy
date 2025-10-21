// Planview AgilePlace API Service
const DEFAULT_API_TOKEN = '987c959ea92f5f31346f77de63d5f033668ebc63d8203985670b4c18a9dc9eca9f81f608d01d5ad01b160c21d45ecfaea54f788a470c765e18acc138d2da72a9';

class AgilePlaceAPI {
  constructor() {
    // Load settings from localStorage or use defaults
    const savedUrl = localStorage.getItem('agilePlaceUrl');
    const savedToken = localStorage.getItem('agilePlaceToken');
    
    this.baseURL = savedUrl || ''; // Use saved URL or relative URLs with proxy
    this.token = savedToken || DEFAULT_API_TOKEN;
    
    console.log('AgilePlaceAPI initialized with:');
    console.log('- Base URL:', this.baseURL || '(using proxy)');
    console.log('- Token:', this.token ? `${this.token.substring(0, 10)}...` : 'none');
  }

  // Method to update configuration dynamically
  updateConfig(url, token) {
    this.baseURL = url || '';
    this.token = token || DEFAULT_API_TOKEN;
    console.log('AgilePlaceAPI config updated:');
    console.log('- Base URL:', this.baseURL || '(using proxy)');
    console.log('- Token:', this.token ? `${this.token.substring(0, 10)}...` : 'none');
  }

  // Helper method to make API requests
  async makeRequest(endpoint, options = {}) {
    // Use Vercel serverless function as proxy to avoid CORS issues
    const proxyUrl = `/api/proxy?url=${encodeURIComponent(this.baseURL)}&token=${encodeURIComponent(this.token)}${endpoint}`;
    
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers
      },
      ...options
    };

    try {
      console.log('Making API request to:', proxyUrl);
      console.log('Using Vercel proxy for CORS handling');
      console.log('Request config:', config);
      
      const response = await fetch(proxyUrl, config);
      
      console.log('Response status:', response.status);
      console.log('Response headers:', [...response.headers.entries()]);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
      }
      
      const data = await response.json();
      console.log('API Response data:', data);
      return data;
    } catch (error) {
      console.error('API request error:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      // If direct URL failed and we have a baseURL, try falling back to proxy
      if (this.baseURL && url.startsWith('http')) {
        console.log('Direct URL failed, trying proxy fallback...');
        try {
          const proxyUrl = endpoint;
          const proxyConfig = {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${this.token}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              ...options.headers
            },
            ...options
          };
          
          console.log('Trying proxy request to:', proxyUrl);
          const proxyResponse = await fetch(proxyUrl, proxyConfig);
          
          if (!proxyResponse.ok) {
            throw new Error(`Proxy request also failed: ${proxyResponse.status}`);
          }
          
          const proxyData = await proxyResponse.json();
          console.log('Proxy response successful:', proxyData);
          return proxyData;
        } catch (proxyError) {
          console.error('Proxy fallback also failed:', proxyError);
          throw error; // Throw original error
        }
      }
      
      throw error;
    }
  }

  // Get all boards
  async getBoards() {
    const response = await this.makeRequest('/io/board');
    // Safely check if response.boards exists and is an array before accessing length
    const boards = response && response.boards ? response.boards : [];
    console.log(`Retrieved ${boards.length} boards`);
    return boards;
  }

  // Get board details
  async getBoardDetails(boardId) {
    try {
      return await this.makeRequest(`/io/board/${boardId}`);
    } catch (error) {
      console.log(`No board details found for board ${boardId}:`, error.message);
      return null;
    }
  }

  // Get all cards for a board
  async getCards(boardId, options = {}) {
    try {
      const response = await this.makeRequest(`/io/board/${boardId}/card`);
      // Safely check if response.cards exists and is an array before accessing length
      const cards = response && response.cards ? response.cards : [];
      console.log(`Retrieved ${cards.length} cards for board ${boardId}`);
      return cards;
    } catch (error) {
      console.log(`No cards found for board ${boardId}:`, error.message);
      return [];
    }
  }

  // Helper method to batch promises to avoid overwhelming the API
  async batchPromises(items, batchSize, promiseFunc) {
    const results = [];
    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(item => promiseFunc(item))
      );
      results.push(...batchResults);
      console.log(`Completed batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(items.length / batchSize)}`);
    }
    return results;
  }

  // Get parent cards for a board (cards that have children on same or other boards) - OPTIMIZED with batching
  async getParentCards(boardId) {
    try {
      console.log(`Getting parent cards for board ${boardId}`);
      const allCards = await this.getCards(boardId);
      console.log(`Retrieved ${allCards.length} total cards for board ${boardId}`);
      
      // Build a reverse lookup map: cardId -> children on same board
      const sameBoardChildrenMap = new Map();
      allCards.forEach(card => {
        if (card.parentCards && card.parentCards.length > 0) {
          card.parentCards.forEach(parent => {
            const parentId = parent.id.toString();
            if (!sameBoardChildrenMap.has(parentId)) {
              sameBoardChildrenMap.set(parentId, []);
            }
            sameBoardChildrenMap.get(parentId).push(card);
          });
        }
      });
      
      // Check for connected children in controlled batches to avoid overwhelming API
      const BATCH_SIZE = 10; // Process 10 cards at a time
      console.log(`Checking for connected children across ${allCards.length} cards in batches of ${BATCH_SIZE}...`);
      
      const connectedChildrenResults = await this.batchPromises(
        allCards,
        BATCH_SIZE,
        async (card) => {
          try {
            const children = await this.getConnectedChildCards(card.id);
            return { cardId: card.id, children };
          } catch (err) {
            console.warn(`Failed to get connected children for card ${card.id}:`, err.message);
            return { cardId: card.id, children: [] };
          }
        }
      );
      
      // Build a map of cards with connected children
      const connectedChildrenMap = new Map();
      connectedChildrenResults.forEach(result => {
        if (result.children.length > 0) {
          connectedChildrenMap.set(result.cardId.toString(), result.children);
        }
      });
      
      // Filter cards that have children (either same-board or connected)
      const cardsWithChildren = allCards.filter(card => {
        const cardId = card.id.toString();
        const hasSameBoardChildren = sameBoardChildrenMap.has(cardId);
        const hasConnectedChildren = connectedChildrenMap.has(cardId);
        
        if (hasSameBoardChildren || hasConnectedChildren) {
          const sameBoardCount = hasSameBoardChildren ? sameBoardChildrenMap.get(cardId).length : 0;
          const connectedCount = hasConnectedChildren ? connectedChildrenMap.get(cardId).length : 0;
          console.log(`Card ${card.title} (${cardId}) has ${connectedCount} connected + ${sameBoardCount} same-board children`);
          return true;
        }
        return false;
      });
      
      console.log(`Found ${cardsWithChildren.length} parent cards with children for board ${boardId}`);
      return cardsWithChildren;
    } catch (error) {
      console.log(`Error finding parent cards for board ${boardId}:`, error.message);
      return [];
    }
  }

  // Get child cards for a specific parent card
  async getChildCards(boardId, parentCardId) {
    try {
      const allCards = await this.getCards(boardId);
      const childCards = allCards.filter(card => 
        card.parentCards && card.parentCards.some(parent => 
          parent.id === parentCardId || parent.id.toString() === parentCardId.toString()
        )
      );
      console.log(`Found ${childCards.length} child cards for parent ${parentCardId} in board ${boardId}`);
      return childCards;
    } catch (error) {
      console.log(`No child cards found for parent ${parentCardId} in board ${boardId}:`, error.message);
      return [];
    }
  }

  // Get card details
  async getCardDetails(boardId, cardId) {
    try {
      const allCards = await this.getCards(boardId);
      // Convert both to strings for comparison to handle type mismatches
      const card = allCards.find(card => card.id.toString() === cardId.toString());
      console.log(`Looking for card ${cardId} in board ${boardId}, found:`, card);
      return card;
    } catch (error) {
      console.log(`No card details found for card ${cardId} in board ${boardId}:`, error.message);
      return null;
    }
  }

         // Get connected child cards for a specific card using the /io/card/{cardId}/connection/children endpoint
         async getConnectedChildCards(cardId) {
           try {
             console.log(`=== getConnectedChildCards DEBUG for cardId: ${cardId} ===`);
             const response = await this.makeRequest(`/io/card/${cardId}/connection/children`);
             console.log(`Response for card ${cardId}:`, response);
             console.log(`response.cards for card ${cardId}:`, response.cards);
             console.log(`response.cards type for card ${cardId}:`, typeof response.cards, 'isArray:', Array.isArray(response.cards));
             
             // Safely check if response.cards exists and is an array before accessing length
             const cards = response && response.cards ? response.cards : [];
             console.log(`response.cards.length for card ${cardId}:`, cards.length);
             console.log(`Found ${cards.length} connected child cards for card ${cardId}`);
             return cards;
           } catch (error) {
             console.log(`No connected child cards found for card ${cardId}:`, error.message);
             return [];
           }
         }

  // Get connected cards by their IDs using the /io/card endpoint
  async getConnectedCards(cardIds) {
    if (!cardIds || cardIds.length === 0) {
      return [];
    }
    
    try {
      const cardsParam = cardIds.join(',');
      const response = await this.makeRequest(`/io/card?cards=${cardsParam}`);
      // Safely check if response.cards exists and is an array before accessing length
      const cards = response && response.cards ? response.cards : [];
      console.log(`Found ${cards.length} connected cards for IDs: ${cardsParam}`);
      return cards;
    } catch (error) {
      console.log(`No connected cards found for IDs ${cardIds.join(',')}:`, error.message);
      return [];
    }
  }

  // Get card types for a board
  async getCardTypes(boardId) {
    try {
      return await this.makeRequest(`/api/v1/boards/${boardId}/cardtypes`);
    } catch (error) {
      console.log(`No card types found for board ${boardId}:`, error.message);
      return [];
    }
  }

  // Get lanes for a board
  async getLanes(boardId) {
    try {
      return await this.makeRequest(`/api/v1/boards/${boardId}/lanes`);
    } catch (error) {
      console.log(`No lanes found for board ${boardId}:`, error.message);
      return [];
    }
  }

  // Transform AgilePlace data to mind map format
  transformToMindMapData(parentCards, childCards, grandchildCards, boardsMap) {
    try {
      const data = [];

      console.log('=== TRANSFORM DEBUG START ===');
      console.log('parentCards:', parentCards);
      console.log('childCards:', childCards);
      console.log('grandchildCards:', grandchildCards);
      console.log('boardsMap:', boardsMap);
      console.log(`Transforming data: ${(parentCards || []).length} parents, ${(childCards || []).length} children, ${(grandchildCards || []).length} grandchildren`);
      console.log('=== TRANSFORM DEBUG END ===');

      // Helper function to get board name
      const getBoardName = (card) => {
        try {
          if (card && card.board && card.board.title) {
            return card.board.title;
          }
          if (card && card.boardId && boardsMap && boardsMap.has(card.boardId)) {
            const boardDetails = boardsMap.get(card.boardId);
            return (boardDetails && boardDetails.title) || 'Unknown Board';
          }
          return 'Unknown Board';
        } catch (error) {
          console.error('Error in getBoardName:', error);
          return 'Unknown Board';
        }
      };

      // Helper function to get card type from AgilePlace data (for display purposes)
      const getCardType = (card) => {
        try {
          console.log('Getting card type for card:', card);
          
          // Use the actual CardType field from AgilePlace API (type.title)
          if (card && card.type && card.type.title) {
            console.log('Found type.title:', card.type.title);
            return card.type.title;
          }
          
          // Check for cardType field with name
          if (card && card.cardType && card.cardType.name) {
            console.log('Found cardType.name:', card.cardType.name);
            return card.cardType.name;
          }
          
          // Check for cardType as a string
          if (card && card.cardType && typeof card.cardType === 'string') {
            console.log('Found cardType as string:', card.cardType);
            return card.cardType;
          }
          
          // Fallback to type field if it's a string
          if (card && card.type && typeof card.type === 'string') {
            console.log('Using type field as fallback:', card.type);
            return card.type;
          }
          
          // Default fallback
          console.log('Using default card type: Unknown');
          return 'Unknown';
        } catch (error) {
          console.error('Error in getCardType:', error);
          return 'Unknown';
        }
      };

      // Helper function to determine if a color is light or dark
      const isLightColor = (hexColor) => {
        // Remove # if present
        const hex = hexColor.replace('#', '');
        // Convert to RGB
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        // Calculate luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5;
      };

      // Helper function to get card color from AgilePlace data
      const getCardColor = (card) => {
        try {
          // Use the actual CardType field from AgilePlace API (type.cardColor)
          if (card && card.type && card.type.cardColor) {
            return card.type.cardColor;
          }
          
          // Check for cardType field with color
          if (card && card.cardType && card.cardType.color) {
            return card.cardType.color;
          }
          
          // Check for any other color fields that might exist
          if (card && card.color) {
            return card.color;
          }
          
          // Try to get color based on card type name
          const cardTypeName = getCardType(card);
          
          // Map specific card types to their correct colors
          if (cardTypeName && typeof cardTypeName === 'string') {
            switch (cardTypeName.toLowerCase()) {
              case 'feature':
                return '#B8CFDF'; // Light blue for Feature
              case 'story':
              case 'user story':
                return '#FAD7B2'; // Light orange for Story
              case 'epic':
                return '#000000'; // Black for Epic
              default:
                break;
            }
          }
          
          // Default fallback - use level-based colors
          const level = (card && card.level) || (card && card.type);
          
          // Ensure level is a string before calling toLowerCase
          if (level && typeof level === 'string') {
            switch (level.toLowerCase()) {
              case 'l1': return '#000000'; // Black
              case 'l2': return '#527a8e'; // Blue
              case 'l3': return '#b60000'; // Red
              default: return '#6b7280'; // Gray
            }
          }
          
          // If no valid level found, return default gray
          return '#6b7280';
        } catch (error) {
          console.error('Error in getCardColor:', error);
          return '#6b7280'; // Default gray on error
        }
      };

      // Add parent cards (L1 - Top Level)
      (parentCards || []).forEach(parent => {
        const cardType = getCardType(parent);
        const cardColor = getCardColor(parent);
        const textColor = isLightColor(cardColor) ? '#000000' : '#FFFFFF'; // Black for light backgrounds, white for dark
        data.push({
          id: parent.id.toString(),
          label: parent.title,
          parentId: '',
          type: 'l1', // Generic level 1
          level: 'L1', // Display level
          cardType: cardType, // Store the actual CardType title for reference
          cardColor: cardColor, // Store the actual card color from AgilePlace
          textColor: textColor, // Store the appropriate text color
          cardId: parent.id.toString(),
          boardName: getBoardName(parent),
          addInfo: {
            cardUrl: `https://scdemo320.leankit.com/card/${parent.id}`
          },
          originalData: parent
        });
      });

      // Add child cards (L2 - Second Level) - supports many-to-many relationships
      (childCards || []).forEach((child, index) => {
        // For many-to-many relationships, use the tracked parent ID
        let parentId = '';
        if (child._parentId) {
          // Parent ID was explicitly set for this instance (handles many-to-many)
          parentId = child._parentId.toString();
        } else if (child.parentCards && child.parentCards.length > 0) {
          // Regular child card with parentCards array (fallback)
          parentId = child.parentCards[0].id.toString();
        }
        
        // Generate unique ID for duplicated children (many-to-many relationships)
        const nodeId = child._isMultiParent ? `${child.id}_${parentId}` : child.id.toString();
        
        const cardType = getCardType(child);
        const cardColor = getCardColor(child);
        const textColor = isLightColor(cardColor) ? '#000000' : '#FFFFFF'; // Black for light backgrounds, white for dark
        data.push({
          id: nodeId,
          label: child.title,
          parentId: parentId,
          type: 'l2', // Generic level 2
          level: 'L2', // Display level
          cardType: cardType, // Store the actual CardType title for reference
          cardColor: cardColor, // Store the actual card color from AgilePlace
          textColor: textColor, // Store the appropriate text color
          cardId: child.id.toString(), // Original card ID for linking
          boardName: getBoardName(child),
          addInfo: {
            cardUrl: `https://scdemo320.leankit.com/card/${child.id}`
          },
          originalData: child,
          isMultiParent: child._isMultiParent || false
        });
      });

      // Add grandchild cards (L3 - Third Level) - supports many-to-many relationships
      (grandchildCards || []).forEach((grandchild, index) => {
        // For many-to-many relationships, use the tracked parent ID
        let parentId = '';
        if (grandchild._parentId) {
          // Parent ID was explicitly set for this instance (handles many-to-many)
          parentId = grandchild._parentId.toString();
        } else if (grandchild.parentCards && grandchild.parentCards.length > 0) {
          // Regular grandchild card with parentCards array (fallback)
          parentId = grandchild.parentCards[0].id.toString();
        }
        
        // Generate unique ID for duplicated grandchildren (many-to-many relationships)
        const nodeId = grandchild._isMultiParent ? `${grandchild.id}_${parentId}` : grandchild.id.toString();
        
        const cardType = getCardType(grandchild);
        const cardColor = getCardColor(grandchild);
        const textColor = isLightColor(cardColor) ? '#000000' : '#FFFFFF'; // Black for light backgrounds, white for dark
        data.push({
          id: nodeId,
          label: grandchild.title,
          parentId: parentId,
          type: 'l3', // Generic level 3
          level: 'L3', // Display level
          cardType: cardType, // Store the actual CardType title for reference
          cardColor: cardColor, // Store the actual card color from AgilePlace
          textColor: textColor, // Store the appropriate text color
          cardId: grandchild.id.toString(), // Original card ID for linking
          boardName: getBoardName(grandchild),
          addInfo: {
            cardUrl: `https://scdemo320.leankit.com/card/${grandchild.id}`
          },
          originalData: grandchild,
          isMultiParent: grandchild._isMultiParent || false
        });
      });

      console.log(`Transformed data contains ${data.length} total nodes`);
      return data;
    } catch (error) {
      console.error('Error in transformToMindMapData:', error);
      console.error('Error details:', {
        parentCards: parentCards,
        childCards: childCards,
        grandchildCards: grandchildCards,
        boardsMap: boardsMap
      });
      throw new Error(`Failed to transform data: ${error.message}`);
    }
  }

         // Optimized method to get multiple card details at once
         async getMultipleCardDetails(boardId, cardIds) {
           console.log('=== getMultipleCardDetails DEBUG START ===');
           console.log('boardId:', boardId, 'cardIds:', cardIds);
           console.log('cardIds type:', typeof cardIds, 'isArray:', Array.isArray(cardIds));
           console.log('cardIds.length:', cardIds ? cardIds.length : 'undefined');
           
           if (!cardIds || cardIds.length === 0) {
             console.log('No cardIds provided, returning empty array');
             return [];
           }
           
           try {
             const cardsParam = cardIds.join(',');
             console.log('Making request to /io/card?cards=' + cardsParam);
             const response = await this.makeRequest(`/io/card?cards=${cardsParam}`);
             console.log('Response received:', response);
             console.log('response.cards:', response.cards);
             console.log('response.cards type:', typeof response.cards, 'isArray:', Array.isArray(response.cards));
             
             // Safely check if response.cards exists and is an array before accessing length
             const cards = response && response.cards ? response.cards : [];
             console.log('response.cards.length:', cards.length);
             console.log(`Retrieved ${cards.length} cards for IDs: ${cardsParam}`);
             return cards;
           } catch (error) {
             console.log(`Failed to get multiple card details, falling back to individual calls:`, error.message);
             // Fallback to individual calls if batch fails
             const results = [];
             for (const cardId of cardIds) {
               try {
                 const card = await this.getCardDetails(boardId, cardId);
                 if (card) results.push(card);
               } catch (err) {
                 console.warn(`Failed to get card ${cardId}:`, err.message);
               }
             }
             console.log('Fallback results:', results);
             return results;
           }
         }

  // Helper method to batch board details requests
  async getMultipleBoardDetails(boardIds) {
    console.log('=== getMultipleBoardDetails DEBUG ===');
    console.log('boardIds:', boardIds);
    console.log('boardIds type:', typeof boardIds, 'isArray:', Array.isArray(boardIds));
    console.log('boardIds.length:', boardIds ? boardIds.length : 'undefined');
    
    const uniqueBoardIds = [...new Set((boardIds || []).filter(id => id))];
    const boardPromises = uniqueBoardIds.map(async (boardId) => {
      try {
        const boardDetails = await this.getBoardDetails(boardId);
        return { boardId, boardDetails };
      } catch (error) {
        console.warn(`Could not fetch board details for board ${boardId}:`, error.message);
        return { boardId, boardDetails: null };
      }
    });
    
    const results = await Promise.all(boardPromises);
    const boardsMap = new Map();
    results.forEach(({ boardId, boardDetails }) => {
      if (boardDetails) {
        boardsMap.set(boardId, boardDetails);
      }
    });
    return boardsMap;
  }

         // Helper method to get all connected children for multiple parents at once
         async getMultipleConnectedChildren(parentIds) {
           console.log('=== getMultipleConnectedChildren DEBUG START ===');
           console.log('parentIds:', parentIds);
           console.log('parentIds type:', typeof parentIds, 'isArray:', Array.isArray(parentIds));
           console.log('parentIds.length:', parentIds ? parentIds.length : 'undefined');
           
           const parentPromises = parentIds.map(async (parentId) => {
             try {
               console.log('Fetching connected children for parent:', parentId);
               const connectedCards = await this.getConnectedChildCards(parentId);
               console.log(`Found ${connectedCards ? connectedCards.length : 'undefined'} connected cards for parent ${parentId}`);
               return { parentId, connectedCards };
             } catch (error) {
               console.warn(`Could not fetch connected children for parent ${parentId}:`, error.message);
               return { parentId, connectedCards: [] };
             }
           });
           
           console.log('About to call Promise.all for parent promises');
           const results = await Promise.all(parentPromises);
           console.log('Promise.all results:', results);
           
           const allConnectedCards = [];
           const parentChildMap = new Map();
           
           results.forEach(({ parentId, connectedCards }) => {
             console.log(`Processing results for parent ${parentId}:`, connectedCards);
             parentChildMap.set(parentId, connectedCards);
             if (connectedCards && Array.isArray(connectedCards)) {
               connectedCards.forEach(card => {
                 card._parentId = parentId; // Track which parent this came from
                 allConnectedCards.push(card);
               });
             }
           });
           
           console.log('Final allConnectedCards:', allConnectedCards);
           console.log('Final parentChildMap:', parentChildMap);
           return { allConnectedCards, parentChildMap };
         }

         // Get complete hierarchy for selected parent cards (OPTIMIZED)
         async getCardHierarchy(boardId, parentCardIds) {
           try {
             console.log('=== HIERARCHY DEBUG START ===');
             console.log('Getting hierarchy for board:', boardId, 'parent cards:', parentCardIds);
             console.log('boardId type:', typeof boardId, 'value:', boardId);
             console.log('parentCardIds type:', typeof parentCardIds, 'value:', parentCardIds);
             console.log('parentCardIds.length:', parentCardIds ? parentCardIds.length : 'undefined');

             if (!boardId || !parentCardIds || parentCardIds.length === 0) {
               console.log('Invalid parameters detected - throwing error');
               throw new Error('Invalid parameters: boardId and parentCardIds are required');
             }

      const allData = {
        parents: [],
        children: [],
        grandchildren: [],
        boards: new Map()
      };

             // Step 1: Get all board details and parent cards in parallel
             console.log('Step 1: Fetching board details and parent cards...');
             console.log('About to call getBoardDetails with boardId:', boardId);
             console.log('About to call getMultipleCardDetails with boardId:', boardId, 'parentCardIds:', parentCardIds);
             
             const [boardDetails, parentCards] = await Promise.all([
               this.getBoardDetails(boardId),
               this.getMultipleCardDetails(boardId, parentCardIds)
             ]);

             console.log('Step 1 complete - Board details:', boardDetails);
             console.log('Step 1 complete - Found parent cards:', parentCards);
             console.log('parentCards type:', typeof parentCards, 'isArray:', Array.isArray(parentCards));
             console.log('parentCards.length:', parentCards ? parentCards.length : 'undefined');
      
      allData.boards.set(boardId, boardDetails);
      allData.parents = parentCards;

      if (parentCards.length !== parentCardIds.length) {
        console.warn(`Expected ${parentCardIds.length} parent cards, but found ${parentCards.length}`);
      }

      // Step 2: Get all cards from the main board once (for efficient filtering)
      console.log('Step 2: Fetching all cards from main board...');
      const allMainBoardCards = await this.getCards(boardId);
      console.log('allMainBoardCards:', allMainBoardCards);
      console.log('allMainBoardCards type:', typeof allMainBoardCards, 'isArray:', Array.isArray(allMainBoardCards));
      console.log('allMainBoardCards.length:', allMainBoardCards ? allMainBoardCards.length : 'undefined');
      console.log(`Retrieved ${(allMainBoardCards || []).length} total cards from main board`);

             // Step 3: Get connected children for all parents in parallel
             console.log('Step 3: Fetching connected children...');
             console.log('parentCards before mapping:', parentCards);
             console.log('parentCards type:', typeof parentCards, 'isArray:', Array.isArray(parentCards));
             console.log('parentCards.length:', parentCards ? parentCards.length : 'undefined');
             
             const parentIds = (parentCards || []).map(p => p.id);
             console.log('parentIds after mapping:', parentIds);
             console.log('parentIds type:', typeof parentIds, 'isArray:', Array.isArray(parentIds));
             console.log('parentIds.length:', parentIds ? parentIds.length : 'undefined');
             
             const { allConnectedCards, parentChildMap } = await this.getMultipleConnectedChildren(parentIds);
             console.log(`Found ${allConnectedCards.length} total connected children`);

      // Step 4: Collect all unique board IDs from connected cards
      console.log('=== Step 4 Debug ===');
      console.log('allConnectedCards:', allConnectedCards);
      console.log('allConnectedCards type:', typeof allConnectedCards, 'isArray:', Array.isArray(allConnectedCards));
      console.log('allConnectedCards.length:', allConnectedCards ? allConnectedCards.length : 'undefined');
      
      const connectedBoardIds = [...new Set((allConnectedCards || []).map(card => card.boardId).filter(id => id))];
      console.log('Connected board IDs:', connectedBoardIds);

      // Step 5: Get all connected board details in parallel
      console.log('Step 5: Fetching connected board details...');
      const connectedBoardsMap = await this.getMultipleBoardDetails(connectedBoardIds);
      connectedBoardsMap.forEach((details, id) => allData.boards.set(id, details));

      // Step 6: Process regular children and connected children with many-to-many support
      console.log('Step 6: Processing children...');
      console.log('allData.parents:', allData.parents);
      console.log('allData.parents type:', typeof allData.parents, 'isArray:', Array.isArray(allData.parents));
      console.log('allData.parents.length:', allData.parents ? allData.parents.length : 'undefined');
      
      // Track unique children and their parent relationships
      const childParentMap = new Map(); // childId -> Set of parentIds
      const uniqueChildren = new Map(); // childId -> card object
      
      for (const parent of (allData.parents || [])) {
        console.log(`Processing parent: ${parent.title} (ID: ${parent.id})`);
        
        // Get regular children from main board
        const regularChildren = (allMainBoardCards || []).filter(card => 
          card.parentCards && card.parentCards.some(parentCard => 
            parentCard.id === parent.id || parentCard.id.toString() === parent.id.toString()
          )
        );
        console.log(`Found ${regularChildren.length} regular children for parent ${parent.title}`);
        
        // Track many-to-many relationships
        regularChildren.forEach(child => {
          const childId = child.id.toString();
          if (!childParentMap.has(childId)) {
            childParentMap.set(childId, new Set());
            uniqueChildren.set(childId, child);
          }
          childParentMap.get(childId).add(parent.id.toString());
        });

        // Get connected children for this parent
        const connectedChildren = parentChildMap.get(parent.id) || [];
        console.log(`Found ${connectedChildren.length} connected children for parent ${parent.title}`);
        
        connectedChildren.forEach(child => {
          const childId = child.id.toString();
          if (!childParentMap.has(childId)) {
            childParentMap.set(childId, new Set());
            uniqueChildren.set(childId, child);
          }
          childParentMap.get(childId).add(parent.id.toString());
        });
      }
      
      // For many-to-many relationships, duplicate children for each parent
      childParentMap.forEach((parentIds, childId) => {
        const child = uniqueChildren.get(childId);
        if (parentIds.size > 1) {
          // Child has multiple parents - create a copy for each parent
          console.log(`Child ${child.title} (${childId}) has ${parentIds.size} parents - creating duplicates for many-to-many relationship`);
          parentIds.forEach(parentId => {
            const childCopy = { ...child, _parentId: parentId, _isMultiParent: true };
            allData.children.push(childCopy);
          });
        } else {
          // Child has single parent - use as-is
          const parentId = Array.from(parentIds)[0];
          child._parentId = parentId;
          allData.children.push(child);
        }
      });
      
      console.log(`Total children (including duplicates for many-to-many): ${allData.children.length}`);
      console.log(`Unique children: ${uniqueChildren.size}`);

      // Step 7: Get grandchildren efficiently with many-to-many support
      console.log('Step 7: Processing grandchildren...');
      console.log('allData.children:', allData.children);
      console.log('allData.children type:', typeof allData.children, 'isArray:', Array.isArray(allData.children));
      console.log('allData.children.length:', allData.children ? allData.children.length : 'undefined');
      
      // Get unique child IDs for API calls (avoid duplicates from many-to-many)
      const uniqueChildIds = [...new Set((allData.children || []).map(child => child.id))];
      console.log('uniqueChildIds:', uniqueChildIds);
      console.log('uniqueChildIds.length:', uniqueChildIds ? uniqueChildIds.length : 'undefined');
      
      const childBoardIds = [...new Set((allData.children || []).map(child => child.boardId))];
      console.log('childBoardIds:', childBoardIds);
      
      // Get all cards from boards that have children
      const boardCardsPromises = childBoardIds.map(boardId => this.getCards(boardId));
      const allBoardCardsArrays = await Promise.all(boardCardsPromises);
      
      // Create a map of board cards for efficient lookup
      const boardCardsMap = new Map();
      childBoardIds.forEach((boardId, index) => {
        boardCardsMap.set(boardId, allBoardCardsArrays[index]);
      });

      // Get connected grandchildren for all unique children in parallel
      const { allConnectedCards: allConnectedGrandchildren } = await this.getMultipleConnectedChildren(uniqueChildIds);
      console.log(`Found ${(allConnectedGrandchildren || []).length} total connected grandchildren`);

      // Track unique grandchildren and their parent relationships
      const grandchildParentMap = new Map(); // grandchildId -> Set of parentIds (child IDs)
      const uniqueGrandchildren = new Map(); // grandchildId -> card object

      // Process grandchildren for each child instance (including duplicates)
      console.log('About to process grandchildren for children:', allData.children);
      for (const child of (allData.children || [])) {
        console.log(`Processing child: ${child.title} (ID: ${child.id})`);
        
        // Generate unique ID for this child instance (handles many-to-many children)
        const childInstanceId = child._isMultiParent ? `${child.id}_${child._parentId}` : child.id.toString();
        
        // Get regular grandchildren from the same board as the child
        const boardCards = boardCardsMap.get(child.boardId) || [];
        const regularGrandchildren = (boardCards || []).filter(card => 
          card.parentCards && card.parentCards.some(parentCard => 
            parentCard.id === child.id || parentCard.id.toString() === child.id.toString()
          )
        );
        console.log(`Found ${regularGrandchildren.length} regular grandchildren for child ${child.title}`);
        
        // Track many-to-many relationships for grandchildren
        regularGrandchildren.forEach(grandchild => {
          const grandchildId = grandchild.id.toString();
          if (!grandchildParentMap.has(grandchildId)) {
            grandchildParentMap.set(grandchildId, new Set());
            uniqueGrandchildren.set(grandchildId, grandchild);
          }
          grandchildParentMap.get(grandchildId).add(childInstanceId);
        });
      }
      
      // Add connected grandchildren to the map
      if (allConnectedGrandchildren && Array.isArray(allConnectedGrandchildren)) {
        allConnectedGrandchildren.forEach(grandchild => {
          const grandchildId = grandchild.id.toString();
          const childInstanceId = grandchild._parentId ? 
            (grandchild._isMultiParent ? `${grandchild._parentId}_parent` : grandchild._parentId.toString()) : 
            grandchild._parentId;
          
          if (!grandchildParentMap.has(grandchildId)) {
            grandchildParentMap.set(grandchildId, new Set());
            uniqueGrandchildren.set(grandchildId, grandchild);
          }
          if (childInstanceId) {
            grandchildParentMap.get(grandchildId).add(childInstanceId);
          }
        });
      }
      
      // For many-to-many relationships, duplicate grandchildren for each child parent
      grandchildParentMap.forEach((parentIds, grandchildId) => {
        const grandchild = uniqueGrandchildren.get(grandchildId);
        if (parentIds.size > 1) {
          console.log(`Grandchild ${grandchild.title} (${grandchildId}) has ${parentIds.size} parents - creating duplicates`);
          parentIds.forEach(parentId => {
            const grandchildCopy = { ...grandchild, _parentId: parentId, _isMultiParent: true };
            allData.grandchildren.push(grandchildCopy);
          });
        } else {
          const parentId = Array.from(parentIds)[0];
          grandchild._parentId = parentId;
          allData.grandchildren.push(grandchild);
        }
      });
      
      console.log(`Total grandchildren (including duplicates for many-to-many): ${allData.grandchildren.length}`);
      console.log(`Unique grandchildren: ${uniqueGrandchildren.size}`);

      // Step 8: Get board details for any new boards from grandchildren
      const grandchildBoardIds = [...new Set((allConnectedGrandchildren || []).map(card => card.boardId).filter(id => id && !allData.boards.has(id)))];
      if (grandchildBoardIds.length > 0) {
        console.log('Step 8: Fetching grandchild board details...');
        const grandchildBoardsMap = await this.getMultipleBoardDetails(grandchildBoardIds);
        grandchildBoardsMap.forEach((details, id) => allData.boards.set(id, details));
      }

      // Check if we have any data to transform
      console.log('=== FINAL DATA CHECK ===');
      console.log('allData.parents:', allData.parents);
      console.log('allData.parents type:', typeof allData.parents, 'isArray:', Array.isArray(allData.parents));
      console.log('allData.parents.length:', allData.parents ? allData.parents.length : 'undefined');
      console.log('allData.children:', allData.children);
      console.log('allData.children type:', typeof allData.children, 'isArray:', Array.isArray(allData.children));
      console.log('allData.children.length:', allData.children ? allData.children.length : 'undefined');
      console.log('allData.grandchildren:', allData.grandchildren);
      console.log('allData.grandchildren type:', typeof allData.grandchildren, 'isArray:', Array.isArray(allData.grandchildren));
      console.log('allData.grandchildren.length:', allData.grandchildren ? allData.grandchildren.length : 'undefined');
      
      if (!allData.parents || allData.parents.length === 0) {
        console.log('No parent cards found - throwing error');
        throw new Error('No parent cards found. Please check your selection and try again.');
      }

      // If no children or grandchildren found, still show parent cards
      if ((!allData.children || allData.children.length === 0) && (!allData.grandchildren || allData.grandchildren.length === 0)) {
        console.log('No child or grandchild cards found. Showing parent cards only.');
      }

      console.log('=== ABOUT TO TRANSFORM DATA ===');
      console.log('allData.parents:', allData.parents);
      console.log('allData.children:', allData.children);
      console.log('allData.grandchildren:', allData.grandchildren);
      console.log('allData.boards:', allData.boards);

      const transformedData = this.transformToMindMapData(
        allData.parents,
        allData.children,
        allData.grandchildren,
        allData.boards
      );

      console.log(`Optimized hierarchy complete: ${transformedData.length} total nodes`);
      console.log(`- ${(allData.parents || []).length} parent cards`);
      console.log(`- ${(allData.children || []).length} child cards`);
      console.log(`- ${(allData.grandchildren || []).length} grandchild cards`);
      
      return transformedData;
    } catch (error) {
      console.error('Error fetching card hierarchy:', error);
      throw new Error(`Failed to fetch card hierarchy: ${error.message}`);
    }
  }
}

const agilePlaceAPI = new AgilePlaceAPI();
export default agilePlaceAPI;
