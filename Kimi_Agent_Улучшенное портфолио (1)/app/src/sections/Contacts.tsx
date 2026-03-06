import { useEffect, useRef, useState } from 'react';
import { DecorativeBlob } from '../components/DecorativePatterns';
import { Instagram, Send, MessageCircle } from 'lucide-react';

const Contacts = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contacts = [
    {
      name: 'Instagram',
      value: '@nesterovss',
      icon: Instagram,
      color: 'from-purple-600 to-pink-500',
      href: 'https://instagram.com/nesterovss',
      description: 'Мой Instagram',
    },
    {
      name: 'Telegram Канал',
      value: 'MODeratorSuur',
      icon: Send,
      color: 'from-blue-500 to-cyan-400',
      href: 'https://t.me/MODeratorSuur',
      description: 'Канал для публикации работ',
    },
    {
      name: 'Telegram для связи',
      value: 'Grey_0ko',
      icon: MessageCircle,
      color: 'from-green-500 to-teal-400',
      href: 'https://t.me/Grey_0ko',
      description: 'Для заказов и сообщений',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contacts"
      className="relative min-h-screen py-20 overflow-hidden paper-texture"
    >
      {/* Background */}
      <div className="absolute inset-0 pattern-clouds opacity-30" />
      <div className="absolute inset-0 pattern-lattice opacity-20" />
      
      <DecorativeBlob 
        className="top-0 -left-40" 
        color="from-red-700 to-red-500" 
        size="w-96 h-96" 
      />
      <DecorativeBlob 
        className="bottom-0 -right-40" 
        color="from-yellow-600 to-yellow-400" 
        size="w-80 h-80" 
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="/sticker-lantern.png" 
              alt="" 
              className="w-16 h-16 animate-lantern sticker-shadow"
            />
            <div className="seal-chinese text-xl">联系方式</div>
            <img 
              src="/sticker-teapot.png" 
              alt="" 
              className="w-16 h-16 animate-float-slow sticker-shadow"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gradient-chinese mb-2 font-chinese">
            КОНТАКТЫ
          </h2>
          <p className="text-xl text-red-700 font-medium">联系方式 | Contacts</p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`scroll-chinese rounded-lg p-6 text-center hover-lift transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow border-4 border-yellow-400`}>
                <contact.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-1 font-chinese">{contact.name}</h3>
              <p className="text-2xl font-black text-gradient-chinese mb-2">{contact.value}</p>
              <p className="text-sm text-gray-600">{contact.description}</p>
            </a>
          ))}
        </div>
        
        {/* Thank You Card */}
        <div 
          className={`scroll-chinese rounded-lg p-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="/sticker-lucky-cat.png" 
              alt="" 
              className="w-20 h-20 animate-bounce-in sticker-shadow"
            />
            <span className="text-6xl">🙏</span>
            <img 
              src="/sticker-fireworks.png" 
              alt="" 
              className="w-20 h-20 animate-bounce-in sticker-shadow"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-gradient-chinese mb-4 font-chinese">
            Спасибо за внимание!
          </h3>
          <p className="text-xl text-red-700 font-medium mb-2">谢谢 | Thank You</p>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <span>Свяжитесь со мной в Telegram:</span>
            <a 
              href="https://t.me/Grey_0ko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              @Grey_0ko
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <div 
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="/sticker-cloud.png" 
              alt="" 
              className="w-12 h-12 animate-float sticker-shadow"
            />
            <p className="text-lg font-bold text-red-800 font-chinese">
              NesT | Камила Усманова
            </p>
            <img 
              src="/sticker-moon.png" 
              alt="" 
              className="w-12 h-12 animate-float-slow sticker-shadow"
            />
          </div>
          <p className="text-sm text-gray-600">
            Digital Artist & Illustrator | 数字艺术家 © 2024
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          </div>
        </div>
        
        {/* Decorative Stickers */}
        <div className="absolute left-10 top-1/3 hidden lg:block">
          <img 
            src="/sticker-phoenix.png" 
            alt="" 
            className="w-28 h-28 animate-wiggle sticker-shadow"
          />
        </div>
        <div className="absolute right-10 bottom-1/4 hidden lg:block">
          <img 
            src="/sticker-sakura.png" 
            alt="" 
            className="w-24 h-24 animate-float sticker-shadow"
          />
        </div>
        <div className="absolute left-1/4 bottom-20 hidden lg:block">
          <img 
            src="/sticker-lotus.png" 
            alt="" 
            className="w-20 h-20 animate-float-slow sticker-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
