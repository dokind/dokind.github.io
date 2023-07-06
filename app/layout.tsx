import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Namsrai Khatanbaatar',
  description: 'Founder and Software Engineer at Suragch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Namsrai Khatanbaatar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}
        <footer className=' bg-black flex justify-center'>
          <p className=' text-caption'>&copy; 2023</p>
        </footer>
      </body>

    </html>
  )
}
