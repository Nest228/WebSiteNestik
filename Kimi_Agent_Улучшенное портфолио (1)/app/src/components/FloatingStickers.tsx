import { useEffect, useState } from 'react';

interface Sticker {
  id: number;
  src: string;
  x: number;
  y: number;
  size: number;
  rotation: number;
  animationDelay: number;
  animationDuration: number;
  animationType: string;
}

const FloatingStickers = () => {
  const [stickers, setStickers] = useState<Sticker[]>([]);

  useEffect(() => {
    const stickerImages = [
      '/sticker-dragon.png',
      '/sticker-lucky-cat.png',
      '/sticker-lantern.png',
      '/sticker-fan.png',
      '/sticker-teapot.png',
      '/sticker-koi.png',
      '/sticker-panda.png',
      '/sticker-lotus.png',
      '/sticker-fireworks.png',
      '/sticker-pagoda.png',
      '/sticker-phoenix.png',
      '/sticker-sakura.png',
      '/sticker-cat-artist.png',
      '/sticker-artist.png',
      '/sticker-palette.png',
      '/sticker-star.png',
      '/sticker-heart.png',
      '/sticker-wand.png',
      '/sticker-cloud.png',
      '/sticker-moon.png',
      '/sticker-rainbow.png',
      '/sticker-pencil.png',
    ];

    const animations = ['animate-float', 'animate-float-slow', 'animate-wiggle', 'animate-lantern'];

    const generatedStickers: Sticker[] = [];
    for (let i = 0; i < 25; i++) {
      generatedStickers.push({
        id: i,
        src: stickerImages[Math.floor(Math.random() * stickerImages.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 50 + Math.random() * 70,
        rotation: Math.random() * 360,
        animationDelay: Math.random() * 5,
        animationDuration: 3 + Math.random() * 4,
        animationType: animations[Math.floor(Math.random() * animations.length)],
      });
    }
    setStickers(generatedStickers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stickers.map((sticker) => (
        <img
          key={sticker.id}
          src={sticker.src}
          alt=""
          className={`absolute sticker-shadow ${sticker.animationType}`}
          style={{
            left: `${sticker.x}%`,
            top: `${sticker.y}%`,
            width: `${sticker.size}px`,
            height: `${sticker.size}px`,
            transform: `rotate(${sticker.rotation}deg)`,
            animationDelay: `${sticker.animationDelay}s`,
            animationDuration: `${sticker.animationDuration}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingStickers;
