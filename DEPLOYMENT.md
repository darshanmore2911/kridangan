# Vercel Deployment Guide

This guide will help you deploy your farm-ts application (FastAPI + React) to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, etc.)

## Step 1: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and log in
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect the configuration from `vercel.json`
5. Set up environment variables (see Step 2)
6. Click "Deploy"

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project root:
   ```bash
   vercel --prod
   ```

## Step 2: Configure Environment Variables (Optional)

In your Vercel project dashboard, go to Settings → Environment Variables and add:

### Optional Variables

| Variable | Value | Description |
|----------|--------|-------------|
| `CORS_ORIGINS` | `https://your-app-name.vercel.app` | Your Vercel domain (update after deployment) |
| `LOG_LEVEL` | `INFO` | Logging level (DEBUG, INFO, WARNING, ERROR) |

## Step 3: Update CORS Origins (Optional)

After your first deployment:

1. Note your Vercel app URL (e.g., `https://your-app-name.vercel.app`)
2. Update the `CORS_ORIGINS` environment variable with your actual domain
3. Redeploy or trigger a new deployment

## Step 4: Verify Deployment

1. **Frontend**: Visit your Vercel app URL
2. **Backend API**: Test the API endpoints:
   - `https://your-app-name.vercel.app/api/` - Should return "Hello World"
   - `https://your-app-name.vercel.app/api/health` - Should return health status
   - `https://your-app-name.vercel.app/api/info` - Should return app information

## Project Structure

```
your-app/
├── api/
│   └── index.py          # Vercel serverless function handler
├── backend/
│   ├── lib/
│   │   └── db.py         # MongoDB connection
│   ├── server.py         # FastAPI application
│   └── requirements.txt  # Python dependencies
├── frontend/
│   ├── src/              # React source code
│   ├── dist/             # Built frontend (generated)
│   ├── package.json      # Node.js dependencies
│   └── vite.config.ts    # Vite configuration
├── vercel.json           # Vercel deployment configuration
├── requirements.txt      # Root Python dependencies
├── package.json          # Root Node.js configuration
└── .env.example          # Environment variables template
```

## Troubleshooting

### Common Issues

1. **500 Internal Server Error**
   - Check Vercel function logs in your dashboard
   - Ensure `MONGO_URL` is correctly set
   - Verify MongoDB Atlas IP whitelist includes `0.0.0.0/0`

2. **CORS Errors**
   - Update `CORS_ORIGINS` environment variable
   - Ensure it matches your exact Vercel domain

3. **Build Failures**
   - Check that all dependencies are listed in `requirements.txt`
   - Ensure frontend builds locally with `npm run build`

4. **Database Connection Issues**
   - Test your MongoDB connection string locally
   - Ensure database user has proper permissions
   - Check MongoDB Atlas network access settings

### Viewing Logs

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Functions" tab
4. Click on any function to view logs

### Local Development

```bash
# Start backend locally
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload

# Start frontend locally (in another terminal)
cd frontend
npm run dev
```

## Environment Variables Reference

Copy the contents of `.env.production` and set them in your Vercel environment variables:

```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=app
CORS_ORIGINS=https://your-app-name.vercel.app
LOG_LEVEL=INFO
```

## Performance Tips

1. **Database Optimization**: Create proper indexes in MongoDB
2. **Caching**: Consider implementing Redis for caching if needed
3. **Monitoring**: Set up error tracking (Sentry, LogRocket, etc.)
4. **Analytics**: Add analytics tracking to your frontend

## Security Considerations

1. Never commit `.env` files to version control
2. Use strong passwords for database users
3. Regularly rotate database credentials
4. Monitor access logs in MongoDB Atlas
5. Keep dependencies updated

## Support

If you encounter issues:
1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Check FastAPI documentation: [fastapi.tiangolo.com](https://fastapi.tiangolo.com)
3. Check MongoDB Atlas documentation: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)