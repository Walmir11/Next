import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Meu Blog',
  description: 'Um blog simples feito com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <Footer />
        </footer>
      </body>
    </html>
  );
}