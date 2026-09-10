import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MeetAiWidget from '@/components/MeetAiWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital Marketing & Website Design Agency India | Digitacurve',
  description:
    'Digitacurve is a website design and digital marketing agency based in Noida, serving brands across India. Web, search, paid media and brand strategy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#030712] text-slate-100 antialiased selection:bg-blue-600 selection:text-white`}>
        <SmoothScroll>
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
          <MeetAiWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
