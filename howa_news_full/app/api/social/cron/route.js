import { runSocialCron } from '@/lib/social/socialManager'
export async function POST(req){
  const auth = req.headers.get('authorization') || ''
  const secret = (auth.replace('Bearer ', '')).trim()
  if(!process.env.CRON_SECRET || secret !== process.env.CRON_SECRET){
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }
  try{
    await runSocialCron()
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  }catch(e){
    console.error(e)
    return new Response(JSON.stringify({ error: 'failed' }), { status: 500 })
  }
}
