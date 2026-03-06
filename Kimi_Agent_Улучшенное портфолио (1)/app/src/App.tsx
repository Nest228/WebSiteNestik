import { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Gallery from './sections/Gallery';
import Contacts from './sections/Contacts';
import FloatingStickers from './components/FloatingStickers';
import Sparkles from './components/Sparkles';
import { Cat, User, Sparkles as SparklesIcon, Image, MessageCircle } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Determine active section
      const sections = ['hero', 'about', 'skills', 'gallery', 'contacts'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', icon: Cat, label: 'Главная' },
    { id: 'about', icon: User, label: 'Обо мне' },
    { id: 'skills', icon: SparklesIcon, label: 'Навыки' },
    { id: 'gallery', icon: Image, label: 'Галерея' },
    { id: 'contacts', icon: MessageCircle, label: 'Контакты' },
  ];

  return (
    <div className="relative min-h-screen paper-texture overflow-x-hidden">
      {/* Global Background Effects */}
      <FloatingStickers />
      <Sparkles count={30} />
      
      {/* Fixed Navigation - Chinese Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="glass-chinese rounded-lg px-6 py-3 max-w-lg mx-auto border-2 border-yellow-400">
          <div className="flex items-center justify-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg'
                    : 'hover:bg-red-100 text-red-800'
                }`}
                title={item.label}
              >
                <item.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="contacts">
          <Contacts />
        </div>
      </main>
      
      {/* Scroll to Top Button - Chinese Style */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg hover-lift transition-all duration-500 border-2 border-yellow-400 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      
      {/* Side Decorations - Chinese Stickers */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden xl:block z-40">
        <div className="flex flex-col gap-4">
          <img src="/sticker-dragon.png" alt="" className="w-14 h-14 animate-float sticker-shadow" />
          <img src="/sticker-lantern.png" alt="" className="w-12 h-12 animate-lantern sticker-shadow" />
          <img src="/sticker-koi.png" alt="" className="w-14 h-14 animate-float-slow sticker-shadow" />
        </div>
      </div>
      
      <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden xl:block z-40">
        <div className="flex flex-col gap-4">
          <img src="/sticker-phoenix.png" alt="" className="w-14 h-14 animate-wiggle sticker-shadow" />
          <img src="/sticker-fan.png" alt="" className="w-12 h-12 animate-float sticker-shadow" />
          <img src="/sticker-lucky-cat.png" alt="" className="w-12 h-12 animate-float-slow sticker-shadow" />
        </div>
      </div>
    </div>
  );
}

export default App;
