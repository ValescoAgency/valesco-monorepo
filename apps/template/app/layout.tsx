import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Valesco Template App',
  description: 'Base template for Valesco client applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
