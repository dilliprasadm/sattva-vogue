import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Be_Vietnam_Pro, Montserrat } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const beVietnam = Be_Vietnam_Pro({
  variable: '--font-be-vietnam',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Sattva Vogue | Premium Everyday Ethnic Fashion',
  description: 'Comfortable premium ethnic wear, cotton co-ord sets, and kurta sets designed for modern everyday elegance.',
  keywords: 'ethnic wear, co-ord sets, kurta sets, cotton apparel, modern everyday fashion, comfortable clothing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${beVietnam.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen bg-brand-ivory text-brand-charcoal font-body">
        {children}
      </body>
    </html>
  );
}
