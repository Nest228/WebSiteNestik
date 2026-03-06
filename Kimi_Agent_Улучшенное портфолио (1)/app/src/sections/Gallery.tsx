import { useEffect, useRef, useState } from 'react';
import { DecorativeBlob } from '../components/DecorativePatterns';
import { Image, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // All artwork images
  const artworks = [
    { src: '/photo_1_2026-03-05_21-19-48.jpg', title: 'У окна' },
    { src: '/photo_2_2026-03-05_21-19-48.jpg', title: 'Warhammer' },
    { src: '/photo_3_2026-03-05_21-19-48.jpg', title: 'Скетч' },
    { src: '/photo_4_2026-03-05_21-19-48.jpg', title: 'Драма' },
    { src: '/photo_1_2026-03-05_21-20-02.jpg', title: 'Маска' },
    { src: '/photo_2_2026-03-05_21-20-02.jpg', title: 'Неко' },
    { src: '/photo_3_2026-03-05_21-20-02.jpg', title: 'Персонаж' },
    { src: '/photo_4_2026-03-05_21-20-02.jpg', title: 'Портрет' },
    { src: '/photo_5_2026-03-05_21-20-02.jpg', title: 'Ночь' },
    { src: '/photo_6_2026-03-05_21-20-02.jpg', title: 'Неко в костюме' },
    { src: '/photo_7_2026-03-05_21-20-02.jpg', title: 'Новый год' },
    { src: '/photo_8_2026-03-05_21-20-02.jpg', title: 'Больница' },
    { src: '/photo_9_2026-03-05_21-20-02.jpg', title: 'Скетч девушки' },
    { src: '/photo_1_2026-03-05_21-28-47.jpg', title: 'Undertale' },
    { src: '/photo_2_2026-03-05_21-28-47.jpg', title: 'Процесс' },
    { src: '/photo_3_2026-03-05_21-28-47.jpg', title: 'Волк' },
    { src: '/photo_4_2026-03-05_21-28-47.jpg', title: 'Работа в Medibang' },
  ];

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? artworks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(artworks[newIndex].src);
  };

  const goToNext = () => {
    const newIndex = currentIndex === artworks.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(artworks[newIndex].src);
  };

  return (
    <section 
      ref={sectionRef}
      id="gallery"
      className="relative min-h-screen py-20 overflow-hidden paper-texture"
    >
      {/* Background */}
      <div className="absolute inset-0 pattern-dragons opacity-20" />
      <div className="absolute inset-0 pattern-waves opacity-30" />
      
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="/sticker-pagoda.png" 
              alt="" 
              className="w-16 h-16 animate-float-slow sticker-shadow"
            />
            <div className="seal-chinese text-xl">作品集</div>
            <img 
              src="/sticker-dragon.png" 
              alt="" 
              className="w-16 h-16 animate-float sticker-shadow"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gradient-chinese mb-2 font-chinese">
            МОИ РАБОТЫ
          </h2>
          <p className="text-xl text-red-700 font-medium">作品集 | Portfolio</p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.src}
              className={`group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover-lift transition-all duration-700 border-2 border-yellow-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
              onClick={() => openLightbox(artwork.src, index)}
            >
              <img
                src={artwork.src}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{artwork.title}</p>
              </div>
              <div className="absolute top-2 right-2 w-8 h-8 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-yellow-400">
                <Image className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative Stickers */}
        <div className="absolute left-10 top-1/3 hidden lg:block">
          <img 
            src="/sticker-koi.png" 
            alt="" 
            className="w-28 h-28 animate-float sticker-shadow"
          />
        </div>
        <div className="absolute right-10 bottom-1/4 hidden lg:block">
          <img 
            src="/sticker-lucky-cat.png" 
            alt="" 
            className="w-24 h-24 animate-float-slow sticker-shadow"
          />
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors border-2 border-yellow-400"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors border-2 border-yellow-400"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors border-2 border-yellow-400"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-lg border-4 border-yellow-400"
            onClick={(e) => e.stopPropagation()}
          />
          
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-yellow-400 text-lg font-bold">
            {currentIndex + 1} / {artworks.length}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
