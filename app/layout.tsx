import type { Metadata } from 'next'
import { Courier_Prime, Gloria_Hallelujah } from 'next/font/google'
import './globals.css'

const gloriaHallelujah = Gloria_Hallelujah({
  variable: '--font-gloria-hallelujah',
  subsets: ['latin'],
  weight: ['400'],
})

const courierPrime = Courier_Prime({
  variable: '--font-courier-prime',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Leo Alfred',
  description: "Leo Alfred's personal and professional website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${gloriaHallelujah.variable} ${courierPrime.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
