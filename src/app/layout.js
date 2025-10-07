import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMM Solution Automação",
  description: "Automação inteligente para residências e empresas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Header */}
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <img src="/logo-smm.png" alt="Logo SMM Solution" className="w-12 h-12" />
              <h1 className="text-2xl font-bold">SMM Solution Automação</h1>
            </div>
            <nav className="hidden sm:flex gap-6 text-sm font-medium">
              <a href="#sobre" className="hover:text-blue-600 transition">Sobre</a>
              <a href="#servicos" className="hover:text-blue-600 transition">Serviços</a>
              <a href="#contato" className="hover:text-blue-600 transition">Contato</a>
            </nav>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="pt-28">{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SMM Solution Automação. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
