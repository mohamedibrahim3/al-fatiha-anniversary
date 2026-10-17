import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Pinyon_Script, Alex_Brush, Amiri } from 'next/font/google';
import { BIRTHDAY_CONFIG } from '@/lib/config';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pinyon',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-brush',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-amiri',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://toti-birthday.vercel.app'),
  title: BIRTHDAY_CONFIG.meta.title,
  description: BIRTHDAY_CONFIG.meta.description,
  openGraph: {
    title: BIRTHDAY_CONFIG.meta.title,
    description: BIRTHDAY_CONFIG.meta.description,
    images: [{ url: BIRTHDAY_CONFIG.meta.ogImage, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: BIRTHDAY_CONFIG.meta.title,
    description: BIRTHDAY_CONFIG.meta.description,
    images: [BIRTHDAY_CONFIG.meta.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} ${pinyon.variable} ${alexBrush.variable} ${amiri.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
