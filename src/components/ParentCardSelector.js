import React, { useState, useEffect, useCallback, memo } from 'react';
import agilePlaceAPI from '../services/agilePlaceAPI';
import './ParentCardSelector.css';

const ParentCardSelector = ({ boardId, onParentCardsSelect, selectedParentCardIds }) => {
  const [parentCards, setParentCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadParentCards = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Loading parent cards for board:', boardId);
      const cardsData = await agilePlaceAPI.getParentCards(boardId);
      console.log('Received parent cards data:', cardsData);
      setParentCards(cardsData || []);
    } catch (err) {
      setError('Failed to load parent cards. Please try again.');
      console.error('Error loading parent cards:', err);
    } finally {
      setLoading(false);
    }
  }, [boardId]);

  useEffect(() => {
    if (boardId) {
      loadParentCards();
    } else {
      setParentCards([]);
    }
  }, [boardId, loadParentCards]);

  const handleCardToggle = (cardId) => {
    const newSelectedIds = selectedParentCardIds.includes(cardId)
      ? selectedParentCardIds.filter(id => id !== cardId)
      : [...selectedParentCardIds, cardId];
    
    onParentCardsSelect(newSelectedIds);
  };

  if (!boardId) {
    return (
      <div className="parent-card-selector">
        <label className="selector-label">Select Parent Cards:</label>
        <div className="no-board-message">Please select a board first</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="parent-card-selector">
        <label className="selector-label">Select Parent Cards:</label>
        <div className="loading">Loading parent cards...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="parent-card-selector">
        <label className="selector-label">Select Parent Cards:</label>
        <div className="error">
          {error}
          <button onClick={loadParentCards} className="retry-button">Retry</button>
        </div>
      </div>
    );
  }

  if (parentCards.length === 0) {
    return (
      <div className="parent-card-selector">
        <label className="selector-label">Select Parent Cards:</label>
        <div className="no-cards-message">No parent cards found in this board</div>
      </div>
    );
  }

  return (
    <div className="parent-card-selector">
      <div className="selector-header">
        <label className="selector-label">Select Parent Cards:</label>
      </div>
      
      <div className="card-list">
        {parentCards.map(card => (
          <div 
            key={card.id} 
            className={`card-item ${selectedParentCardIds.includes(card.id) ? 'selected' : ''}`}
            onClick={() => handleCardToggle(card.id)}
          >
            <input
              type="checkbox"
              checked={selectedParentCardIds.includes(card.id)}
              onChange={() => handleCardToggle(card.id)}
              className="card-checkbox"
            />
            <div className="card-content">
              <div className="card-title">{card.title}</div>
              {card.description && (
                <div className="card-description">{card.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="selection-summary">
        {selectedParentCardIds.length} of {parentCards.length} cards selected
      </div>
    </div>
  );
};

export default memo(ParentCardSelector);
