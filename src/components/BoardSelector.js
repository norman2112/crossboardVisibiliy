import React, { useState, useEffect, useCallback, memo } from 'react';
import agilePlaceAPI from '../services/agilePlaceAPI';
import './BoardSelector.css';

const BoardSelector = ({ onBoardSelect, selectedBoardId, credentialsConfigured }) => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadBoards = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const boardsData = await agilePlaceAPI.getBoards();
      setBoards(boardsData || []);
    } catch (err) {
      setError('Failed to load boards. Please check your connection and try again.');
      console.error('Error loading boards:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (credentialsConfigured) {
      loadBoards();
    } else {
      setLoading(false);
      setError(null);
    }
  }, [loadBoards, credentialsConfigured]);

  const handleBoardChange = (event) => {
    const boardId = event.target.value;
    if (boardId) {
      const selectedBoard = boards.find(board => board.id.toString() === boardId);
      onBoardSelect(selectedBoard);
    } else {
      onBoardSelect(null);
    }
  };

  if (!credentialsConfigured) {
    return (
      <div className="board-selector">
        <label className="selector-label">Select Board:</label>
        <div className="loading">Configure credentials to load boards</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="board-selector">
        <label className="selector-label">Select Board:</label>
        <div className="loading">Loading boards...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="board-selector">
        <label className="selector-label">Select Board:</label>
        <div className="error">
          {error}
          <button onClick={loadBoards} className="retry-button">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="board-selector">
      <label className="selector-label">Select Board:</label>
      <select 
        value={selectedBoardId || ''} 
        onChange={handleBoardChange}
        className="board-dropdown"
      >
        <option value="">Choose a board...</option>
        {boards.map(board => (
          <option key={board.id} value={board.id}>
            {board.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(BoardSelector);
