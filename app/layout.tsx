import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = { 
  title: 'VaultofCodes–Certificate Verifier',
  description: 'Official internship verification portal of VaultofCodes',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '#',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '#',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '#',
        type: 'image/svg+xml',
      },
    ],
    apple: '#',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning> 
        {children}
        <Analytics />
      </body>
    </html>
  )
}
