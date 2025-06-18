
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          HJZ Management
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Woman-owned. Bespoke design-build for the discerning homeowner.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-gold hover:bg-gold-600 text-white font-semibold px-8 py-4 text-lg"
          >
            Begin Your Vision
          </Button>
          <Button 
            onClick={() => scrollToSection('portfolio')}
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-lg"
          >
            View Our Portfolio
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
