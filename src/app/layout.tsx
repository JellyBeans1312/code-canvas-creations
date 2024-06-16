import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - CodeCanvas Creations LLC',
    default: 'CodeCanvas Creations LLC - Award winning developer studio based in Kansas',
  },
}

export default function Layout({ children }: {  children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-accentOne text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
