import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <Image src="/logo-smm.png" alt="Logo SMM Solution" width={50} height={50} />
            <h1 className="text-2xl font-bold">SMM Solution Automação</h1>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm font-medium">
            <a href="#sobre" className="hover:text-blue-600 transition">Sobre</a>
            <a href="#servicos" className="hover:text-blue-600 transition">Serviços</a>
            <a href="#contato" className="hover:text-blue-600 transition">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center mt-24 p-4 sm:p-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Automação Inteligente para Residências e Empresas</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Soluções completas em automação residencial, iluminação inteligente e integração de dispositivos IoT para tornar sua vida mais prática e eficiente.
        </p>
        <a
          href="#contato"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Fale Conosco
        </a>
      </main>

      {/* Services Section */}
      <section id="servicos" className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 p-4 sm:p-6 text-center">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <Image src="/icons/iluminacao.svg" alt="Iluminação Inteligente" width={64} height={64} className="mx-auto mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Iluminação Inteligente</h3>
          <p className="text-gray-600">Controle sua iluminação de forma automática e remota, economizando energia e aumentando o conforto.</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <Image src="/icons/iot.svg" alt="IoT Residencial" width={64} height={64} className="mx-auto mb-4"/>
          <h3 className="text-xl font-semibold mb-2">IoT Residencial</h3>
          <p className="text-gray-600">Integração de dispositivos inteligentes para uma casa conectada e prática no dia a dia.</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <Image src="/icons/industrial.svg" alt="Automação Industrial" width={64} height={64} className="mx-auto mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Automação Industrial</h3>
          <p className="text-gray-600">Soluções de automação para empresas que buscam eficiência e redução de custos operacionais.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="max-w-4xl mx-auto mt-24 p-4 sm:p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Sobre a SMM Solution</h2>
        <p className="text-gray-600 mb-4">
          Com anos de experiência em automação e tecnologia, a SMM Solution oferece serviços de ponta para transformar residências e empresas em ambientes inteligentes e conectados.
        </p>
        <p className="text-gray-600">
          Nosso time especializado garante que cada solução seja personalizada, eficiente e segura, sempre focada no conforto e produtividade dos nossos clientes.
        </p>
      </section>

      {/* Contact CTA */}
      <section id="contato" className="flex flex-col items-center mt-16 p-6 bg-blue-600 text-white rounded-xl mx-4 sm:mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu espaço?</h2>
        <p className="mb-6 text-center">Entre em contato e descubra como a automação pode facilitar sua vida ou o dia a dia da sua empresa.</p>
        <a href="mailto:contato@smm.com.br" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
          Contate-nos
        </a>
      </section>

      {/* Footer */}
      
    </div>
  );
}
