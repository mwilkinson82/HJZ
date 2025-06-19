
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Modular Homes by HJZ Construction
            </h1>
            <div className="text-2xl md:text-3xl font-light mb-8 text-coral">
              Smarter. Faster.
            </div>
            <p className="text-xl mb-12 text-gray-200">
              Custom Modular Homes Built for New England Living
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-300">
              HJZ Construction proudly offers full-service modular home solutions designed to save 
              time, control costs, and deliver exceptional quality. With our trusted architect partners 
              and factory-built precision, your dream home is closer than ever.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Modular Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">
              Why Choose a Modular Home?
            </h2>
            <div className="h-1 w-24 bg-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-coral/5 via-white to-coral/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">
              Modular Services Include
            </h2>
            <div className="h-1 w-24 bg-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-coral/10">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Collaboration Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-8">
            Design <span className="text-coral">Collaboration</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-300">
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
