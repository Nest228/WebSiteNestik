import { useEffect, useRef, useState } from 'react';
import { DecorativeBlob } from '../components/DecorativePatterns';
import { Calendar, GraduationCap, Paintbrush, Wallet } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

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

  const infoCards = [
    {
      icon: Calendar,
      label: 'Дата рождения',
      value: '8 декабря 2006',
      color: 'from-red-700 to-red-500',
    },
    {
      icon: GraduationCap,
      label: 'Образование',
      value: '4 курс ИСиП',
      color: 'from-yellow-600 to-yellow-400',
    },
    {
      icon: Paintbrush,
      label: 'Опыт рисования',
      value: '5 лет',
      color: 'from-red-600 to-yellow-500',
    },
    {
      icon: Wallet,
      label: 'Желаемый доход',
      value: 'от 30 000 ₽',
      color: 'from-yellow-500 to-yellow-300',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-20 overflow-hidden paper-texture"
    >
      {/* Background */}
      <div className="absolute inset-0 pattern-waves opacity-40" />
      <div className="absolute inset-0 pattern-dragons opacity-20" />
      
      <DecorativeBlob 
        className="top-0 -right-40" 
        color="from-red-700 to-red-500" 
        size="w-96 h-96" 
      />
      <DecorativeBlob 
        className="bottom-0 -left-40" 
        color="from-yellow-600 to-yellow-400" 
        size="w-80 h-80" 
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="/sticker-panda.png" 
              alt="" 
              className="w-16 h-16 animate-float sticker-shadow"
            />
            <div className="seal-chinese text-xl">关于我</div>
            <img 
              src="/sticker-lotus.png" 
              alt="" 
              className="w-16 h-16 animate-float-slow sticker-shadow"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gradient-chinese mb-2 font-chinese">
            ОБО МНЕ
          </h2>
          <p className="text-xl text-red-700 font-medium">About Me</p>
        </div>
        
        {/* Profile Card with Photo */}
        <div 
          className={`scroll-chinese rounded-lg p-8 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Photo - Fixed */}
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-red-600 via-red-500 to-yellow-500 rounded-full opacity-60 blur-lg animate-pulse"></div>
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-yellow-500 shadow-2xl">
                {!imageError ? (
                  <img 
                    src="/photo_1_2026-03-05_21-28-47.jpg" 
                    alt="Камила Усманова" 
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center">
                    <span className="text-6xl">👩‍🎨</span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center border-4 border-yellow-100">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            
            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h3 className="text-3xl md:text-4xl font-bold text-red-800 font-chinese">
                  Камила Усманова
                </h3>
                <span className="seal-chinese text-sm">艺术家</span>
              </div>
              <p className="text-2xl font-bold text-yellow-600 mb-4 font-chinese">NesT</p>
              <p className="text-gray-700 max-w-lg leading-relaxed">
                Digital Artist & Illustrator с 5-летним опытом. Специализируюсь на аниме-стиле, 
                дизайне персонажей и цифровой живописи. Люблю создавать эмоциональные 
                и атмосферные работы с восточным колоритом.
              </p>
              <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
                <img src="/sticker-teapot.png" alt="" className="w-10 h-10" />
                <span className="text-red-700 font-medium">Чай и искусство</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <div
              key={card.label}
              className={`glass-chinese rounded-lg p-6 text-center hover-lift transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center animate-pulse-glow border-2 border-yellow-400`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-red-700 mb-1 font-medium">{card.label}</p>
              <p className="text-xl font-bold text-gray-800">{card.value}</p>
            </div>
          ))}
        </div>
        
        {/* Decorative Stickers */}
        <div className="absolute left-10 top-1/3 hidden lg:block">
          <img 
            src="/sticker-dragon.png" 
            alt="" 
            className="w-28 h-28 animate-float sticker-shadow"
          />
        </div>
        <div className="absolute right-10 bottom-1/4 hidden lg:block">
          <img 
            src="/sticker-lantern.png" 
            alt="" 
            className="w-24 h-24 animate-lantern sticker-shadow"
          />
        </div>
        <div className="absolute left-1/4 bottom-10 hidden lg:block">
          <img 
            src="/sticker-koi.png" 
            alt="" 
            className="w-24 h-24 animate-float-slow sticker-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
