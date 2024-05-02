import type { Metadata, Viewport } from 'next';
import { StateProvider } from '@/app/state';
import '@/app/index.css';
import { RSReducedMotion } from '@/shared/ui/RSReducedMotion';
import { FMReducedMotion } from '@/shared/ui/FMReducedMotion';
import { startupImage } from './startupImage';
import { AriaLinkProvider } from '@/app/AriaLinkProvider';

export const metadata: Metadata = {
  title: 'CHANGETHIS',
  description: 'CHANGETHIS',
  robots: 'all',
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: '/',
    title: 'CHANGETHIS',
    description: 'CHANGETHIS',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CHANGETHIS',
    description: 'CHANGETHIS',
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    startupImage,
  },
};

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning={true}
      className='h-screen-safe py-safe px-safe-or-5 overscroll-none touch-pan-x touch-pan-y motion-safe:scroll-smooth'
    >
      <body className='h-full font-sans dark:bg-black dark:text-white'>
        <StateProvider>
          <FMReducedMotion>
            <AriaLinkProvider>{children}</AriaLinkProvider>
          </FMReducedMotion>
        </StateProvider>
        <RSReducedMotion />
      </body>
    </html>
  );
}
