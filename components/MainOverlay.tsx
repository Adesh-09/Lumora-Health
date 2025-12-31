
import React from 'react';

export const MainOverlay: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
      <div className="fade-in stagger-1">
        <h1 className="flex flex-col items-center">
          <span className="font-cursive text-6xl md:text-9xl text-white leading-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] select-none">
            Lumora
          </span>
          <span className="font-serif-ital text-2xl md:text-4xl text-white/90 font-light tracking-[0.4em] uppercase -mt-3 md:-mt-8 drop-shadow-lg select-none">
            Health
          </span>
        </h1>
      </div>
      
      <div className="mt-10 flex flex-col items-center fade-in stagger-2">
        <div className="h-[1px] w-36 bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8" />
        
        <div className="group cursor-default">
          <p className="font-serif-ital text-xl md:text-2xl text-white/80 italic tracking-wide mb-2 transition-colors duration-700 group-hover:text-white">
            Powered by Lumora Labs
          </p>
          <div className="h-[1px] w-0 bg-white/30 mx-auto transition-all duration-1000 group-hover:w-full" />
        </div>
      </div>
    </div>
  );
};
