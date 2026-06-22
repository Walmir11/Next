import 'global.css';
import Header from './components/Header';

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
      </body>
    </html>
  );
}