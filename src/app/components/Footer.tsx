'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">SMM Solution</h3>
            <p className="text-gray-300 text-sm">
              Automação industrial e engenharia de excelência.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#sobre" className="hover:text-blue-400">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-blue-400">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#solucoes" className="hover:text-blue-400">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-blue-400">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Automação Industrial</li>
              <li>Projetos Elétricos</li>
              <li>Facilities</li>
              <li>Suporte Técnico</li>
              <li>Cursos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📞 (XX) XXXXX-XXXX</li>
              <li>📧 contato@smmsolution.com.br</li>
              <li>📍 Porto Alegre - RS</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 SMM Solution. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
