
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Beacon Hill Estate",
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Cambridge Mansion",
      location: "Cambridge, MA",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Newton Contemporary",
      location: "Newton, MA",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Brookline Classic",
      location: "Brookline, MA",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Wellesley Manor",
      location: "Wellesley, MA",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Lexington Estate",
      location: "Lexington, MA",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-animate">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated selection of our finest custom homes and renovations across Greater Boston.
          </p>
        </div>
        
        {/* Masonry Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`section-animate relative overflow-hidden rounded-lg shadow-lg hover-lift cursor-pointer ${
                index % 3 === 1 ? 'md:mt-8' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center section-animate">
          <Button 
            size="lg"
            className="bg-navy hover:bg-navy-600 text-white font-semibold px-8 py-4"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
