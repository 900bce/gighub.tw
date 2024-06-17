import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gighub.tw',
  description: '台灣獨立搖滾活動資訊',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
