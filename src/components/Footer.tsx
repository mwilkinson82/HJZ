
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGoogleReviews = () => {
    // You'll need to provide the actual Google Reviews link
    window.open('https://www.google.com/search?q=HJZ+Construction+reviews', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-navy via-navy to-navy text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="font-playfair text-3xl font-bold text-coral mb-2">
                Hayley Zeoli
              </div>
              <div className="text-lg text-gray-300 font-light">
                HJZ Construction Inc.
              </div> 
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Greater Boston's premier woman-owned custom home builder. Creating extraordinary 
              spaces where families build their legacies, one dream at a time.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-coral rounded-full"></div>
                <span>Licensed & Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-coral rounded-full"></div>
                <span>Woman-Owned Business Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-coral rounded-full"></div>
                <span>15+ Years New England Excellence</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-coral font-playfair">Explore</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-coral transition-colors duration-300 text-left"
              >
                Meet Hayley
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-coral transition-colors duration-300 text-left"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-gray-300 hover:text-coral transition-colors duration-300 text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-gray-300 hover:text-coral transition-colors duration-300 text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-coral transition-colors duration-300 text-left"
              >
                Start Your Legacy
              </button>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-coral font-playfair">Connect</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium mb-1">Direct Line</div>
                <a href="tel:6176806716" className="text-white hover:text-coral transition-colors">
                  (617) 680-6716
                </a>
              </div>
              <div>
                <div className="font-medium mb-1">Email Hayley</div> 
                <a href="mailto:info.hjzmgmt@gmail.com" className="text-white hover:text-coral transition-colors">
                  info.hjzmgmt@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <div className="font-medium mb-2">Follow Us</div>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/hjz_construction_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-coral transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/Hjz.mgmt.inc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-coral transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <button 
                  onClick={openGoogleReviews}
                  className="text-white hover:text-coral transition-colors text-left"
                >
                  Google Reviews
                </button>
              </div>
              <div className="pt-2">
                <div className="font-medium mb-1">Service Area</div>
                <div className="text-sm">Greater Boston Area</div>
                <div className="text-sm">MetroWest Massachusetts</div>
                <div className="text-sm italic text-coral">Where dreams become home</div>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-600 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            © 2025 HJZ Construction Inc. & Hayley Zeoli. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coral transition-colors">Terms</a>
            <a href="#" className="hover:text-coral transition-colors">Accessibility</a>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-6 border-t border-gray-600">
          <p className="text-gray-400 italic">
            "Built with passion for New England families who demand excellence."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
