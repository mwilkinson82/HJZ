
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
      image: "/HJZ/lovable-uploads/1d488505-e6c3-4c7e-a611-c8e7512fdc83.png",
      highlight: "Design-Build Experts",
      link: "/adu"
    },
    {
      title: "Insurance Claims",
      subtitle: "Rebuilding Lives, Restoring Homes",
      description: "Decades of experience in construction and insurance claims enable us to assess and articulate damage details like no other contractor. We work directly with your insurance company.",
      image: "/HJZ/lovable-uploads/df2bc432-bb84-42ff-a81b-74019da44bec.png",
      highlight: "Claims Specialists",
      link: "/insurance"
    },
    {
      title: "Modular Homes",
      subtitle: "Smarter. Faster.",
      description: "Custom modular home solutions designed to save time, control costs, and deliver exceptional quality. Factory-built precision meets New England living.",
      image: "/HJZ/lovable-uploads/b78d37cb-af1c-448a-b894-d009288e9094.png",
      highlight: "Custom Designs",
      link: "/modular"
    }
  ];

  const handleServiceClick = (link: string) => {
    navigate(link);
  };

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
      <div className="absolute top-32 right-0 w-72 h-72 bg-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 section-animate">
          <h2 className="font-playfair text-6xl font-bold text-navy mb-6">
            Our <span className="text-gradient-coral">Services</span>
          </h2>
          <div className="h-1 w-32 bg-coral mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Three specialized services that transform your property vision into reality. 
            Each solution crafted with expertise, precision, and dedication to excellence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="section-animate group hover-lift border-0 shadow-2xl overflow-hidden bg-white/90 backdrop-blur cursor-pointer" 
              style={{animationDelay: `${index * 0.2}s`}}
              onClick={() => handleServiceClick(service.link)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-coral text-white px-4 py-2 rounded-full text-sm font-medium">
                  {service.highlight}
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="font-playfair text-2xl text-navy mb-2">{service.title}</CardTitle>
                <div className="text-coral font-medium text-sm tracking-wide uppercase">{service.subtitle}</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-20 section-animate">
          <div className="inline-block bg-gradient-to-r from-coral/10 to-navy/10 p-8 rounded-3xl">
            <p className="text-lg text-navy mb-4 font-light">
              Ready to begin your construction journey?
            </p>
            <div className="text-coral font-semibold text-xl italic">
              "Every masterpiece starts with a single conversation."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
