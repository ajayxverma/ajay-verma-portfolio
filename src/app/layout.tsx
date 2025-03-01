import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ajay Verma',
  description: 'Software Engineer',
  icons: [
    {
      media: '(prefers-color-scheme: dark)',
      url: '../../public/assets/icons/av-logo.svg',
      href: '../../public/assets/icons/av-logo.svg',
    },
    {
      media: '(prefers-color-scheme: light)',
      url: '../../public/assets/icons/av-logo.svg',
      href: '../../public/assets/icons/av-logo.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
