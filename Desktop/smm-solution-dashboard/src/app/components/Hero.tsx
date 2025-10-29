
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[200px] lg:min-h-[400px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Imagem1.jpg"
          fill
          priority
          className="object-cover"
          alt="Industrial background"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Automação Industrial & Engenharia
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
            Soluções completas e personalizadas com 8 anos de experiência no mercado
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/10 hover:shadow-lg w-full sm:w-auto flex items-center justify-center gap-2">
              <span>Solicitar Orçamento</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}