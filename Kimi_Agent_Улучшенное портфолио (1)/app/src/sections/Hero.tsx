import { useEffect, useState } from 'react';
import { DecorativeBlob } from '../components/DecorativePatterns';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture">
      {/* Chinese Pattern Background */}
      <div className="absolute inset-0 pattern-clouds opacity-60" />
      <div className="absolute inset-0 pattern-lattice opacity-40" />
      
      {/* Background Decorations */}
      <DecorativeBlob 
        className="top-10 -left-20 animate-float-slow" 
        color="from-red-800 to-red-600" 
        size="w-96 h-96" 
      />
      <DecorativeBlob 
        className="bottom-10 -right-20 animate-float" 
        color="from-yellow-600 to-yellow-400" 
        size="w-80 h-80" 
      />
      <DecorativeBlob 
        className="top-1/3 right-1/4 animate-spin-slow opacity-30" 
        color="from-red-500 to-yellow-500" 
        size="w-40 h-40" 
      />
      
      {/* Floating Chinese Stickers */}
      <div className="absolute left-10 top-32 hidden lg:block">
        <img 
          src="/sticker-dragon.png" 
          alt="" 
          className="w-28 h-28 animate-float sticker-shadow"
        />
      </div>
      <div className="absolute right-16 top-24 hidden lg:block">
        <img 
          src="/sticker-lantern.png" 
          alt="" 
          className="w-24 h-24 animate-lantern sticker-shadow"
        />
      </div>
      <div className="absolute left-20 bottom-32 hidden lg:block">
        <img 
          src="/sticker-lucky-cat.png" 
          alt="" 
          className="w-24 h-24 animate-float-slow sticker-shadow"
        />
      </div>
      <div className="absolute right-20 bottom-24 hidden lg:block">
        <img 
          src="/sticker-fan.png" 
          alt="" 
          className="w-24 h-24 animate-wiggle sticker-shadow"
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Chinese Vertical Text Decoration */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="text-vertical text-6xl font-bold text-red-800 opacity-20 tracking-widest">
            艺术创作
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="text-vertical text-6xl font-bold text-red-800 opacity-20 tracking-widest">
            绘画之美
          </div>
        </div>
        
        {/* Animated Title */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-6 mb-8">
            <img 
              src="/sticker-phoenix.png" 
              alt="" 
              className="w-20 h-20 animate-bounce-in sticker-shadow"
              style={{ animationDelay: '0.2s' }}
            />
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-yellow-500 flex items-center justify-center animate-pulse-glow">
              <span className="text-4xl">🐉</span>
            </div>
            <img 
              src="/sticker-koi.png" 
              alt="" 
              className="w-20 h-20 animate-bounce-in sticker-shadow"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
        </div>
        
        {/* Portfolio Title - Chinese Style */}
        <div 
          className={`relative mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 opacity-20 blur-xl rounded-full"></div>
          <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black text-gradient-chinese text-shadow-chinese font-chinese">
            作品集
          </h1>
        </div>
        
        {/* Subtitle */}
        <div 
          className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-2xl md:text-3xl text-red-700 font-bold mb-2 tracking-widest font-chinese">
            PORTFOLIO
          </p>
          <p className="text-lg md:text-xl text-yellow-700 font-medium mb-8">
            Digital Art & Illustration | 数字艺术
          </p>
        </div>
        
        {/* Name Card - Chinese Scroll Style */}
        <div 
          className={`scroll-chinese rounded-lg px-10 py-8 inline-block hover-lift transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="seal-chinese mb-4 text-sm">艺术家</div>
          <h2 className="text-3xl md:text-5xl font-bold text-red-800 font-chinese">
            Камила Усманова
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600 mt-2 font-chinese">NesT</p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -left-16 top-1/2 hidden lg:block">
          <img 
            src="/sticker-pagoda.png" 
            alt="" 
            className="w-28 h-28 animate-float-slow sticker-shadow"
          />
        </div>
        <div className="absolute -right-16 top-1/3 hidden lg:block">
          <img 
            src="/sticker-sakura.png" 
            alt="" 
            className="w-28 h-28 animate-float sticker-shadow"
          />
        </div>
        <div className="absolute left-1/4 -bottom-10 hidden lg:block">
          <img 
            src="/sticker-fireworks.png" 
            alt="" 
            className="w-24 h-24 animate-wiggle sticker-shadow"
          />
        </div>
        <div className="absolute right-1/4 -bottom-10 hidden lg:block">
          <img 
            src="/sticker-panda.png" 
            alt="" 
            className="w-24 h-24 animate-float-slow sticker-shadow"
          />
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="animate-bounce">
            <div className="w-10 h-16 border-2 border-red-600 rounded-full flex items-start justify-center p-2">
              <div className="w-2 h-4 bg-red-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
