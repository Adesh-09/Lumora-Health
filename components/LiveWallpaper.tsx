
import React, { useState, useEffect, useRef } from 'react';

const CLOUD_IMAGE = 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&q=95&w=2400';

export const LiveWallpaper: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      // Target offset (max 15px movement for subtlety)
      const targetX = x * 30; 
      const targetY = y * 30;

      // Use requestAnimationFrame for smooth updates if we wanted lerp, 
      // but for simplicity and performance, a slight transition on the element works well.
      setOffset({ x: targetX, y: targetY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-sky-900 overflow-hidden">
      {/* The Parallax Wrapper */}
      <div 
        className="absolute inset-[-50px] transition-transform duration-1000 ease-out will-change-transform"
        style={{ 
          transform: `translate3d(${-offset.x}px, ${-offset.y}px, 0)` 
        }}
      >
        <div 
          className="w-full h-full bg-cover bg-center animate-ken-burns will-change-transform"
          style={{ 
            backgroundImage: `url(${CLOUD_IMAGE})`,
            filter: 'brightness(1.05) contrast(1.02)'
          }}
        />
      </div>
      
      {/* Cinematic atmospheric layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-sky-500/5 mix-blend-overlay pointer-events-none" />
      
      {/* Soft grain/noise for realism */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
