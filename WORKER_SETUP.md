# Cloudflare Worker Authentication Setup

## Overview
The password authentication has been moved from client-side code to a Cloudflare Worker for security. The password is no longer visible in the frontend code.

## Setup Instructions

### 1. Install Wrangler (if not already installed)
```bash
npm install -D wrangler
```

### 2. Set Cloudflare Worker Secrets

You need to set two secrets in your Cloudflare Worker:

1. **AUTH_PASSWORD** - The password users will use to authenticate
2. **JWT_SECRET** - A secret key for signing authentication tokens (use a random string)

Run these commands (replace with your actual values):

```bash
npx wrangler secret put AUTH_PASSWORD


npx wrangler secret put JWT_SECRET
# When prompted, enter a random secure string
# Generate one with PowerShell: [Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
# Or with Node.js: node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 3. Build the Frontend

Before deploying, build your frontend to create the `dist` directory:

```bash
npm run build
```

### 4. Deploy the Worker

After setting the secrets and building, deploy your worker:

```bash
npx wrangler deploy
```

## How It Works

1. User enters password in the frontend
2. Frontend sends password to `/api/auth/login` endpoint (handled by Cloudflare Worker)
3. Worker validates password against `AUTH_PASSWORD` secret
4. If valid, Worker generates and returns a secure token
5. Frontend stores token in sessionStorage
6. Token is verified on page load via `/api/auth/verify` endpoint

## Local Development

To run the application locally with authentication:

### 1. Create Local Development Variables

Create a `.dev.vars` file in the project root (copy from `.dev.vars.example`):

```bash
# .dev.vars
AUTH_PASSWORD=moreroNR24!
JWT_SECRET=your-random-secret-here
```

**Important:** `.dev.vars` is already in `.gitignore` and should never be committed.

### 2. Run Both Dev Servers

You need to run both the frontend and the worker:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Worker:**
```bash
npm run dev:worker
```

The Vite dev server (port 3000) will proxy `/api/*` requests to the worker (port 8787).

### 3. Access the Application

Open `http://localhost:3000` in your browser. The authentication will work through the local worker.

## Security Notes

- The password is now stored as a Cloudflare Worker secret and is never exposed in client-side code
- Authentication tokens are signed with `JWT_SECRET` to prevent tampering
- Tokens are stored in sessionStorage (cleared when browser session ends)
- For local development, use `.dev.vars` file (never commit this file)

