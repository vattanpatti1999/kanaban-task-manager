import { Metadata } from 'next'
import { NextTamaguiProvider } from './NextTamaguiProvider'

export const metadata: Metadata = {
  title: 'Tamagui • App Router',
  description: 'Tamagui, Solito, Expo & Next.js',
  icons: '/favicon.ico',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  )
}
