import React from 'react';

export const PatternClouds: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute inset-0 pattern-clouds opacity-40 ${className}`} />
);

export const PatternDragons: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute inset-0 pattern-dragons opacity-30 ${className}`} />
);

export const PatternLattice: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute inset-0 pattern-lattice opacity-30 ${className}`} />
);

export const PatternWaves: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute inset-0 pattern-waves opacity-40 ${className}`} />
);

export const DecorativeBlob: React.FC<{ 
  className?: string; 
  color?: string;
  size?: string;
}> = ({ 
  className = '', 
  color = 'from-red-600 to-yellow-500',
  size = 'w-64 h-64'
}) => (
  <div 
    className={`absolute rounded-full bg-gradient-to-br ${color} opacity-20 blur-3xl ${size} ${className}`}
    style={{
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    }}
  />
);

export const DecorativeCircle: React.FC<{
  className?: string;
  color?: string;
  size?: string;
}> = ({
  className = '',
  color = 'from-yellow-500 to-red-500',
  size = 'w-48 h-48'
}) => (
  <div
    className={`absolute rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl ${size} ${className}`}
  />
);

export const ChineseSeal: React.FC<{
  className?: string;
  text?: string;
}> = ({
  className = '',
  text = '印'
}) => (
  <div className={`w-16 h-16 bg-red-700 border-2 border-red-800 flex items-center justify-center text-white font-bold text-xl ${className}`}>
    {text}
  </div>
);

export const FloatingLantern: React.FC<{
  className?: string;
  delay?: number;
}> = ({
  className = '',
  delay = 0
}) => (
  <div
    className={`absolute w-12 h-16 bg-gradient-to-b from-red-500 to-red-700 rounded-full animate-lantern ${className}`}
    style={{
      animationDelay: `${delay}s`,
      boxShadow: '0 0 20px rgba(196, 30, 58, 0.5)',
    }}
  >
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-yellow-500"></div>
  </div>
);
