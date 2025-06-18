
import React from 'react';

const Credentials = () => {
  const credentials = [
    {
      number: "20+",
      text: "Years Craftsmanship"
    },
    {
      number: "100+",
      text: "Luxury Homes Delivered"
    },
    {
      number: "Award",
      text: "Winning Designs"
    },
    {
      number: "Licensed",
      text: "& Fully Insured"
    }
  ];

  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((item, index) => (
            <div key={index} className="text-center section-animate" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2 font-playfair">
                {item.number}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
