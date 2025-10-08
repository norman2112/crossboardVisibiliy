import React, { useState, useEffect, memo } from 'react';
import './Settings.css';

const Settings = ({ isOpen, onClose, onSave }) => {
  const [agilePlaceUrl, setAgilePlaceUrl] = useState('');
  const [agilePlaceToken, setAgilePlaceToken] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedUrl = localStorage.getItem('agilePlaceUrl');
    const savedToken = localStorage.getItem('agilePlaceToken');
    
    if (savedUrl) setAgilePlaceUrl(savedUrl);
    if (savedToken) setAgilePlaceToken(savedToken);
  }, []);

  // Track if settings have changed
  useEffect(() => {
    const savedUrl = localStorage.getItem('agilePlaceUrl') || '';
    const savedToken = localStorage.getItem('agilePlaceToken') || '';
    
    const urlChanged = agilePlaceUrl !== savedUrl;
    const tokenChanged = agilePlaceToken !== savedToken;
    const isChanged = urlChanged || tokenChanged;
    
    console.log('Settings change check:', {
      urlChanged,
      tokenChanged,
      isChanged,
      currentUrl: agilePlaceUrl,
      savedUrl,
      currentTokenLength: agilePlaceToken.length,
      savedTokenLength: savedToken.length
    });
    
    setIsDirty(isChanged);
  }, [agilePlaceUrl, agilePlaceToken]);

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('agilePlaceUrl', agilePlaceUrl);
    localStorage.setItem('agilePlaceToken', agilePlaceToken);
    
    // Notify parent component
    onSave({
      url: agilePlaceUrl,
      token: agilePlaceToken
    });
    
    setIsDirty(false);
    onClose();
  };

  const handleCancel = () => {
    // Reset to saved values
    const savedUrl = localStorage.getItem('agilePlaceUrl') || '';
    const savedToken = localStorage.getItem('agilePlaceToken') || '';
    
    setAgilePlaceUrl(savedUrl);
    setAgilePlaceToken(savedToken);
    setIsDirty(false);
    onClose();
  };

  const handleReset = () => {
    setAgilePlaceUrl('');
    setAgilePlaceToken('');
  };

  if (!isOpen) return null;

  return (
    <div className="settings-overlay">
      <div className="settings-panel">
        <div className="settings-header">
          <h3>Settings</h3>
          <button className="close-button" onClick={handleCancel} title="Close Settings">
            ×
          </button>
        </div>
        
        <div className="settings-content">
          <div className="settings-section">
            <h4>AgilePlace Configuration</h4>
            <p className="settings-description">
              Configure your AgilePlace URL and API token to connect to your instance.
            </p>
            
            <div className="form-group">
              <label htmlFor="agilePlaceUrl">AgilePlace URL</label>
              <input
                id="agilePlaceUrl"
                type="url"
                value={agilePlaceUrl}
                onChange={(e) => setAgilePlaceUrl(e.target.value)}
                placeholder="https://your-instance.leankit.com"
                className="settings-input"
              />
              <small className="form-help">
                The base URL of your AgilePlace instance (e.g., https://scdemo320.leankit.com)
              </small>
            </div>
            
            <div className="form-group">
              <label htmlFor="agilePlaceToken">API Token</label>
              <input
                id="agilePlaceToken"
                type="password"
                value={agilePlaceToken}
                onChange={(e) => setAgilePlaceToken(e.target.value)}
                placeholder="Your API token"
                className="settings-input"
              />
              <small className="form-help">
                Your AgilePlace API token for authentication
              </small>
            </div>
          </div>
        </div>
        
        <div className="settings-actions">
          <button 
            className="settings-button reset-button" 
            onClick={handleReset}
            disabled={!agilePlaceUrl && !agilePlaceToken}
          >
            Reset
          </button>
          <div className="settings-actions-right">
            <button 
              className="settings-button cancel-button" 
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button 
              className="settings-button save-button" 
              onClick={handleSave}
              disabled={!isDirty && (!agilePlaceUrl || !agilePlaceToken)}
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Settings);
