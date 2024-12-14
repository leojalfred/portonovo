import type { Metadata } from 'next'
import { Lora, Pixelify_Sans } from 'next/font/google'
import './globals.css'

const pixelify = Pixelify_Sans({
  variable: '--font-pixelify',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400'],
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
      <body className={`${lora.variable} ${pixelify.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
