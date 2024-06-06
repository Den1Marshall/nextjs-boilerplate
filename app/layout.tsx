import type { Metadata, Viewport } from 'next';
import '@/app/index.css';
import { FMReducedMotion } from '@/shared/ui/FMReducedMotion';
import { startupImage } from './startupImage';
import { AriaLinkProvider } from '@/app/AriaLinkProvider';

export const metadata: Metadata = {
  title: 'CHANGETHIS',
  description: 'CHANGETHIS',
  metadataBase: new URL('https://CHANGETHIS.com'),
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
      className='h-[max(calc(100%_+_env(safe-area-inset-top)),_100%)] font-sans overscroll-none touch-pan-x touch-pan-y motion-safe:scroll-smooth'
    >
      <body className='h-full py-safe px-safe-or-5 dark:bg-black dark:text-white'>
        <FMReducedMotion>
          <AriaLinkProvider>{children}</AriaLinkProvider>
        </FMReducedMotion>
      </body>
    </html>
  );
}
