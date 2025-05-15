
'use client'; // Required for useEffect

import type { Metadata } from 'next';
import { Inter, Press_Start_2P } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { initCrashlytics } from '@/lib/firebase';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
  display: 'swap',
});

// Metadata has been removed from here as it's a client component.
// Individual pages (e.g., src/app/page.tsx) should define their own metadata.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Initialize Firebase Crashlytics on the client-side.
    if (process.env.NODE_ENV === 'production') {
      if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY && process.env.NEXT_PUBLIC_FIREBASE_API_KEY !== 'your_api_key') {
        initCrashlytics().catch(error => {
          console.error("Failed to initialize Firebase Crashlytics:", error);
        });
      } else {
        console.warn("Firebase API key not set. Crashlytics will not be initialized.");
      }
    } else {
      console.log("Crashlytics initialization is skipped in development mode. Set NODE_ENV=production to enable.");
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#DC143C" />
        {/*
          TODO: Ad Network Script
          If you're integrating with an ad network like Google AdSense,
          paste their primary script tag here. This script usually initializes
          the ad system for your site.
          Example: <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID" crossorigin="anonymous"></script>
        */}
      </head>
      <body
        className={cn(
          inter.variable,
          pressStart2P.variable,
          'antialiased'
        )}
      >
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
