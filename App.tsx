
import React, { useState } from 'react';
import { LiveWallpaper } from './components/LiveWallpaper';
import { MainOverlay } from './components/MainOverlay';
import { Particles } from './components/Particles';
import { ServicesSection } from './components/ServicesSection';
import { PregnancyFeatures } from './components/PregnancyFeatures';
import { ChildCareFeatures } from './components/ChildCareFeatures';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'pregnancy' | 'childcare'>('home');

  const handleEnterPregnancy = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setView('pregnancy'), 500);
  };

  const handleEnterChildCare = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setView('childcare'), 500);
  };

  const handleGoHome = () => {
    setView('home');
  };

  return (
    <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-black text-white">
      {/* Fixed Background Layers */}
      <div className="fixed inset-0 z-0">
        <LiveWallpaper />
        <Particles />
      </div>

      {view === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative z-10 w-full h-screen flex items-center justify-center snap-start">
            <MainOverlay />
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 animate-pulse">
              <span className="text-[10px] tracking-[0.4em] uppercase font-light mb-2">Scroll</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
          </section>

          {/* Services Section */}
          <section className="relative z-10 w-full min-h-screen flex items-center justify-center snap-start py-20 px-6">
            <ServicesSection 
              onPregnancySelect={handleEnterPregnancy} 
              onChildCareSelect={handleEnterChildCare}
            />
          </section>

          {/* Footer Branding */}
          <footer className="relative z-10 w-full py-12 flex flex-col items-center justify-center snap-end bg-gradient-to-t from-black/40 to-transparent">
            <p className="font-serif-ital text-xl text-white/40 italic tracking-widest">
              Lumora Health &copy; 2025
            </p>
          </footer>
        </>
      ) : (
        <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center py-10 px-6 animate-fade-in">
          {view === 'pregnancy' ? (
            <PregnancyFeatures onBack={handleGoHome} />
          ) : (
            <ChildCareFeatures onBack={handleGoHome} />
          )}
        </section>
      )}
    </main>
  );
};

export default App;
