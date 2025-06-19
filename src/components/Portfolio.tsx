
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const projects = [
    "/HJZ/lovable-uploads/b78d37cb-af1c-448a-b894-d009288e9094.png",
    "/HJZ/lovable-uploads/1d488505-e6c3-4c7e-a611-c8e7512fdc83.png", 
    "/HJZ/lovable-uploads/91feba13-e2cc-4db2-a9ec-00666c8161c8.png",
    "/HJZ/lovable-uploads/df2bc432-bb84-42ff-a81b-74019da44bec.png",
    "/HJZ/lovable-uploads/2ef3245d-28ef-4a2e-88c2-a722d99a1381.png",
    "/HJZ/lovable-uploads/21fd4a4e-f031-4029-9dc5-c7839afc8b32.png",
    "/HJZ/lovable-uploads/2c421101-d6a9-48a9-8068-3c6cff9e7340.png",
    "/HJZ/lovable-uploads/2ec45492-974b-4f84-954d-1bf6d6ce566d.png",
    "/HJZ/lovable-uploads/21025a41-6a90-4047-b533-c1af8d850ecf.png",
    "/HJZ/lovable-uploads/aafb29c2-abf7-4529-8056-52b100904a3d.png",
    "/HJZ/lovable-uploads/6e8b79f0-0777-40e2-993f-a22a0d57d440.png",
    "/HJZ/lovable-uploads/29347f05-ef4e-496c-b73d-dfe9c1c72011.png",
    "/HJZ/lovable-uploads/55e1b8cd-a46f-4127-a028-2d128565dbbf.png",
    "/HJZ/lovable-uploads/928ccc09-cea3-4331-8cfe-0043a87c9b5f.png",
    "/HJZ/lovable-uploads/c6a83e88-8e6a-4c4c-9553-ed1505094acb.png",
    "/HJZ/lovable-uploads/dcc5338f-96b1-4662-ab74-1399dd66baa5.png",
    "/HJZ/lovable-uploads/f0f4bbc3-928c-46f9-b7b8-93ca3f749952.png",
    "/HJZ/lovable-uploads/7c13fd02-73be-4e92-829e-196ff31f429a.png",
    "/HJZ/lovable-uploads/89e28b0b-1a9e-4c65-a6aa-90f61831e24d.png",
    "/HJZ/lovable-uploads/89ea6360-60b9-4667-bb3f-f9a3ed3ce617.png",
    "/HJZ/lovable-uploads/92d1bb29-9817-4f2c-bf06-9516ae063485.png",
    "/HJZ/lovable-uploads/a137f41e-2944-4ea7-94de-bcbb26cae258.png"
  ];

  const openModal = () => {
    setSelectedImage("modal");
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 section-animate">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
            Our <span className="text-coral">Portfolio</span>
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-coral mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Each project represents our commitment to excellence. From custom homes to renovations, 
            insurance claims to ADUs—see the craftsmanship that defines HJZ Construction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {projects.slice(0, 9).map((image, index) => (
            <div 
              key={index}
              className={`section-animate relative group cursor-pointer ${
                index % 3 === 1 ? 'lg:mt-8' : index % 3 === 2 ? 'lg:mt-4' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                <img 
                  src={image}
                  alt={`HJZ Construction Project ${index + 1}`}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Last row with 2 centered images */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
          {projects.slice(9, 11).map((image, index) => (
            <div 
              key={index + 9}
              className="section-animate relative group cursor-pointer w-full max-w-sm mx-auto"
              style={{animationDelay: `${(index + 9) * 0.1}s`}}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                <img 
                  src={image}
                  alt={`HJZ Construction Project ${index + 10}`}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center section-animate">
          <div className="inline-block bg-gradient-to-r from-coral/5 to-navy/5 p-6 sm:p-8 rounded-2xl mb-6">
            <p className="text-navy text-base sm:text-lg font-light mb-4 max-w-2xl px-4">
              These projects represent more than construction—they're the foundation of family stories.
            </p>
            <div className="text-coral font-semibold text-lg font-playfair mb-6">
              "Ready to see your vision become reality?"
            </div>
            <Button 
              size="lg"
              onClick={openModal}
              className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Simple Modal for Portfolio */}
      {selectedImage && selectedImage !== "modal" && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img 
              src={selectedImage}
              alt="Portfolio Item"
              className="w-full h-full object-contain rounded-lg"
            />
            <button 
              onClick={closeModal}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors text-lg sm:text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Full Portfolio Modal */}
      {selectedImage === "modal" && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full bg-white rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-navy">
                  <span className="text-coral">HJZ</span> Portfolio
                </h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-xl sm:text-2xl"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-h-[60vh] overflow-y-auto">
                {projects.map((image, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <img 
                      src={image}
                      alt={`Portfolio Item ${index + 1}`}
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedImage(image)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
