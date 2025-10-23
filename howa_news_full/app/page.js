import Link from 'next/link'
export default function Home(){
  return (
    <main className="min-h-screen container">
      <header className="flex items-center justify-between py-6">
        <div>
          <h1 className="text-4xl font-bold">Howa News</h1>
          <p className="text-gray-400">Jamaican headlines, gossip, entertainment & reggae culture.</p>
        </div>
        <nav className="hidden md:flex gap-4 text-gray-300">
          {['Top Stories','Gossip','Entertainment','Sports','Politics','Local News','Reggae Culture'].map(c=>(
            <Link key={c} href={`/category/${c.toLowerCase().replace(/ /g,'-')}`}>{c}</Link>
          ))}
        </nav>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="p-6 bg-gray-900 rounded border border-gray-800">
            <h2 className="text-2xl font-semibold">Featured</h2>
            <p className="text-gray-400 mt-2">Starter template: connect Supabase, set up ingest and social posting to go live.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <article className="p-4 bg-gray-900 rounded border border-gray-800">
              <h3 className="font-semibold text-lg">Sample headline</h3>
              <p className="text-sm text-gray-400 mt-2">This content will be replaced when you connect your feeds.</p>
            </article>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="p-4 bg-gray-900 rounded border border-gray-800">
            <h4 className="font-semibold">Subscribe</h4>
            <form action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '#'} method="POST">
              <input type="email" name="email" placeholder="you@example.com" className="p-2 w-full bg-gray-800 text-gray-200 rounded mt-2" />
              <button className="mt-2 w-full bg-gray-700 hover:bg-gray-600 p-2 rounded">Subscribe</button>
            </form>
          </div>

          <div className="p-4 bg-gray-900 rounded border border-gray-800">
            <h4 className="font-semibold">Top Sources</h4>
            <ul className="text-sm text-gray-300 mt-2 space-y-2">
              <li><a className="hover:underline" href="https://jamaica-gleaner.com">The Gleaner</a></li>
              <li><a className="hover:underline" href="https://www.jamaicaobserver.com">Jamaica Observer</a></li>
              <li><a className="hover:underline" href="https://loopnews.com">Loop News</a></li>
            </ul>
          </div>
        </aside>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} Howa News</footer>
    </main>
  )
}
