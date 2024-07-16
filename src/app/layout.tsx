import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Cinepolis | Hydrah tecnologia',
  description: 'page de filmes em cartaz, aqui voce encontra informações sobre todos os filmes lançados!',
  keywords:
    'filmes online, filmes em cartaz, filmes de ação, filmes de aventura',
  icons: '/img/favicon.svg',
  robots: 'index, follow',
  authors: [{ name: 'Eliel Silva', url: 'https://github.com/Eliel-Silva-dev' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <NavBar />
        <Suspense fallback={<div>Carregando dados da pagina...</div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
