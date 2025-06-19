
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Accessory Dwelling Units",
      subtitle: "Build Smart. Live Free.",
      description: "From detached cottages to garage conversions, we deliver turnkey ADU solutions designed for your goals and your lot. Navigate Massachusetts zoning laws with confidence.",
      image: "/lovable-uploads/29347f05-ef4e-496c-b73d-dfe9c1c72011.png",
      highlight: "Design-Build Experts",
      link: "/adu"
    },
    {
      title: "Insurance Claims",
      subtitle: "Rebuilding Lives, Restoring Homes",
      description: "Decades of experience in construction and insurance claims enable us to assess and articulate damage details like no other contractor. We work directly with your insurance company.",
      image: "/lovable-uploads/df2bc432-bb84-42ff-a81b-74019da44bec.png",
      highlight: "Claims Specialists",
      link: "/insurance"
    },
    {
      title: "Modular Homes",
      subtitle: "Smarter. Faster.",
      description: "Custom modular home solutions designed to save time, control costs, and deliver exceptional quality. Factory-built precision meets New England living.",
      image: "/lovable-uploads/6e8b79f0-0777-40e2-993f-a22a0d57d440.png",
      highlight: "Custom Designs",
      link: "/modular"
    }
  ];

  const handleServiceClick = (link: string) => {
    navigate(link);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
      <div className="absolute top-16 sm:top-32 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 section-animate">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 sm:mb-6">
            Our <span className="text-gradient-coral">Services</span>
          </h2>
          <div className="h-1 w-20 sm:w-32 bg-coral mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Three specialized services that transform your property vision into reality. 
            Each solution crafted with expertise, precision, and dedication to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="section-animate group hover-lift border-0 shadow-2xl overflow-hidden bg-white/90 backdrop-blur cursor-pointer" 
              style={{animationDelay: `${index * 0.2}s`}}
              onClick={() => handleServiceClick(service.link)}
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-coral text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  {service.highlight}
                </div>
              </div>
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="font-playfair text-xl sm:text-2xl text-navy mb-2">{service.title}</CardTitle>
                <div className="text-coral font-medium text-xs sm:text-sm tracking-wide uppercase">{service.subtitle}</div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 section-animate">
          <div className="inline-block bg-gradient-to-r from-coral/10 to-navy/10 p-6 sm:p-8 rounded-3xl">
            <p className="text-base sm:text-lg text-navy mb-4 font-light">
              Ready to begin your construction journey?
            </p>
            <div className="text-coral font-semibold text-lg sm:text-xl italic">
              "Every masterpiece starts with a single conversation."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
