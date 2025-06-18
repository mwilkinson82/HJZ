
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gold/20' : 'bg-black/20 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo with Personality */}
          <div className="group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`font-playfair text-4xl md:text-5xl font-bold group-hover:text-gold transition-colors duration-300 ${
              isScrolled ? 'text-navy' : 'text-white drop-shadow-lg'
            }`}>
              HJZ Management
            </div>
            <div className={`text-sm font-medium tracking-wider uppercase opacity-90 ${
              isScrolled ? 'text-gold' : 'text-gold-200 drop-shadow-md'
            }`}>
              New England Custom Homes
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-gold transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Meet Hayley</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`hover:text-gold transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Our Artistry</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`hover:text-gold transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Portfolio</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`hover:text-gold transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Love Letters</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
            </button>
          </nav>
          
          {/* Desktop CTA */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden lg:inline-flex bg-gold hover:bg-gold-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-gold/25 transition-all duration-500 hover:scale-105 btn-premium"
          >
            Begin Your Legacy
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-full hover:bg-gold/10 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              } ${isScrolled ? 'bg-navy' : 'bg-white drop-shadow-md'}`}></span>
              <span className={`block w-6 h-0.5 mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              } ${isScrolled ? 'bg-navy' : 'bg-white drop-shadow-md'}`}></span>
              <span className={`block w-6 h-0.5 mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              } ${isScrolled ? 'bg-navy' : 'bg-white drop-shadow-md'}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gold/20 py-6 rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-gold transition-colors font-medium px-6 py-3 rounded-lg hover:bg-gold/5"
              >
                Meet Hayley
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-gold transition-colors font-medium px-6 py-3 rounded-lg hover:bg-gold/5"
              >
                Our Artistry
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-gold transition-colors font-medium px-6 py-3 rounded-lg hover:bg-gold/5"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-gold transition-colors font-medium px-6 py-3 rounded-lg hover:bg-gold/5"
              >
                Love Letters
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="mx-6 bg-gold hover:bg-gold-600 text-white font-semibold rounded-full shadow-lg btn-premium"
              >
                Begin Your Legacy
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
