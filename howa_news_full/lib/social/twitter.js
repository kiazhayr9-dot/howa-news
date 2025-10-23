import fetch from 'node-fetch'

export async function postToTwitter(text){
  const bearer = process.env.TWITTER_BEARER_TOKEN
  if(!bearer){ console.log('Twitter token missing — skipping'); return }
  // Simple post using Twitter v2 (note: posting requires OAuth 1.0a or Elevated access)
  // This is a placeholder showing where to implement real posting.
  console.log('Pretend post to Twitter:', text)
}
