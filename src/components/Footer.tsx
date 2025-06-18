
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-navy via-navy-600 to-navy text-white py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Hayley's Brand */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <div className="font-playfair text-4xl font-bold text-gold mb-2">
                Hayley Zeoli
              </div>
              <div className="text-xl text-gray-300 font-light">
                HJZ Management
              </div> 
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Greater Boston's premier woman-owned custom home builder. Creating extraordinary 
              spaces where families build their legacies, one dream at a time.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Licensed & Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Woman-Owned Business Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>20+ Years New England Excellence</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xl mb-6 text-gold font-playfair">Explore</h4>
            <nav className="space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-gold transition-colors duration-300 text-left"
              >
                Meet Hayley
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-gold transition-colors duration-300 text-left"
              >
                Our Artistry
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-gray-300 hover:text-gold transition-colors duration-300 text-left"
              >
                Dream Portfolios
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-gray-300 hover:text-gold transition-colors duration-300 text-left"
              >
                Stories of Home
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-gold transition-colors duration-300 text-left"
              >
                Start Your Legacy
              </button>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-xl mb-6 text-gold font-playfair">Connect</h4>
            <div className="space-y-4 text-gray-300">
              <div>
                <div className="font-medium mb-1">Direct Line</div>
                <div className="text-white hover:text-gold transition-colors cursor-pointer">
                  (617) 555-0123
                </div>
              </div>
              <div>
                <div className="font-medium mb-1">Email Hayley</div> 
                <div className="text-white hover:text-gold transition-colors cursor-pointer">
                  hayley@hjzmanagement.com
                </div>
              </div>
              <div className="pt-2">
                <div className="font-medium mb-1">Service Area</div>
                <div className="text-sm">Greater Boston Area</div>
                <div className="text-sm">MetroWest Massachusetts</div>
                <div className="text-sm italic text-gold">Where dreams become home</div>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-600 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            © 2025 HJZ Management & Hayley Zeoli. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Accessibility</a>
          </div>
        </div>
        
        {/* Personal Touch */}
        <div className="text-center mt-12 pt-8 border-t border-gray-600">
          <p className="text-gray-400 italic">
            "Built with passion for New England families who demand excellence."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
