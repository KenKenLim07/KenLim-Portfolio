# Deployment Guide

## Vercel Deployment

### Prerequisites
- Vercel account (sign up at https://vercel.com)
- Git repository with your code

### Steps to Deploy

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

### Configuration

The project is configured with:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework:** Vite
- **Base Path:** Automatically adjusts for Vercel vs GitHub Pages

### Environment Variables

No environment variables are required for this deployment.

### Custom Domain (Optional)

After deployment, you can add a custom domain in your Vercel dashboard:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain

### GitHub Pages vs Vercel

- **GitHub Pages:** Uses `/KenLim-Portfolio` base path
- **Vercel:** Uses `/` base path (root domain)

The configuration automatically detects the deployment platform and adjusts accordingly. 