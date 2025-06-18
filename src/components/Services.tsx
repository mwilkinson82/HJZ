
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Dream Home Design",
      subtitle: "Where Vision Meets Reality",
      description: "From initial sketches over morning coffee to detailed architectural masterpieces—every line drawn with intention, every space crafted with purpose.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      highlight: "Bespoke Blueprints"
    },
    {
      title: "Master Craftsmanship",
      subtitle: "Artisans at Every Turn",
      description: "White-glove construction management where every nail, every joint, every finish reflects our obsession with perfection. Your dream deserves nothing less.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      highlight: "Turnkey Excellence"
    },
    {
      title: "Estate Transformation",
      subtitle: "Honoring Heritage, Embracing Future",
      description: "Breathing new life into cherished properties while preserving their soul. Where historic charm meets modern luxury in perfect harmony.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      highlight: "Legacy Preservation"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
      <div className="absolute top-32 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 section-animate">
          <h2 className="font-playfair text-6xl font-bold text-navy mb-6">
            Our <span className="text-gradient-gold">Artistry</span>
          </h2>
          <div className="h-1 w-32 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Three pillars of excellence that transform architectural dreams into lived-in poetry. 
            Each service crafted with the precision of a master, the heart of an artist.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Card key={index} className="section-animate group hover-lift border-0 shadow-2xl overflow-hidden bg-white/90 backdrop-blur" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-medium">
                  {service.highlight}
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="font-playfair text-2xl text-navy mb-2">{service.title}</CardTitle>
                <div className="text-gold font-medium text-sm tracking-wide uppercase">{service.subtitle}</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-20 section-animate">
          <div className="inline-block bg-gradient-to-r from-gold/10 to-navy/10 p-8 rounded-3xl">
            <p className="text-lg text-navy mb-4 font-light">
              Ready to begin your architectural journey?
            </p>
            <div className="text-gold font-semibold text-xl italic">
              "Every masterpiece starts with a single conversation."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
