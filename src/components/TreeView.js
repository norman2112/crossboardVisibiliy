import React, { useMemo } from 'react';
import { Tree } from 'react-arborist';
import './TreeView.css';

const TreeView = ({ data = [], orientation = 'TopToBottom', extraLarge = false }) => {
  // Transform mind map data to tree format
  const treeData = useMemo(() => {
    if (!data || data.length === 0) return [];
    
    // Create a map for quick lookup
    const nodeMap = new Map();
    const rootNodes = [];
    
    // First pass: create all nodes
    data.forEach(item => {
      nodeMap.set(item.id, {
        id: item.id,
        name: item.label,
        boardName: item.boardName,
        cardType: item.cardType,
        cardColor: item.cardColor,
        textColor: item.textColor,
        cardId: item.cardId,
        level: item.level,
        isMultiParent: item.isMultiParent || false,
        originalData: item.originalData
      });
    });
    
    // Second pass: build hierarchy
    data.forEach(item => {
      const node = nodeMap.get(item.id);
      if (item.parentId && nodeMap.has(item.parentId)) {
        const parent = nodeMap.get(item.parentId);
        if (!parent.children) parent.children = [];
        parent.children.push(node);
        console.log(`Added child "${node.name}" (${node.level}) to parent "${parent.name}" (${parent.level})`);
      } else {
        rootNodes.push(node);
        console.log(`Added root node "${node.name}" (${node.level})`);
      }
    });
    
    console.log('Tree data structure:', rootNodes);
    return rootNodes;
  }, [data]);

  const Node = ({ node, style, dragHandle }) => {
    const isExpanded = node.isOpen;
    const hasChildren = node.children && node.children.length > 0;
    const level = node.data.level || 'L1';
    
    return (
      <div
        style={style}
        ref={dragHandle}
        className={`tree-node ${level.toLowerCase()}`}
        data-level={level}
      >
        <div className="node-content">
          {hasChildren && (
            <button
              className={`expand-button ${isExpanded ? 'expanded' : ''}`}
              onClick={() => node.toggle()}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          )}
          
          <div className="node-info">
            <div className="node-header">
              <span className="node-title">{node.data.name}</span>
              {node.data.isMultiParent && (
                <span className="multi-parent-badge">Multi</span>
              )}
            </div>
            <div className="node-meta">
              <span className="board-name">{node.data.boardName}</span>
              {node.data.cardType && (
                <span className="card-type">{node.data.cardType}</span>
              )}
            </div>
          </div>
          
          <div className="node-actions">
            <a
              href={`https://scdemo320.leankit.com/card/${node.data.cardId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
              title="Open in AgilePlace"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15,3 21,3 21,9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  };

  if (treeData.length === 0) {
    return (
      <div className="tree-view-container">
        <div className="tree-placeholder">
          <div className="placeholder-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h3>No Hierarchy Data</h3>
          <p>Select a board and parent cards, then click "Generate Map" to view the hierarchy.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tree-view-container">
      <div className="tree-header">
        <h3>Card Hierarchy</h3>
        <div className="tree-stats">
          <span>{treeData.length} root items</span>
        </div>
      </div>
      
      <div className="tree-wrapper">
        <Tree
          data={treeData}
          openByDefault={false}
          width="100%"
          height={600}
          indent={24}
          rowHeight={60}
          overscanCount={5}
        >
          {Node}
        </Tree>
      </div>
    </div>
  );
};

export default TreeView;
