
import React from 'react';

const Credentials = () => {
  const credentials = [
    {
      number: "20+",
      text: "Years Mastering",
      subtext: "New England Luxury"
    },
    {
      number: "$50M+",
      text: "Dreams Built",
      subtext: "Legacy Projects"
    },
    {
      number: "100+",
      text: "Families Served",
      subtext: "Stories Created"
    },
    {
      number: "Licensed",
      text: "& Fully Insured",
      subtext: "Woman-Owned Business"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gold/10 via-white to-gold/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-navy/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 section-animate">
          <h2 className="font-playfair text-5xl font-bold text-navy mb-4">
            Built on <span className="text-gradient-gold">Excellence</span>
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Two decades of crafting dreams into reality across Greater Boston's most exclusive neighborhoods.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {credentials.map((item, index) => (
            <div 
              key={index} 
              className="text-center section-animate group hover-lift"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gold/10">
                <div className="text-4xl md:text-5xl font-bold text-navy mb-3 font-playfair group-hover:text-gold transition-colors duration-300">
                  {item.number}
                </div>
                <div className="text-base md:text-lg font-semibold text-gray-700 mb-2">
                  {item.text}
                </div>
                <div className="text-sm text-gray-500 font-light">
                  {item.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Personal Touch */}
        <div className="text-center mt-16 section-animate">
          <div className="inline-block bg-navy/5 p-8 rounded-2xl">
            <p className="text-navy font-light text-lg italic">
              "Excellence isn't just our standard—it's our promise to every family we serve."
            </p>
            <div className="text-gold font-semibold mt-3">— Hayley Zeoli</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
