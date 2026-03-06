import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  animationDelay: number;
}

const Sparkles = ({ count = 30 }: { count?: number }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const colors = ['#f472b6', '#a855f7', '#fbbf24', '#34d399', '#60a5fa', '#ec4899'];
    const generatedSparkles: Sparkle[] = [];
    
    for (let i = 0; i < count; i++) {
      generatedSparkles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: Math.random() * 2,
      });
    }
    setSparkles(generatedSparkles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            borderRadius: '50%',
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
            animationDelay: `${sparkle.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
