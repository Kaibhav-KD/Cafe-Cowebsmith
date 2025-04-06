import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Café Delight | Premium Coffee & Tea Experience',
  description: 'Experience the finest coffee and tea in town. A perfect blend of tradition and innovation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-cafe-cream">
          {children}
        </main>
      </body>
    </html>
  )
} 
