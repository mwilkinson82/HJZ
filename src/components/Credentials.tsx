
import React from 'react';

const Credentials = () => {
  const credentials = [
    {
      number: "20+",
      text: "Years Mastering",
      subtext: "New England Construction"
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

  const certifications = [
    {
      title: "Certified Woman-Owned Business",
      description: "Proudly certified and committed to excellence in construction"
    },
    {
      title: "Project Management Professional (PMP)",
      description: "Expert project management ensuring on-time, on-budget delivery"
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed contractor with comprehensive insurance coverage"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-coral/5 via-white to-coral/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-navy/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-coral/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 section-animate">
          <h2 className="font-playfair text-5xl font-bold text-navy mb-4">
            Built on <span className="text-coral">Excellence</span>
          </h2>
          <div className="h-1 w-24 bg-coral mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Two decades of crafting dreams into reality across Greater Boston's most exclusive neighborhoods.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {credentials.map((item, index) => (
            <div 
              key={index} 
              className="text-center section-animate group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-coral/10 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-navy mb-2 font-playfair group-hover:text-coral transition-colors duration-300">
                  {item.number}
                </div>
                <div className="text-sm md:text-base font-semibold text-gray-700 mb-1">
                  {item.text}
                </div>
                <div className="text-xs text-gray-500 font-light">
                  {item.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-coral/10 text-center section-animate"
              style={{animationDelay: `${(index + 4) * 0.1}s`}}
            >
              <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/lovable-uploads/a137f41e-2944-4ea7-94de-bcbb26cae258.png" 
                  alt="HJZ Construction Logo" 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-semibold text-navy mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center section-animate">
          <div className="inline-block bg-navy/5 p-6 rounded-xl">
            <p className="text-navy font-light text-lg italic">
              "Excellence isn't just our standard—it's our promise to every family we serve."
            </p>
            <div className="text-coral font-semibold mt-2">— Hayley Zeoli, HJZ Construction Inc.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
