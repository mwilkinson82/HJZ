
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="font-playfair text-3xl font-bold text-gold mb-4">
              HJZ Management
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Greater Boston's premier woman-owned custom home builder and design-build firm. 
              Creating extraordinary spaces for discerning homeowners since 2000.
            </p>
            <div className="text-sm text-gray-400">
              Licensed & Insured | Woman-Owned Business
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-gold transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-gold transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-gray-300 hover:text-gold transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-gold transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <div>(617) 555-0123</div>
              <div>info@hjzmanagement.com</div>
              <div className="pt-2">
                <div className="text-sm">Greater Boston Area</div>
                <div className="text-sm">Massachusetts</div>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            © 2025 HJZ Management. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
