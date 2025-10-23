import fetch from 'node-fetch'
export async function postToFacebook(message){
  const pageId = process.env.META_PAGE_ID
  const token = process.env.META_PAGE_TOKEN
  if(!pageId || !token){ console.log('Meta token missing — skipping'); return }
  const url = `https://graph.facebook.com/${pageId}/feed`;
  const res = await fetch(url, { method: 'POST', body: new URLSearchParams({ message, access_token: token }) })
  const json = await res.json()
  console.log('Meta response', json)
}
