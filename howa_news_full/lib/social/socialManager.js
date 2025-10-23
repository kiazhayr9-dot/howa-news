import { supabase } from '@/lib/supabaseClient'
import { postToTwitter } from './twitter'
import { postToFacebook } from './meta'

export async function runSocialCron(){
  // Fetch unposted approved articles in last hour
  const { data } = await supabase.from('articles').select('*').eq('approved', true).order('pubDate', { ascending: false }).limit(5)
  if(!data || data.length===0){ console.log('No articles to post') ; return }
  for(const a of data){
    const text = `${a.title} — ${process.env.SITE_URL || ''}/articles/${a.id}`
    await postToTwitter(text)
    await postToFacebook(text)
    // optional: record that we've posted (requires a column)
    console.log('Queued social post for', a.id)
  }
}
