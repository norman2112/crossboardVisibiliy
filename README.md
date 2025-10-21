# Cross-Board Visibility Tool

A React application that visualizes cross-board hierarchical relationships from Planview AgilePlace in both mind map and tree view formats.

## Features

- **Dual View Modes**: 
  - **Mind Map**: Visual diagram using Syncfusion's powerful diagram component
  - **Tree View**: Nested list view using React Arborist for detailed exploration
- **Cross-Board Support**: Visualize card hierarchies across multiple AgilePlace boards
- **Many-to-Many Relationships**: Handles complex parent-child relationships
- **Dynamic Parent Selection**: Automatically identifies parent cards with children
- **Professional UI**: Clean, enterprise-grade design with Planview branding
- **Optimized Performance**: Batched API calls to prevent rate limiting
- **Responsive**: Adapts to different screen sizes

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/norman2112/crossboardVisibiliy)

### Step-by-Step Vercel Deployment

1. **Fork or Clone this repository**
   ```bash
   git clone https://github.com/norman2112/crossboardVisibiliy.git
   cd crossboardVisibiliy
   ```

2. **Install Vercel CLI** (optional, for command-line deployment)
   ```bash
   npm install -g vercel
   ```

3. **Deploy via Vercel Dashboard** (Recommended)
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the React app
   - Click "Deploy"

4. **Deploy via Vercel CLI**
   ```bash
   vercel
   # Follow the prompts
   # For production deployment:
   vercel --prod
   ```

5. **Configure AgilePlace Credentials**
   - Once deployed, open your Vercel URL
   - Click the Settings (gear) icon in the top right
   - Enter your AgilePlace URL (e.g., `https://yourcompany.leankit.com`)
   - Enter your AgilePlace API token
   - Click "Save Settings"

## Local Development

### Prerequisites
- Node.js 14+ 
- npm or yarn
- AgilePlace account with API access

### Installation

```bash
# Clone the repository
git clone https://github.com/norman2112/crossboardVisibiliy.git
cd crossboardVisibiliy

# Install dependencies
npm install
```

### Running Locally

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Usage

1. **Configure Settings**: Click the settings icon and enter your AgilePlace URL and API token
2. **Select a Board**: Choose the board you want to visualize from the dropdown
3. **Select Parent Cards**: The app will automatically find all cards with children - select one or more
4. **Generate View**: Click "Generate Map" for mind map view or "Generate Tree View" for list view
5. **Explore**: 
   - Mind map supports zoom, pan, and different orientations
   - Tree view supports expand/collapse and direct links to cards

## Configuration

### AgilePlace API Setup

You'll need:
- **AgilePlace URL**: Your organization's Planview AgilePlace URL (e.g., `https://yourcompany.leankit.com`)
- **API Token**: Generate from your AgilePlace user profile → API Tokens

### Advanced Options

- **Orientation**: Choose layout direction (Left-to-Right, Top-to-Bottom, etc.)
- **Extra Large Nodes**: Increase node size for better readability on large displays

## Technologies

- **React 18**: Modern React with hooks
- **Syncfusion EJ2 React Diagrams**: Professional diagramming component
- **React Arborist**: Virtualized tree view component
- **Planview AgilePlace API**: REST API integration
- **CSS3**: Custom styling with Planview brand colors

## Architecture

### Components
- `App.js`: Main application orchestrator
- `BoardSelector`: Board selection dropdown
- `ParentCardSelector`: Dynamic parent card picker
- `MindMapDiagram`: Syncfusion mind map visualization
- `TreeView`: React Arborist tree list view
- `Settings`: Configuration modal

### Services
- `agilePlaceAPI.js`: API client with optimized batching and hierarchy transformation

## API Rate Limiting

The application uses intelligent batching (10 concurrent requests) to respect AgilePlace API rate limits while maintaining good performance.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

### CORS Issues
If you encounter CORS errors when deployed:
- The `vercel.json` includes proxy configuration for the AgilePlace API
- Ensure your AgilePlace instance allows requests from your Vercel domain

### Authentication Errors
- Verify your API token is valid
- Check that your AgilePlace URL is correct (include `https://`)
- Ensure your AgilePlace account has appropriate board access

### Performance Issues
- Try reducing the number of parent cards selected
- Use Tree View for very large hierarchies
- Check your network connection

## License

This project uses Syncfusion components which require a license for commercial use. Visit [Syncfusion](https://www.syncfusion.com/) for licensing information.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Support

For issues related to:
- **This application**: Open a GitHub issue
- **Planview AgilePlace API**: Contact Planview support
- **Syncfusion components**: Visit [Syncfusion documentation](https://ej2.syncfusion.com/react/documentation/)
