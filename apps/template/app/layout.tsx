import type { Metadata } from 'next'
import '@workspace/ui/globals.css';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'Valesco Template App',
  description: 'Base template for Valesco client applications',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
