import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Meu Blog. Todos os direitos reservados.</p>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/politica-de-privacidade" className="hover:underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:underline">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}