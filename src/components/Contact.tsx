
import React from 'react';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/60 to-gold/10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 section-animate">
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Let's Create Your <span className="text-coral">Legacy</span>
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gold mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              Every extraordinary home begins with an extraordinary conversation. Share your vision, and let's explore how we can bring your dreams to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-1 section-animate order-2 lg:order-1">
              <ContactInfo />
            </div>
            
            <div className="lg:col-span-2 section-animate order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
