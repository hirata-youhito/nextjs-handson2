import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Suspense} from 'react';
import {Loading} from '@/lib/component/Loading';

const inter = Inter({ 
  subsets: ['latin'] ,
  display:'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={inter.className}>
      <body>
        <header 
          className={`
            h-16
            bg-transparent
            backdrop-blur-md
            flex
            w-full
            px-6
          `}
        >
          <div 
            className={`
              h-auto
              my-auto
              font-bold
              text-5xl
              tracking-tighter
            `}
          >
            Search Image
          </div>
        </header>
        <main
          className="pt-20 pb-8 bg-gray-950 min-h-screen">
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  )
}
