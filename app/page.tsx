import Image from 'next/image'
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Namsrai Khatanbaatar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full bg-black shadow-md overflow-hidden">
        <nav className="flex sm:justify-center space-x-4">
          {[
            ['Home', '/dashboard'],
            ['Team', '/team'],
            ['Projects', '/projects'],
            ['Reports', '/reports'],
          ].map(([title, url]) => (
            <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
          ))}
        </nav>
      </div >
      <div className="h-screen w-full  bg-accent1 shadow-md overflow-hidden">
        <button className='btn-primary'>
          Save changes
        </button>
      </div >
    </div >
  )
}
