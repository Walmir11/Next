import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Meu Blog
        </Link>
        <nav>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="hover:underline">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className="hover:underline">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/sobre" className="hover:underline">
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
