
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToGuides = () => {
    navigate('/guides');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const navigateToADU = () => {
    navigate('/adu');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const navigateToInsurance = () => {
    navigate('/insurance');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const navigateToModular = () => {
    navigate('/modular');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const navigateToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-coral/20' : 'bg-black/20 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo with Text */}
          <div className="group cursor-pointer flex items-center space-x-3" onClick={navigateToHome}>
            <img 
              src="/HJZ/lovable-uploads/a137f41e-2944-4ea7-94de-bcbb26cae258.png" 
              alt="HJZ Construction Logo" 
              className="h-16 w-auto"
            />
            <div className="flex flex-col">
              <span className={`font-playfair text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-coral' : 'text-coral drop-shadow-lg'
              }`}>
                HJZ Construction
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-coral transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Meet Hayley</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`hover:text-coral transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Our Services</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`hover:text-coral transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Portfolio</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={navigateToADU}
              className={`hover:text-coral transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>ADUs</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={navigateToInsurance}
              className={`hover:text-coral transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Insurance</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={navigateToModular}
              className={`hover:text-coral transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Modular</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={navigateToGuides}
              className={`hover:text-coral transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Guides</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`hover:text-coral transition-all duration-300 font-medium relative group py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              }`}
            >
              <span>Reviews</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></div>
            </button>
          </nav>
          
          {/* Desktop CTA */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden lg:inline-flex bg-coral hover:bg-coral-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-coral/25 transition-all duration-500 hover:scale-105 btn-premium"
          >
            Get Started
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-full hover:bg-coral/10 transition-colors duration-300"
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
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-coral/20 py-6 rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-coral transition-colors font-medium px-6 py-3 rounded-lg hover:bg-coral/5"
              >
                Meet Hayley
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-coral transition-colors font-medium px-6 py-3 rounded-lg hover:bg-coral/5"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-coral transition-colors font-medium px-6 py-3 rounded-lg hover:bg-coral/5"
              >
                Portfolio
              </button>
              <button 
                onClick={navigateToADU}
                className="text-left text-gray-700 hover:text-coral transition-colors font-medium px-6 py-3 rounded-lg hover:bg-coral/5"
              >
                ADUs
              </button>
              <button 
                onClick={navigateToInsurance}
                className="text-left text-gray-700 hover:text-coral transition-colors font-medium px-6 py-3 rounded-lg hover:bg-coral/5"
              >
                Insurance
              </button>
              <button 
                onClick={navigateToModular}
                className="text-left text-gray-700 hover:text-coral transition-colors font-medium px-6 py-3 rounded-lg hover:bg-coral/5"
              >
                Modular
              </button>
              <button 
                onClick={navigateToGuides}
                className="text-left text-gray-700 hover:text-coral transition-colors font-medium px-6 py-3 rounded-lg hover:bg-coral/5"
              >
                Guides
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-coral transition-colors font-medium px-6 py-3 rounded-lg hover:bg-coral/5"
              >
                Reviews
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="mx-6 bg-coral hover:bg-coral-600 text-white font-semibold rounded-full shadow-lg btn-premium"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
