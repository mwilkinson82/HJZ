
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ADU = () => {
  const aduTypes = [
    { title: "Detached ADUs", description: "Backyard cottages, modern guest houses" },
    { title: "Garage Conversions", description: "Transform underused space into valuable living" },
    { title: "Basement Units", description: "Legal in-law apartments or income properties" },
    { title: "Modular ADUs", description: "Faster build times with fixed pricing" },
    { title: "Attached ADUs", description: "Seamless integration with your existing home" },
    { title: "Vertical ADUs", description: "Add a second-story unit to maximize your property potential" }
  ];

  const benefits = [
    "Design-Build Experts – We guide you from concept to completion, handling permitting, design, and construction under one roof.",
    "Local Code Knowledge – We know the Massachusetts zoning and ADU laws inside and out, saving you costly delays.",
    "Maximized ROI – Our team helps you assess potential rental income, appraised value, and resale gains upfront.",
    "Stress-Free Permitting – Our project managers navigate town requirements so you don't have to.",
    "Custom Built for You – Choose from detached units, garage conversions, basement suites, modular ADUs, attached ADUs, or vertical ADUs."
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy/95 to-coral/20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Accessory Dwelling Units (ADUs)
            </h1>
            <div className="text-2xl md:text-3xl font-light mb-8 text-coral animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Build Smart. Live Free.
            </div>
            <p className="text-xl mb-12 text-gray-200 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Your ADU Experts in Massachusetts
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-300 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Whether you're planning to house loved ones, generate rental income, or expand your 
              lifestyle — HJZ Construction delivers turnkey ADU solutions designed for your goals 
              and your lot.
            </p>
          </div>
        </div>
      </section>

      {/* Featured ADU Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-animate">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">
              Our <span className="text-coral">ADU</span> Portfolio
            </h2>
            <div className="h-1 w-24 bg-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 section-animate" style={{animationDelay: '0.1s'}}>
              <img 
                src="/HJZ/lovable-uploads/55e1b8cd-a46f-4127-a028-2d128565dbbf.png" 
                alt="Modern Detached ADU with Contemporary Design" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="p-6 bg-white">
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">Modern Detached ADU</h3>
                <p className="text-gray-600">Contemporary design with elevated living space and integrated garage</p>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 section-animate" style={{animationDelay: '0.2s'}}>
              <img 
                src="/HJZ/lovable-uploads/928ccc09-cea3-4331-8cfe-0043a87c9b5f.png" 
                alt="Multi-Level ADU with Natural Materials" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="p-6 bg-white">
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">Multi-Level ADU</h3>
                <p className="text-gray-600">Natural materials blend seamlessly with modern architectural elements</p>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 section-animate md:col-span-2 lg:col-span-1" style={{animationDelay: '0.3s'}}>
              <img 
                src="/HJZ/lovable-uploads/c6a83e88-8e6a-4c4c-9553-ed1505094acb.png" 
                alt="Compact ADU with Outdoor Access" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="p-6 bg-white">
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">Compact Efficient ADU</h3>
                <p className="text-gray-600">Maximizing space efficiency with thoughtful design and outdoor integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose HJZ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-animate">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">
              Why Build an ADU with <span className="text-coral">HJZ</span> Construction?
            </h2>
            <div className="h-1 w-24 bg-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 section-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <p className="text-gray-700 text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADU Types Section */}
      <section className="py-20 bg-gradient-to-r from-coral/5 via-white to-coral/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-animate">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">
              ADUs We Specialize In
            </h2>
            <div className="h-1 w-24 bg-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aduTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-coral/10 hover:border-coral/20 hover:scale-105 section-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="font-playfair text-xl font-bold text-navy mb-4">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 text-center section-animate">
          <h2 className="font-playfair text-4xl font-bold mb-8">
            Need Help With <span className="text-coral">Financing?</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-300">
            We help clients connect with local lenders, renovation loans (FHA 203(k), HELOCs), 
            and creative financing options so you can build now and pay smart.
          </p>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center section-animate">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-8">
            Service Area
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            <span className="text-coral font-semibold">HJZ Construction</span> proudly serves homeowners within a 1-hour radius of Boston, 
            including towns throughout Norfolk, Suffolk, Plymouth, and Middlesex counties.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ADU;
