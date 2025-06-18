import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Beacon Hill Estate",
      location: "Boston, MA",
      description: "Historic charm meets modern luxury",
      value: "$4.2M",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Cambridge Sanctuary",
      location: "Cambridge, MA", 
      description: "Contemporary masterpiece with soul",
      value: "$3.8M",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Newton Dream Estate",
      location: "Newton, MA",
      description: "Where family memories are crafted",
      value: "$5.1M", 
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Brookline Heritage Home",
      location: "Brookline, MA",
      description: "Preserving legacy, embracing future",
      value: "$3.5M",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Wellesley Manor",
      location: "Wellesley, MA",
      description: "Timeless elegance redefined",
      value: "$6.2M",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Lexington Luxury Retreat",
      location: "Lexington, MA",
      description: "Nature's embrace, architect's vision",
      value: "$4.7M",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 section-animate">
          <h2 className="font-playfair text-5xl font-bold text-navy mb-6">
            Dream <span className="text-coral">Portfolios</span>
          </h2>
          <div className="h-1 w-24 bg-coral mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each home tells a story. Here are some of our favorite chapters—multi-million dollar 
            sanctuaries where New England families have chosen to build their legacies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`section-animate relative group cursor-pointer ${
                index % 3 === 1 ? 'md:mt-8' : index % 3 === 2 ? 'md:mt-4' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transform transition-all duration-300 ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  <div className="bg-coral text-navy px-2 py-1 rounded text-xs font-bold mb-2 inline-block">
                    {project.value}
                  </div>
                  <h3 className="font-playfair text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-1">{project.location}</p>
                  <p className="text-xs font-light italic">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center section-animate">
          <div className="inline-block bg-gradient-to-r from-coral/5 to-navy/5 p-8 rounded-2xl mb-6">
            <p className="text-navy text-lg font-light mb-4 max-w-2xl">
              These homes represent more than construction—they're the foundation of family stories.
            </p>
            <div className="text-coral font-semibold text-lg italic font-playfair mb-6">
              "Ready to see your vision become reality?"
            </div>
            <Button 
              size="lg"
              className="bg-navy hover:bg-navy/90 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
