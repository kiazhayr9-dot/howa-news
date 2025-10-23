Howa News - Full Starter (Next.js 14)

Contents:
- app/: Next.js app router pages and API routes
- lib/: supabase client and social helpers
- public/: manifest and icons
- vercel.json: Vercel config (clean)

Quick start:
1. unzip and cd into folder
2. npm install
3. copy .env.local.example to .env.local and fill required keys
4. npm run dev (localhost:3000)

Deploy to Vercel:
1. Create new GitHub repo and push the project
2. Sign into Vercel with that account and import the repo
3. In Vercel project settings, add environment variables from your .env.local (required: Supabase + INGEST_SECRET + SITE_URL)
4. Deploy

Cron and Social posting:
- Add a GitHub Actions workflow or Vercel Cron to POST to /api/social/cron with header Authorization: Bearer CRON_SECRET every hour
- To enable social posting, set TWITTER_BEARER_TOKEN and META_PAGE_TOKEN

Security:
- Do NOT commit your .env.local to GitHub. Use Vercel project environment variables instead.
