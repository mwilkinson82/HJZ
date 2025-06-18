
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
        {/* Strategic gradient - darker at top for text readability, lighter at bottom to show image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/20"></div>
      </div>
      
      {/* Content Container with subtle frosting */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 md:p-12 pb-16 sm:pb-20 max-w-5xl mx-auto shadow-2xl w-full relative">
          {/* Floating Elements */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-coral/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-16 sm:bottom-32 right-8 sm:right-16 w-12 sm:w-24 h-12 sm:h-24 bg-white/10 rounded-full blur-lg animate-bounce"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <div className="animate-fade-in-up">
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight text-white drop-shadow-2xl">
                Where Dreams Take
                <span className="block text-white">Root in New England</span>
              </h1>
              <div className="h-1 w-20 sm:w-32 bg-coral mx-auto mb-6 sm:mb-8 rounded-full animate-pulse shadow-lg"></div>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 font-light animate-fade-in-up leading-relaxed text-white drop-shadow-xl" style={{animationDelay: '0.3s'}}>
              <span className="text-coral-300 font-medium drop-shadow-lg">Crafting Legacy Homes.</span> Building Your Forever.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 font-light text-white/95 animate-fade-in-up max-w-3xl mx-auto drop-shadow-lg leading-relaxed px-2" style={{animationDelay: '0.5s'}}>
              From historic Boston neighborhoods to countryside estates, we create custom homes 
              that honor New England tradition while embracing your family's unique vision.
            </p>
            
            <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center animate-fade-in-up px-2" style={{animationDelay: '0.7s'}}>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="group bg-coral hover:bg-coral-600 text-white font-semibold px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-coral/25 transition-all duration-500 hover:scale-105 w-full sm:w-auto"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">Start Building Your Dream</span>
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline" 
                size="lg"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-navy px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-500 hover:scale-105 w-full sm:w-auto"
              >
                Discover Our Process
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator - Perfectly centered at bottom of card */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-white/70">
              <div className="text-xs font-light mb-2 tracking-wider">SCROLL TO EXPLORE</div>
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
