# Vercel Deployment Guide

This guide will help you deploy the Cross-Board Visibility Tool to Vercel in just a few minutes.

## Prerequisites

- A GitHub account
- A Vercel account (free tier works great - sign up at [vercel.com](https://vercel.com))
- Your Planview AgilePlace credentials (URL and API token)

## Deployment Steps

### Option 1: One-Click Deploy (Easiest)

1. Click the "Deploy to Vercel" button in the README
2. Sign in to Vercel (or create an account)
3. Click "Create" to deploy
4. Wait for deployment to complete (usually 2-3 minutes)
5. Click "Visit" to open your deployed app
6. Configure your AgilePlace credentials in Settings

### Option 2: Import from GitHub

1. **Push code to GitHub** (if you haven't already)
   ```bash
   git push -u origin main
   ```

2. **Go to Vercel Dashboard**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Sign in with GitHub

3. **Import Repository**
   - Select your GitHub repository: `norman2112/crossboardVisibiliy`
   - Click "Import"

4. **Configure Project**
   - Vercel will auto-detect it as a Create React App
   - Framework Preset: `Create React App`
   - Build Command: `react-scripts build` (auto-detected)
   - Output Directory: `build` (auto-detected)
   - No environment variables needed (credentials stored in browser localStorage)

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your app is now live! 🎉

### Option 3: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From your project directory
   cd /Users/ngarrett/treeView
   
   # Deploy to preview
   vercel
   
   # Deploy to production
   vercel --prod
   ```

## Post-Deployment Configuration

### 1. Configure AgilePlace Credentials

Once deployed, you need to configure your AgilePlace connection:

1. Open your Vercel deployment URL (e.g., `https://your-project.vercel.app`)
2. Click the **Settings** (⚙️) icon in the top-right corner
3. Enter your **AgilePlace URL** (e.g., `https://yourcompany.leankit.com`)
4. Enter your **AgilePlace API Token**
   - Get this from AgilePlace: User Profile → API Tokens → Create New Token
5. Click **Save Settings**

These credentials are stored in your browser's localStorage and are NOT sent to Vercel.

### 2. Custom Domain (Optional)

To use a custom domain:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

## Environment & Configuration

### API Proxy

The `vercel.json` file includes proxy configuration to handle CORS:

```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://scdemo320.leankit.com/api/$1"
    }
  ]
}
```

**Important:** If your AgilePlace instance is different from `scdemo320.leankit.com`, you should update this in `vercel.json` before deploying.

### Build Configuration

The app uses standard Create React App build process:
- Build Command: `npm run build` or `npm run vercel-build`
- Output Directory: `build/`
- Node Version: 18.x (default on Vercel)

## Troubleshooting

### Build Fails

**Issue:** Build fails with "Command failed" error
**Solution:** 
- Check that `package.json` dependencies are correct
- Ensure Node version compatibility
- Try building locally first: `npm run build`

### CORS Errors

**Issue:** API calls fail with CORS errors
**Solution:** 
- Update the `vercel.json` proxy destination to match your AgilePlace URL
- Redeploy after making changes

### 404 Errors on Refresh

**Issue:** Page refreshes result in 404 errors
**Solution:** 
- The `vercel.json` routing configuration should handle this
- Verify the catch-all route exists: `{ "src": "/(.*)", "dest": "/index.html" }`

### Large Bundle Size Warning

**Issue:** Build shows bundle size warning
**Solution:** 
- This is expected due to Syncfusion components
- Consider implementing code splitting if needed
- The warning doesn't prevent deployment

## Monitoring & Analytics

### Vercel Analytics

Enable analytics in your Vercel dashboard:
1. Go to your project
2. Click "Analytics" tab
3. Enable Web Analytics (free tier available)

### Deployment Logs

View deployment logs:
1. Go to your project dashboard
2. Click "Deployments"
3. Select a deployment to view logs

## Updating Your Deployment

### Automatic Deployments

Vercel automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Vercel will automatically build and deploy the new version.

### Manual Deployments

Redeploy the current version:
1. Go to Vercel dashboard
2. Select your project
3. Click "Deployments"
4. Click "..." menu on a deployment
5. Click "Redeploy"

## Performance Tips

1. **Enable Edge Caching**: Vercel automatically caches static assets
2. **Use Vercel Edge Network**: Your app is served from edge locations worldwide
3. **Monitor Bundle Size**: Keep an eye on build output for bundle size warnings
4. **Lazy Load Components**: Consider code splitting for better initial load times

## Security Notes

- API credentials are stored in browser localStorage (client-side only)
- No credentials are sent to or stored on Vercel servers
- All API calls go through Vercel's proxy to avoid CORS issues
- Use HTTPS only (Vercel provides free SSL certificates)

## Support

- **Vercel Issues**: [Vercel Support](https://vercel.com/support)
- **Application Issues**: GitHub Issues on this repository
- **AgilePlace API**: Contact Planview Support

## Costs

- **Vercel Free Tier**: Perfect for this application
  - 100GB bandwidth/month
  - Unlimited deployments
  - Free SSL
  - Edge network
- **Vercel Pro**: $20/month if you need more resources

## Next Steps

After deployment:
1. ✅ Share the URL with your team
2. ✅ Configure custom domain (optional)
3. ✅ Enable analytics (optional)
4. ✅ Set up automatic deployments from GitHub
5. ✅ Create documentation for your team on using the tool

---

**Your app is now live and ready to use!** 🚀

