import type { Metadata } from 'next';
import { Inter, Montserrat, Merriweather } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-logo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#199fbc',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${merriweather.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
