import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://thebytearray.org'),
  title: {
    default: 'The Byte Array Ltd - Open Source Software Development Company',
    template: '%s | The Byte Array'
  },
  description: 'The Byte Array Ltd is a UK-based software development company specializing in privacy-focused open-source solutions. Building innovative technologies that prioritize user privacy and data protection.',
  keywords: ['open source', 'software development', 'privacy', 'UK company', 'The Byte Array', 'github', 'developer community', 'private limited company', 'London', 'software engineering', 'mobile apps', 'web development'],
  authors: [{ name: 'The Byte Array Ltd' }],
  creator: 'The Byte Array Ltd',
  publisher: 'The Byte Array Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://thebytearray.org',
    title: 'The Byte Array Ltd - Open Source Software Development Company',
    description: 'UK-based software development company specializing in privacy-focused open-source solutions and innovative technologies.',
    siteName: 'The Byte Array Ltd',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'The Byte Array - Open Source Software Organization'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://thebytearray.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "The Byte Array Ltd",
              "legalName": "THE BYTE ARRAY LTD",
              "identifier": "16581435",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "124 City Road",
                "addressLocality": "London",
                "postalCode": "EC1V 2NX",
                "addressCountry": "GB"
              },
              "url": "https://thebytearray.org",
              "description": "UK-based software development company specializing in privacy-focused open-source solutions and innovative technologies.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Tamim Hossain"
              },
              "sameAs": [
                "https://github.com/TheByteArray"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@thebytearray.org"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
