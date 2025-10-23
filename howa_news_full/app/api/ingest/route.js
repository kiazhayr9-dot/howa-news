import Parser from 'rss-parser'
import { supabase } from '@/lib/supabaseClient'
const parser = new Parser()
export async function POST(req){
  const auth = req.headers.get('authorization') || ''
  const secret = (auth.replace('Bearer ', '')).trim()
  if(!process.env.INGEST_SECRET || secret !== process.env.INGEST_SECRET) return new Response(JSON.stringify({ error:'Unauthorized' }), { status:401 })
  try{
    const feed = await parser.parseURL('https://jamaica-gleaner.com/feeds/rss.xml')
    const items = (feed.items||[]).slice(0,10)
    // upsert to supabase table 'articles' - implement in production
    return new Response(JSON.stringify({ ingested: items.length }), { status:200 })
  }catch(e){ console.error(e); return new Response(JSON.stringify({ error:'ingest failed' }), { status:500 }) }
}
