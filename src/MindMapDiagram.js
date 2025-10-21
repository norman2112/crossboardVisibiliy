import React, { useRef, useState, useMemo, memo } from 'react';
import {
  DiagramComponent,
  Inject,
  DataBinding,
  HierarchicalTree,
  MindMap,
} from '@syncfusion/ej2-react-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import { SAMPLE_DATA } from './data/sampleData';
import './MindMapDiagram.css';

const MindMapDiagram = ({ data = [], orientation = 'TopToBottom', extraLarge = false }) => {
  const diagramInstance = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  // Set node dimensions based on extraLarge prop
  const nodeWidth = extraLarge ? 225 : 150;
  const nodeHeight = extraLarge ? 125 : 100;

  // Zoom control functions
  const zoomIn = () => {
    if (diagramInstance.current) {
      diagramInstance.current.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
    }
  };

  const zoomOut = () => {
    if (diagramInstance.current) {
      diagramInstance.current.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
    }
  };

  const resetZoom = () => {
    if (diagramInstance.current) {
      diagramInstance.current.zoomTo({ type: 'ZoomToFit' });
    }
  };

  // Handle card click to show details panel
  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    setIsPanelOpen(true);
  };

  // Close the details panel
  const closePanel = () => {
    setIsPanelOpen(false);
    setSelectedCard(null);
  };

  // Use provided data or fallback to sample data
  const diagramData = data.length > 0 ? data : SAMPLE_DATA;
  const isShowingSampleData = data.length === 0;

  // Generate dynamic legend based on actual card types from AgilePlace
  const legendData = useMemo(() => {
    // Get unique card types from the actual data, using cardType field if available
    const rawCardTypes = diagramData.map(item => item.cardType || item.type);
    
    const cardTypes = [...new Set(rawCardTypes)]
      .filter(cardType => cardType != null && cardType !== ''); // Filter out null, undefined, and empty strings
    
    // Create a map of card types to their colors and levels
    const cardTypeToColor = {};
    const cardTypeToLevel = {};
    diagramData.forEach(item => {
      const cardType = item.cardType || item.type;
      const level = item.level || item.type;
      const color = item.cardColor;
      
      if (!cardTypeToLevel[cardType]) {
        cardTypeToLevel[cardType] = level;
      }
      
      if (color && !cardTypeToColor[cardType]) {
        cardTypeToColor[cardType] = color;
      }
    });

    // Define the styling for each level (for color assignment)
    const levelStyles = {
      'L1': { color: 'l1' },
      'L2': { color: 'l2' },
      'L3': { color: 'l3' },
      'l1': { color: 'l1' },
      'l2': { color: 'l2' },
      'l3': { color: 'l3' }
    };

    // Sort card types to ensure consistent order (by level first, then alphabetically)
    const sortedCardTypes = cardTypes.sort((a, b) => {
      // Ensure we're working with strings
      const aStr = String(a || '');
      const bStr = String(b || '');
      
      const aLevel = cardTypeToLevel[a];
      const bLevel = cardTypeToLevel[b];
      
      // Define level priority order
      const levelOrder = ['L1', 'L2', 'L3', 'l1', 'l2', 'l3'];
      const aLevelIndex = levelOrder.indexOf(aLevel);
      const bLevelIndex = levelOrder.indexOf(bLevel);
      
      // If both have defined levels, sort by level order
      if (aLevelIndex !== -1 && bLevelIndex !== -1) {
        if (aLevelIndex !== bLevelIndex) {
          return aLevelIndex - bLevelIndex;
        }
        // If same level, sort alphabetically
        return aStr.localeCompare(bStr);
      }
      
      // If only one has a defined level, prioritize it
      if (aLevelIndex !== -1) return -1;
      if (bLevelIndex !== -1) return 1;
      
      // If neither has a defined level, sort alphabetically
      return aStr.localeCompare(bStr);
    });

    return sortedCardTypes.map(cardType => {
      const level = cardTypeToLevel[cardType];
      const actualColor = cardTypeToColor[cardType];
      
      // Use actual color from AgilePlace if available, otherwise fall back to level-based color
      const colorStyle = actualColor ? { backgroundColor: actualColor } : {};
      const colorClass = actualColor ? 'custom-color' : (levelStyles[level] || levelStyles[level?.toUpperCase()] || { color: 'l1' }).color;
      
      return (
        <div key={cardType} className="legend-item">
          <div 
            className={`legend-color ${colorClass}`}
            style={colorStyle}
          ></div>
          <span>{cardType}</span>
        </div>
      );
    });
  }, [diagramData]);

  // Syncfusion will handle hyperlink clicks automatically via the hyperlink property


  // Configure data source
  const dataSourceSettings = {
    id: 'id',
    parentId: 'parentId',
    dataSource: new DataManager(diagramData),
        doBinding: (nodeModel, data) => {
          const nodeStyle = getNodeStyle(data);
      
      // Split long text into multiple lines manually for better control
      const maxCharsPerLine = extraLarge ? 25 : 15;
      const words = data.label.split(' ');
      let lines = [];
      let currentLine = '';
      
      words.forEach(word => {
        if ((currentLine + word).length <= maxCharsPerLine) {
          currentLine += (currentLine ? ' ' : '') + word;
        } else {
          if (currentLine) lines.push(currentLine);
          currentLine = word;
        }
      });
      if (currentLine) lines.push(currentLine);
      
      // Create the content with card title and board name using separate annotations
      const cardTitle = lines.join('\n');
      const boardName = data.boardName || 'Unknown Board';
      
      nodeModel.annotations = [
               // Card title annotation - bigger and bold with click handler
               {
                 content: cardTitle,
                 offset: { x: 0.5, y: 0.3 }, // Center horizontally, position in upper third
                 style: {
                   color: nodeStyle.color,
                   fontSize: extraLarge ? 16 : 14,
                   fontFamily: 'Avenir, Arial, sans-serif',
                   fontWeight: '900',
                   textAlign: 'Center',
                   textWrapping: 'NoWrap',
                   whiteSpace: 'PreLine'
                 }
               },
        // Board name annotation - smaller and normal weight
        {
          content: boardName,
          offset: { x: 0.5, y: 0.7 }, // Center horizontally, position in lower third
          style: {
            color: nodeStyle.color,
            fontSize: extraLarge ? 12 : 10,
            fontFamily: 'Avenir, Arial, sans-serif',
            fontWeight: '400',
            textAlign: 'Center',
            textWrapping: 'NoWrap',
            whiteSpace: 'PreLine'
          }
        }
      ];
      
      // Store card ID and URL for click handling
      nodeModel.addInfo = {
        cardId: data.cardId,
        cardUrl: `https://scdemo320.leankit.com/card/${data.cardId}`
      };
      
             nodeModel.style = nodeStyle;
             nodeModel.width = nodeWidth;
             nodeModel.height = nodeHeight;
             nodeModel.shape = { type: 'Basic', shape: 'Rectangle', cornerRadius: 10 }; // Rounded corners
             
             // Add shadow to the node
             nodeModel.shadow = {
               angle: 45,
               distance: 4,
               opacity: 0.15,
               color: '#000000'
             };
             
             // Force the style to be applied by explicitly setting properties
             if (nodeStyle.fill) {
               nodeModel.style.fill = nodeStyle.fill;
               nodeModel.style.strokeColor = nodeStyle.strokeColor;
               nodeModel.style.strokeWidth = nodeStyle.strokeWidth;
               nodeModel.style.color = nodeStyle.color;
             }
    },
  };

  // Get node style based on actual card color or level
  const getNodeStyle = (data) => {
    // Use actual card color from AgilePlace if available
    if (data.cardColor) {
      return {
        fill: data.cardColor,
        strokeColor: data.cardColor,
        strokeWidth: 0,
        color: data.textColor || 'white', // Use dynamic text color or fallback to white
      };
    }
    
    // Fall back to level-based colors
    const type = data.type || data.level || 'default';
    switch (type.toLowerCase()) {
      case 'l1':
        return {
          fill: '#000000', // Black
          strokeColor: '#000000',
          strokeWidth: 0,
          color: 'white', // White text on black background
        };
      case 'l2':
        return {
          fill: '#527a8e', // Blue
          strokeColor: '#527a8e',
          strokeWidth: 0,
          color: 'white', // White text on dark blue background
        };
      case 'l3':
        return {
          fill: '#b60000', // Red
          strokeColor: '#b60000',
          strokeWidth: 0,
          color: 'white', // White text on dark red background
        };
      // Legacy support for old card types (fallback)
      case 'epic':
        return {
          fill: '#000000', // Black
          strokeColor: '#000000',
          strokeWidth: 0,
          color: 'white', // White text on black background
        };
      case 'feature':
        return {
          fill: '#527a8e', // Blue
          strokeColor: '#527a8e',
          strokeWidth: 0,
          color: 'white', // White text on dark blue background
        };
      case 'story':
        return {
          fill: '#b60000', // Red
          strokeColor: '#b60000',
          strokeWidth: 0,
          color: 'white', // White text on dark red background
        };
      default:
        return {
          fill: '#6b7280', // Gray
          strokeColor: '#6b7280',
          strokeWidth: 0,
          color: 'white', // White text on gray background
        };
    }
  };

  // Layout configuration for mind map
  const layout = {
    type: 'HierarchicalTree',
    horizontalSpacing: 100,
    verticalSpacing: 80,
    orientation: orientation,
    margin: { left: 20, right: 20, top: 20, bottom: 20 },
  };

  // Connector style
  const connectorDefaults = {
    type: 'Bezier',
    style: {
      strokeColor: '#CCCCCC', // Light grey
      strokeWidth: 1,
    },
    targetDecorator: {
      shape: 'Circle',
      style: {
        fill: '#CCCCCC',
        strokeColor: '#CCCCCC',
        strokeWidth: 1
      }
    },
  };

  return (
    <div className="diagram-container">
      {isShowingSampleData && (
        <div className="sample-data-banner">
          <span className="banner-icon">ℹ️</span>
          <span className="banner-text">
            Showing sample data for demonstration. Select a board and parent cards to visualize your actual cross-board connections.
          </span>
        </div>
      )}
      
      <div className="legend">
        {legendData}
      </div>
      
      <DiagramComponent
        ref={diagramInstance}
        width="100%"
        height="100%"
        dataSourceSettings={dataSourceSettings}
        layout={layout}
        getNodeDefaults={(node) => {
          node.height = nodeHeight;
          node.width = nodeWidth;
          // Add shadow to all nodes
          node.shadow = {
            angle: 45,
            distance: 4,
            opacity: 0.15,
            color: '#000000'
          };
          // Enable PointerEvents to allow node clicks
          node.constraints = 16793598; // Default constraints with PointerEvents enabled
          if (node.annotations && node.annotations.length > 0) {
            // Update first annotation (card title) - bigger and bold
            if (node.annotations[0]) {
              node.annotations[0].offset = { x: 0.5, y: 0.3 };
              node.annotations[0].style.textWrapping = 'NoWrap';
              node.annotations[0].style.textAlign = 'Center';
              node.annotations[0].style.fontWeight = '900';
              node.annotations[0].style.fontSize = extraLarge ? 16 : 14;
              node.annotations[0].style.whiteSpace = 'PreLine';
              node.annotations[0].style.cursor = 'pointer';
            }
            // Update second annotation (board name) - smaller and normal weight
            if (node.annotations[1]) {
              node.annotations[1].offset = { x: 0.5, y: 0.7 };
              node.annotations[1].style.textWrapping = 'NoWrap';
              node.annotations[1].style.textAlign = 'Center';
              node.annotations[1].style.fontWeight = '400';
              node.annotations[1].style.fontSize = extraLarge ? 12 : 10;
              node.annotations[1].style.whiteSpace = 'PreLine';
            }
          }
          return node;
        }}
        connectorDefaults={connectorDefaults}
        snapSettings={{ constraints: 0 }}
        // Enable node selection and clicks
        tool={1} // Enable selection tool
        allowPan={false}
        allowZoom={true}
        showTooltip={false}
        // Disable built-in toolbar/controls
        builtinControls={false}
        zoomFactor={0.2}
        minZoom={0.1}
        maxZoom={3}
        scrollSettings={{
          canAutoScroll: true,
          scrollLimit: 'Infinity',
          horizontalOffset: 0,
          verticalOffset: 0
        }}
        click={(args) => {
          if (args && args.element && args.element.addInfo) {
            // Find the card data from our diagram data
            const cardData = diagramData.find(card => card.cardId === args.element.addInfo.cardId);
            if (cardData) {
              handleCardClick(cardData);
            }
          }
        }}
      >
        <Inject services={[DataBinding, HierarchicalTree, MindMap]} />
      </DiagramComponent>
      
      {/* Custom Zoom Controls */}
      <div className="zoom-controls">
        <button className="zoom-button" onClick={zoomIn} title="Zoom In">
          +
        </button>
        <button className="zoom-button" onClick={zoomOut} title="Zoom Out">
          −
        </button>
        <button className="zoom-button" onClick={resetZoom} title="Reset Zoom">
          ⌂
        </button>
      </div>

      {/* Card Details Slideout Panel */}
      {isPanelOpen && selectedCard && (
        <div className={`card-details-panel ${isPanelOpen ? 'open' : ''}`}>
          <div className="panel-header">
            <h3>{selectedCard.label}</h3>
            <button className="close-button" onClick={closePanel} title="Close Panel">
              ×
            </button>
          </div>
          <div className="panel-content">
            <div className="card-info">
              {selectedCard.cardType && (
                <div className="info-row">
                  <span className="label">Card Type:</span>
                  <span className="value">{selectedCard.cardType}</span>
                </div>
              )}
              <div className="info-row">
                <span className="label">Board:</span>
                <span className="value">{selectedCard.boardName}</span>
              </div>
              <div className="info-row">
                <span className="label">Card ID:</span>
                <span className="value">{selectedCard.cardId}</span>
              </div>
              {selectedCard.originalData && (
                <>
                  {selectedCard.originalData.description && (
                    <div className="info-row full-width">
                      <span className="label">Description:</span>
                      <div className="value description">{selectedCard.originalData.description}</div>
                    </div>
                  )}
                  {selectedCard.originalData.assignees && selectedCard.originalData.assignees.length > 0 && (
                    <div className="info-row">
                      <span className="label">Assignees:</span>
                      <span className="value">{selectedCard.originalData.assignees.map(a => a.fullName).join(', ')}</span>
                    </div>
                  )}
                  {selectedCard.originalData.tags && selectedCard.originalData.tags.length > 0 && (
                    <div className="info-row">
                      <span className="label">Tags:</span>
                      <span className="value">{selectedCard.originalData.tags.join(', ')}</span>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="panel-actions">
              <a 
                href={`https://scdemo320.leankit.com/card/${selectedCard.cardId}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link-button"
              >
                Open in AgilePlace ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(MindMapDiagram);
