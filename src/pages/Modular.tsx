
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Modular = () => {
  const benefits = [
    "Faster Build Times – Factory construction means weather delays are minimized and your home is ready in weeks, not months.",
    "Cost Certainty – Pricing is more predictable than traditional builds, helping you stay within budget.",
    "Custom Designs – We collaborate with our architect to ensure your modular home matches your lifestyle, taste, and lot.",
    "Quality & Strength – Built to meet or exceed local building codes with factory-inspected precision.",
    "Seamless Site Work – We handle the full process, including permitting, foundation, utility hookups, and final trim."
  ];

  const services = [
    "Full site preparation and foundation work",
    "Modular unit delivery coordination", 
    "Button-up services and finish work",
    "Zoning and permitting management",
    "Project management from start to certificate of occupancy"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy/95 to-coral/20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Modular Homes by HJZ Construction
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-coral animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Smarter. Faster.
            </div>
            <p className="text-lg sm:text-xl mb-12 text-gray-200 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Custom Modular Homes Built for New England Living
            </p>
            <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-gray-300 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              HJZ Construction proudly offers full-service modular home solutions designed to save 
              time, control costs, and deliver exceptional quality. With our trusted architect partners 
              and factory-built precision, your dream home is closer than ever.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project Showcase */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 section-animate">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-4">
              Featured <span className="text-coral">Modular</span> Projects
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 section-animate">
              <img 
                src="/HJZ/lovable-uploads/dcc5338f-96b1-4662-ab74-1399dd66baa5.png" 
                alt="Completed Modern Modular Home with Natural Wood and Contemporary Design" 
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 section-animate" style={{animationDelay: '0.2s'}}>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy">Modern Luxury Living</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                This stunning modular home showcases the perfect blend of contemporary design and natural materials. 
                Featuring extensive use of natural wood, large windows for abundant natural light, and seamless 
                indoor-outdoor living spaces with beautiful landscaping.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <span className="bg-coral/10 text-coral px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-200">Custom Design</span>
                <span className="bg-coral/10 text-coral px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-200">Natural Materials</span>
                <span className="bg-coral/10 text-coral px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-200">Energy Efficient</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 md:order-2 section-animate" style={{animationDelay: '0.3s'}}>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy">Construction Process</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our modular construction process ensures precision and quality at every step. From factory-built 
                modules to on-site assembly, we maintain strict quality control standards. This image shows the 
                careful installation process during the construction phase.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <span className="bg-coral/10 text-coral px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-200">Quality Control</span>
                <span className="bg-coral/10 text-coral px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-200">Professional Installation</span>
                <span className="bg-coral/10 text-coral px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-200">Weather Protected</span>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 md:order-1 section-animate" style={{animationDelay: '0.4s'}}>
              <img 
                src="/HJZ/lovable-uploads/f0f4bbc3-928c-46f9-b7b8-93ca3f749952.png" 
                alt="Modular Home Construction Process with Crane Installation" 
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Modular Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 section-animate">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-4">
              Why Choose a Modular Home?
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 section-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-coral/5 via-white to-coral/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 section-animate">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-4">
              Modular Services Include
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-coral/10 hover:scale-105 section-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                  <p className="text-gray-700 text-base sm:text-lg">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Collaboration Section */}
      <section className="py-16 sm:py-20 bg-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center section-animate">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
            Design <span className="text-coral">Collaboration</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-gray-300">
            We work directly with our modular architect to streamline your design, ensure factory 
            compatibility, and align your final product with local building codes and zoning requirements.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Modular;
