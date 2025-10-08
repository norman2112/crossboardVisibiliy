// Sample data for demonstration purposes
// This data is displayed when the application first loads to show users
// what the cross-board connections visualization looks like

export const SAMPLE_DATA = [
  { 
    id: '1', 
    label: 'Product Launch Epic', 
    parentId: '', 
    type: 'l1', 
    level: 'L1', 
    cardType: 'Epic', 
    cardColor: '#8B5CF6', 
    textColor: '#FFFFFF', 
    cardId: '1', 
    boardName: 'Portfolio Kanban', 
    addInfo: { cardUrl: 'https://scdemo320.leankit.com/card/1' } 
  },
  { 
    id: '2', 
    label: 'User Authentication', 
    parentId: '1', 
    type: 'l2', 
    level: 'L2', 
    cardType: 'Feature', 
    cardColor: '#10B981', 
    textColor: '#FFFFFF', 
    cardId: '2', 
    boardName: 'Features & Stories', 
    addInfo: { cardUrl: 'https://scdemo320.leankit.com/card/2' } 
  },
  { 
    id: '3', 
    label: 'Dashboard', 
    parentId: '1', 
    type: 'l2', 
    level: 'L2', 
    cardType: 'Feature', 
    cardColor: '#F59E0B', 
    textColor: '#000000', 
    cardId: '3', 
    boardName: 'Features & Stories', 
    addInfo: { cardUrl: 'https://scdemo320.leankit.com/card/3' } 
  },
  { 
    id: '4', 
    label: 'Reporting', 
    parentId: '1', 
    type: 'l2', 
    level: 'L2', 
    cardType: 'Feature', 
    cardColor: '#EF4444', 
    textColor: '#FFFFFF', 
    cardId: '4', 
    boardName: 'Features & Stories', 
    addInfo: { cardUrl: 'https://scdemo320.leankit.com/card/4' } 
  },
  { 
    id: '5', 
    label: 'Login Form', 
    parentId: '2', 
    type: 'l3', 
    level: 'L3', 
    cardType: 'Story', 
    cardColor: '#06B6D4', 
    textColor: '#FFFFFF', 
    cardId: '5', 
    boardName: 'Features & Stories', 
    addInfo: { cardUrl: 'https://scdemo320.leankit.com/card/5' } 
  },
  { 
    id: '6', 
    label: 'Password Reset', 
    parentId: '2', 
    type: 'l3', 
    level: 'L3', 
    cardType: 'Story', 
    cardColor: '#84CC16', 
    textColor: '#000000', 
    cardId: '6', 
    boardName: 'Features & Stories', 
    addInfo: { cardUrl: 'https://scdemo320.leankit.com/card/6' } 
  },
  { 
    id: '7', 
    label: 'User Profile', 
    parentId: '3', 
    type: 'l3', 
    level: 'L3', 
    cardType: 'Story', 
    cardColor: '#F97316', 
    textColor: '#FFFFFF', 
    cardId: '7', 
    boardName: 'Features & Stories', 
    addInfo: { cardUrl: 'https://scdemo320.leankit.com/card/7' } 
  },
  { 
    id: '8', 
    label: 'Settings Panel', 
    parentId: '3', 
    type: 'l3', 
    level: 'L3', 
    cardType: 'Story', 
    cardColor: '#EC4899', 
    textColor: '#FFFFFF', 
    cardId: '8', 
    boardName: 'Features & Stories', 
    addInfo: { cardUrl: 'https://scdemo320.leankit.com/card/8' } 
  },
];

