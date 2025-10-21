import React, { useState, useEffect } from 'react';
import MindMapDiagram from './MindMapDiagram';
import TreeView from './components/TreeView';
import BoardSelector from './components/BoardSelector';
import ParentCardSelector from './components/ParentCardSelector';
import Settings from './components/Settings';
import agilePlaceAPI from './services/agilePlaceAPI';
import './App.css';

function App() {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedParentCardIds, setSelectedParentCardIds] = useState([]);
  const [mindMapData, setMindMapData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [orientation, setOrientation] = useState('TopToBottom');
  const [credentialsConfigured, setCredentialsConfigured] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [extraLargeNodes, setExtraLargeNodes] = useState(false);
  const [currentView, setCurrentView] = useState('mindmap'); // 'mindmap' or 'tree'

  // Check if credentials are configured
  const hasCredentials = () => {
    const url = localStorage.getItem('agilePlaceUrl');
    const token = localStorage.getItem('agilePlaceToken');
    return url && token;
  };

  // Check credentials on mount
  useEffect(() => {
    setCredentialsConfigured(hasCredentials());
  }, []);

  const handleBoardSelect = (board) => {
    setSelectedBoard(board);
    setSelectedParentCardIds([]);
    setMindMapData([]);
    setError(null);
  };

  const handleParentCardsSelect = (parentCardIds) => {
    setSelectedParentCardIds(parentCardIds);
    setMindMapData([]);
    setError(null);
  };

  const handleGenerateMindMap = async () => {
    if (!selectedBoard || selectedParentCardIds.length === 0) {
      setError('Please select a board and at least one parent card.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setCurrentView('mindmap');
      console.log('Starting mind map generation...');
      const data = await agilePlaceAPI.getCardHierarchy(selectedBoard.id, selectedParentCardIds);
      console.log('Mind map generation successful:', data);
      setMindMapData(data);
    } catch (err) {
      console.error('Error generating mind map:', err);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to load card hierarchy. Please try again.';
      
      if (err.message.includes('No parent cards found')) {
        errorMessage = 'Selected parent cards were not found. Please refresh and try again.';
      } else if (err.message.includes('Invalid parameters')) {
        errorMessage = 'Invalid selection. Please select a board and parent cards.';
      } else if (err.message.includes('API request failed')) {
        errorMessage = 'Unable to connect to AgilePlace. Please check your settings.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateTreeView = async () => {
    if (!selectedBoard || selectedParentCardIds.length === 0) {
      setError('Please select a board and at least one parent card.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setCurrentView('tree');
      console.log('Starting tree view generation...');
      const data = await agilePlaceAPI.getCardHierarchy(selectedBoard.id, selectedParentCardIds);
      console.log('Tree view generation successful:', data);
      setMindMapData(data);
    } catch (err) {
      console.error('Error generating tree view:', err);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to load card hierarchy. Please try again.';
      
      if (err.message.includes('No parent cards found')) {
        errorMessage = 'Selected parent cards were not found. Please refresh and try again.';
      } else if (err.message.includes('Invalid parameters')) {
        errorMessage = 'Invalid selection. Please select a board and parent cards.';
      } else if (err.message.includes('API request failed')) {
        errorMessage = 'Unable to connect to AgilePlace. Please check your settings.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleClearMap = () => {
    setMindMapData([]);
    setError(null);
    console.log('Mind map cleared');
  };

  const handleSettingsSave = (settings) => {
    // Update the API configuration with new settings
    agilePlaceAPI.updateConfig(settings.url, settings.token);
    console.log('Settings saved:', settings);
    console.log('Updated AgilePlaceAPI config - URL:', settings.url, 'Token:', settings.token ? `${settings.token.substring(0, 10)}...` : 'none');
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
    setCredentialsConfigured(hasCredentials());
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <h1>Planview Cross-Board Connections</h1>
        </div>
        <button 
          className="settings-header-button" 
          onClick={handleOpenSettings}
          title="Settings"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>
      </header>
      <main className="App-main">
        <div className="controls-panel">
          {!credentialsConfigured && (
            <div className="credentials-prompt">
              <div className="prompt-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <div className="prompt-content">
                <h3>Setup Required</h3>
                <p>Please configure your Planview AgilePlace credentials in settings to get started.</p>
                <button 
                  className="prompt-button"
                  onClick={() => setIsSettingsOpen(true)}
                >
                  Open Settings
                </button>
              </div>
            </div>
          )}
          
          <BoardSelector 
            onBoardSelect={handleBoardSelect}
            selectedBoardId={selectedBoard?.id}
            credentialsConfigured={credentialsConfigured}
          />
          
          <ParentCardSelector
            boardId={selectedBoard?.id}
            onParentCardsSelect={handleParentCardsSelect}
            selectedParentCardIds={selectedParentCardIds}
          />
          
          <div className="advanced-options-section">
            <button 
              className="advanced-options-toggle"
              onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
            >
              <span className="toggle-icon">{showAdvancedOptions ? '▼' : '▶'}</span>
              <span>Advanced Options</span>
            </button>
            
            {showAdvancedOptions && (
              <div className="advanced-options-content">
                <div className="orientation-selector">
                  <label className="selector-label">Map Orientation:</label>
                  <div className="orientation-options">
                    <label className="orientation-option">
                      <input
                        type="radio"
                        name="orientation"
                        value="LeftToRight"
                        checked={orientation === 'LeftToRight'}
                        onChange={(e) => setOrientation(e.target.value)}
                      />
                      <span>Left to Right</span>
                    </label>
                    <label className="orientation-option">
                      <input
                        type="radio"
                        name="orientation"
                        value="TopToBottom"
                        checked={orientation === 'TopToBottom'}
                        onChange={(e) => setOrientation(e.target.value)}
                      />
                      <span>Top to Bottom</span>
                    </label>
                    <label className="orientation-option">
                      <input
                        type="radio"
                        name="orientation"
                        value="RightToLeft"
                        checked={orientation === 'RightToLeft'}
                        onChange={(e) => setOrientation(e.target.value)}
                      />
                      <span>Right to Left</span>
                    </label>
                    <label className="orientation-option">
                      <input
                        type="radio"
                        name="orientation"
                        value="BottomToTop"
                        checked={orientation === 'BottomToTop'}
                        onChange={(e) => setOrientation(e.target.value)}
                      />
                      <span>Bottom to Top</span>
                    </label>
                  </div>
                </div>
                
                <div className="node-size-selector">
                  <label className="checkbox-option">
                    <input
                      type="checkbox"
                      checked={extraLargeNodes}
                      onChange={(e) => setExtraLargeNodes(e.target.checked)}
                    />
                    <span>Extra Large Nodes</span>
                  </label>
                </div>
              </div>
            )}
          </div>
          
          <div className="action-buttons">
                   <button
                     onClick={handleGenerateMindMap}
                     disabled={!selectedBoard || selectedParentCardIds.length === 0 || loading}
                     className="generate-button"
                   >
                     {loading && currentView === 'mindmap' ? 'Loading...' : 'Generate Map'}
                   </button>
                   
                   <button
                     onClick={handleGenerateTreeView}
                     disabled={!selectedBoard || selectedParentCardIds.length === 0 || loading}
                     className="generate-tree-button"
                   >
                     {loading && currentView === 'tree' ? 'Loading...' : 'Generate Tree View'}
                   </button>
                   
                   <button
                     onClick={handleClearMap}
                     disabled={mindMapData.length === 0}
                     className="clear-button"
                   >
                     Clear Map
                   </button>
            
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
          </div>
        </div>
        
        <div className="diagram-panel">
                 {mindMapData.length > 0 ? (
                   currentView === 'mindmap' ? (
                     <MindMapDiagram data={mindMapData} orientation={orientation} extraLarge={extraLargeNodes} />
                   ) : (
                     <TreeView data={mindMapData} orientation={orientation} extraLarge={extraLargeNodes} />
                   )
                 ) : (
                   <div className="placeholder">
                     <p>Select a board and parent cards, then click "Generate Map" or "Generate Tree View" to view the hierarchy.</p>
                   </div>
                 )}
        </div>
      </main>
      
      <Settings
        isOpen={isSettingsOpen}
        onClose={handleCloseSettings}
        onSave={handleSettingsSave}
      />
    </div>
  );
}

export default App;
