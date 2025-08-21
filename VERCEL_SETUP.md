# Vercel Setup for Valesco Monorepo

## 🚨 Current Issue
You're getting the error: "No Output Directory named 'public' found after the Build completed"

## 🔍 Root Cause
Vercel doesn't know which specific app to build from the monorepo. It's looking for a `public` directory but can't find one because:
1. The monorepo doesn't have a single app to build
2. Vercel needs to be configured for the specific app you want to deploy
3. Each client should have its own Vercel project

## ✅ Solution: Separate Vercel Projects per Client

### **Option 1: Deploy from Root (Recommended for now)**
1. **In Vercel Project Settings**:
   - **Root Directory**: Leave as `/` (root)
   - **Build Command**: `cd apps/template && pnpm build`
   - **Output Directory**: `apps/template/.next`
   - **Install Command**: `pnpm install`

2. **Update vercel.json**:
```json
{
  "buildCommand": "cd apps/template && pnpm build",
  "outputDirectory": "apps/template/.next",
  "installCommand": "pnpm install",
  "framework": "nextjs"
}
```

### **Option 2: Separate Vercel Projects (Future setup)**
1. **Create separate Vercel projects** for each client app
2. **Each project points to its specific app directory**:
   - Client A: `apps/client-a-web`
   - Client B: `apps/client-b-web` 
   - Client C: `apps/client-c-search`

## 🛠️ Immediate Fix

Update your `vercel.json` to point to a specific app:

```json
{
  "buildCommand": "cd apps/template && pnpm build",
  "outputDirectory": "apps/template/.next",
  "installCommand": "pnpm install",
  "framework": "nextjs"
}
```

## 🚀 Next Steps

1. **Update vercel.json** with the configuration above
2. **In Vercel Project Settings**, ensure:
   - Root Directory: `/`
   - Build Command: `cd apps/template && pnpm build`
   - Output Directory: `apps/template/.next`
3. **Redeploy** your project

## 🔮 Future Architecture

Once you have client applications:
- **Each client gets its own Vercel project**
- **Each project points to its specific app directory**
- **Shared packages are built and cached**
- **Deployments are isolated per client**

## 📋 Required Vercel Settings

- **Framework Preset**: Next.js
- **Root Directory**: `/` (for now)
- **Build Command**: `cd apps/template && pnpm build`
- **Output Directory**: `apps/template/.next`
- **Install Command**: `pnpm install`
- **Node.js Version**: 18.x or 20.x
