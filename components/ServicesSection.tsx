
import React from 'react';

const GlassCard: React.FC<{ 
  title: string; 
  subtitle: string; 
  description: string; 
  tags: string[];
  onClick?: () => void;
}> = ({ title, subtitle, description, tags, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`group relative w-full max-w-md h-[500px] flex flex-col p-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.04] hover:-translate-y-3 ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Base Glass Layer */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-blue-900/20 backdrop-blur-3xl border border-white/25 transition-all duration-700 group-hover:bg-blue-950/50 group-hover:border-white/40 shadow-[0_12px_40px_0_rgba(0,0,0,0.4)] group-hover:shadow-[0_40px_80px_-15px_rgba(0,30,60,0.7)]" />
      
      {/* Enhanced Inner Gradient Glow */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Pronounced Outer Glow Bloom */}
      <div className="absolute -inset-2 rounded-[2.6rem] bg-white/5 opacity-0 blur-3xl group-hover:opacity-30 transition-all duration-1000 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-auto">
          <span className="inline-block text-[10px] tracking-[0.6em] uppercase text-white/80 mb-5 transition-all duration-700 group-hover:text-white group-hover:translate-x-1">
            {subtitle}
          </span>
          <h3 className="font-serif-ital text-4xl md:text-5xl text-white leading-tight mb-6 transition-all duration-700 group-hover:translate-x-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed font-light tracking-wide max-w-[95%] transition-colors duration-700 group-hover:text-white drop-shadow-sm">
            {description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-[9px] tracking-[0.2em] uppercase text-white/90 transition-all duration-700 group-hover:border-white/50 group-hover:text-white group-hover:bg-white/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-12 group/btn cursor-pointer inline-flex flex-col items-start">
          <span className="text-[10px] tracking-[0.5em] uppercase text-white/60 transition-all duration-700 group-hover/btn:text-white group-hover/btn:tracking-[0.7em]">
            {onClick ? 'Enter Sanctuary' : 'Explore Program'}
          </span>
          <div className="h-[1px] w-12 bg-white/40 mt-2 transition-all duration-700 group-hover/btn:w-full group-hover/btn:bg-white/80" />
        </div>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC<{ 
  onPregnancySelect?: () => void;
  onChildCareSelect?: () => void;
}> = ({ onPregnancySelect, onChildCareSelect }) => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center py-20 px-4">
      <GlassCard 
        subtitle="The Miracle of Life"
        title="Pregnancy Sanctuary"
        description="Experience a nurturing journey through maternity. From natural holistic guidance to advanced IVF support, we harmonize science and serenity for you and your future."
        tags={['Natural', 'IVF Support', 'Prenatal Care']}
        onClick={onPregnancySelect}
      />
      
      <div className="hidden md:block w-[1px] h-72 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-2 opacity-50" />

      <GlassCard 
        subtitle="Growing with Grace"
        title="Child Care & Development"
        description="A specialized haven for your little ones. We provide comprehensive wellness, emotional intelligence programs, and pediatric expertise tailored for the modern family."
        tags={['Pediatrics', 'Development', 'Emotional Wellness']}
        onClick={onChildCareSelect}
      />
    </div>
  );
};
