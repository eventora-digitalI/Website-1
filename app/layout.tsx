
import type { Metadata, Viewport } from 'next'
import { Amiri, Cairo } from 'next/font/google'
import './globals.css'

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic', 'latin'],
  variable: '--font-amiri',
})

const cairo = Cairo({
  weight: ['300', '400', '600', '700'],
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'أحمد ونور — دعوة الزفاف',
  description: 'دعوة زفاف أحمد ونور · ٢٢–٢٣ أكتوبر ٢٠٢٦ · القاهرة، مصر',
  generator: '',
}

export const viewport: Viewport = {
  themeColor: '#161009',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`bg-background ${amiri.variable} ${cairo.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
