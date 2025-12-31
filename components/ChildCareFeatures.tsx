
import React, { useEffect, useRef, useState } from 'react';

const FeatureCard: React.FC<{ 
  title: string; 
  subtitle: string; 
  items: string[];
}> = ({ title, subtitle, items }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative w-full flex flex-col p-7 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] h-full min-h-[300px] max-w-[280px] mx-auto 
        ${isInView ? 'scale-[1.03] -translate-y-1' : 'scale-100 opacity-80 translate-y-4'}
        hover:-translate-y-3 hover:scale-[1.06]`}
    >
      {/* Thicker Glowing White Glass Layer */}
      <div className={`absolute inset-0 rounded-[2.5rem] bg-white/[0.15] backdrop-blur-2xl border-2 border-white/30 transition-all duration-1000 
        ${isInView ? 'bg-white/[0.22] border-white/50 shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'bg-white/[0.1] border-white/20'}
        group-hover:bg-white/[0.28] group-hover:border-white/70 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]`} 
      />
      
      {/* Intensive Radiant White Inner Glow */}
      <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/30 via-transparent to-white/10 transition-opacity duration-1000 pointer-events-none
        ${isInView ? 'opacity-70' : 'opacity-30'} 
        group-hover:opacity-100`} 
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        <header className="mb-5">
          <span className={`text-[9px] tracking-[0.7em] uppercase font-bold mb-2 block transition-colors duration-700
            ${isInView ? 'text-white/90' : 'text-white/60'}
            group-hover:text-white`}>
            {subtitle}
          </span>
          <h4 className="font-serif-ital text-xl md:text-2xl text-white tracking-wide leading-tight transition-all duration-700 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            {title}
          </h4>
        </header>

        <div className={`h-[2px] mb-6 transition-all duration-1000 
          ${isInView ? 'w-12 bg-white/70' : 'w-6 bg-white/30'} 
          group-hover:w-16 group-hover:bg-white/95`} 
        />

        <ul className="space-y-4 mt-auto">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 group/item">
              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full transition-all duration-500 shadow-[0_0_4px_rgba(255,255,255,0.6)]
                ${isInView ? 'scale-110 bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'scale-100 bg-white/40'}
                group-hover/item:bg-white group-hover/item:shadow-[0_0_14px_rgba(255,255,255,1)]`} 
              />
              <span className={`text-[11px] md:text-[12px] font-semibold transition-colors duration-500 leading-snug tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]
                ${isInView ? 'text-white/95' : 'text-white/70'}
                group-hover/item:text-white`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ChildCareFeatures: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen py-12">
      {/* Aesthetic Header */}
      <div className="text-center mb-16 animate-fade-in px-4">
        <span className="font-cursive text-5xl md:text-6xl text-white block mb-2 opacity-100 drop-shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
          Infant Care
        </span>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-8 bg-white/40" />
          <h2 className="font-serif-ital text-base md:text-lg text-white/80 tracking-[0.6em] uppercase font-light">
            Regulation & Growth
          </h2>
          <div className="h-[1px] w-8 bg-white/40" />
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6 mb-20 items-stretch justify-center">
        <FeatureCard 
          subtitle="Acoustic Wellness"
          title="Clinical Soundscapes"
          items={[
            '0-3m Womb-like Frequencies',
            '3-12m Rhythmic Hums',
            'Safe Decibel Monitoring',
            'Sleep Cycle Matching'
          ]}
        />
        
        <FeatureCard 
          subtitle="Precision Insights"
          title="Daily Care Logs"
          items={[
            'Smart Feeding Logs',
            'Visual Diaper/Stool Guides',
            'Pattern Recognition',
            'Health Trend Alerts'
          ]}
        />

        <FeatureCard 
          subtitle="Physical Growth"
          title="Motor Development"
          items={[
            'Age-wise Roadmap',
            'Tummy Time Guidance',
            'Flat Head Prevention',
            'Soothing Techniques'
          ]}
        />
      </div>

      {/* Return Button */}
      <button 
        onClick={onBack}
        className="group relative px-10 py-4 flex flex-col items-center transition-all duration-700 hover:scale-[1.05]"
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/30 bg-white/15 backdrop-blur-xl transition-all duration-1000 group-hover:border-white/60 group-hover:bg-white/25 shadow-xl group-hover:shadow-white/20" />
        <span className="relative z-10 text-[11px] tracking-[0.8em] uppercase text-white/90 group-hover:text-white transition-all font-bold drop-shadow-md">
          Return to Sanctuary
        </span>
      </button>
    </div>
  );
};
