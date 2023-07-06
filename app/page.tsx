import Image from 'next/image'
import Head from 'next/head';
import SocialButtonList from './SocialButtonList';

export default function Home() {
  return (
    <div className="h-screen w-full bg-black shadow-md overflow-hidden text-center">
      <div className="flex justify-center items-center h-full">
        <h1>Namsrai Khatanbaatar</h1>
        <SocialButtonList />
      </div>
    </div >
  )
}
