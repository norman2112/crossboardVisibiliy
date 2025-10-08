# Epic > Feature > Story Mind Map

A React application using Syncfusion's Diagram component to visualize the hierarchical relationship between Epics, Features, and Stories in a mind map format.

## Features

- **Hierarchical Visualization**: Shows the relationship between Epics → Features → Stories
- **Color-Coded**: Different colors for each level (Epic: Purple, Feature: Green, Story: Orange)
- **Interactive**: Built with Syncfusion's powerful diagram component
- **Responsive**: Adapts to different screen sizes

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

## Structure

- **Epic** (Purple): Top-level initiative - "Product Launch Epic"
- **Features** (Green): Major capabilities under the epic
  - User Authentication
  - Dashboard
  - Reporting
- **Stories** (Orange): User stories under each feature

## Customization

You can modify the data structure in `src/MindMapDiagram.js` to add your own Epics, Features, and Stories. The data format is:

```javascript
{ 
  id: 'unique-id', 
  label: 'Display Name', 
  parentId: 'parent-id', 
  type: 'epic' | 'feature' | 'story' 
}
```

## Technologies

- React 18
- Syncfusion EJ2 React Diagrams
- CSS3

## License

This project uses Syncfusion components which require a license for commercial use. Visit [Syncfusion](https://www.syncfusion.com/) for licensing information.
