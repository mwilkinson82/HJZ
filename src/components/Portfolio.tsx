
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
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Cambridge Sanctuary",
      location: "Cambridge, MA", 
      description: "Contemporary masterpiece with soul",
      value: "$3.8M",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Newton Dream Estate",
      location: "Newton, MA",
      description: "Where family memories are crafted",
      value: "$5.1M", 
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Brookline Heritage Home",
      location: "Brookline, MA",
      description: "Preserving legacy, embracing future",
      value: "$3.5M",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Wellesley Manor",
      location: "Wellesley, MA",
      description: "Timeless elegance redefined",
      value: "$6.2M",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
    <section id="portfolio" className="py-32 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 section-animate">
          <h2 className="font-playfair text-6xl font-bold text-navy mb-6">
            Dream <span className="text-gradient-gold">Portfolios</span>
          </h2>
          <div className="h-1 w-32 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Each home tells a story. Here are some of our favorite chapters—multi-million dollar 
            sanctuaries where New England families have chosen to build their legacies.
          </p>
        </div>
        
        {/* Masonry Grid with Premium Styling */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`section-animate relative group cursor-pointer ${
                index % 3 === 1 ? 'md:mt-12' : index % 3 === 2 ? 'md:mt-6' : ''
              }`}
              style={{animationDelay: `${index * 0.15}s`}}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift bg-white">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Info */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div className="bg-gold text-navy px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                    {project.value}
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{project.location}</p>
                  <p className="text-sm font-light italic">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action with Personality */}
        <div className="text-center section-animate">
          <div className="inline-block bg-gradient-to-r from-navy/5 to-gold/5 p-12 rounded-3xl mb-8">
            <p className="text-navy text-lg font-light mb-6 max-w-2xl">
              These homes represent more than construction—they're the foundation of family stories, 
              celebrations, and quiet moments that matter most.
            </p>
            <div className="text-gold font-semibold text-xl italic font-playfair mb-8">
              "Ready to see your vision become reality?"
            </div>
            <Button 
              size="lg"
              className="bg-navy hover:bg-navy-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-navy/25 transition-all duration-500 hover:scale-105"
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
