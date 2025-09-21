import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ring',
  description: 'A simple link sharing app.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M17.5%2017.5L19%2019M17.5%2017.5C18.8807%2017.5%2020%2016.3807%2020%2015C20%2013.6193%2018.8807%2012.5%2017.5%2012.5C16.1193%2012.5%2015%2013.6193%2015%2015C15%2016.3807%2016.1193%2017.5%2017.5%2017.5ZM6.5%206.5L5%205M6.5%206.5C7.88071%206.5%209%207.61929%209%209C9%2010.3807%207.88071%2011.5%206.5%2011.5C5.11929%2011.5%204%2010.3807%204%209C4%207.61929%205.11929%206.5%206.5%206.5Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3E%3C/svg%3E"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
