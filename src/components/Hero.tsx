
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-[20s] ease-out"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto py-20">
        <div className="animate-fade-in-up">
          <h1 className="font-playfair text-7xl md:text-8xl font-bold mb-4 tracking-tight leading-none">
            Hayley Zeoli
          </h1>
          <div className="h-1 w-32 bg-gold mx-auto mb-6 rounded-full animate-pulse"></div>
        </div>
        
        <p className="text-2xl md:text-3xl mb-4 font-light animate-fade-in-up leading-relaxed" style={{animationDelay: '0.3s'}}>
          <span className="text-gold font-medium">Artisan of Dreams.</span> Architect of Legacy.
        </p>
        
        <p className="text-lg md:text-xl mb-12 font-light opacity-90 animate-fade-in-up max-w-3xl mx-auto" style={{animationDelay: '0.5s'}}>
          Where New England tradition meets visionary design. Creating multi-million dollar sanctuaries 
          that tell your story for generations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.7s'}}>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="group bg-gold hover:bg-gold-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-gold/25 transition-all duration-500 hover:scale-105"
          >
            <span className="group-hover:scale-110 transition-transform duration-300">Begin Your Legacy</span>
          </Button>
          <Button 
            onClick={() => scrollToSection('about')}
            variant="outline" 
            size="lg"
            className="border-2 border-white/80 text-white hover:bg-white hover:text-navy px-12 py-6 text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-500 hover:scale-105"
          >
            Meet Hayley
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator with Personality */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/70">
          <div className="text-xs font-light mb-2 tracking-wider">SCROLL TO EXPLORE</div>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
