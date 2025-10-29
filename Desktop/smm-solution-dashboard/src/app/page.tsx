import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    
    </>
  );
}
