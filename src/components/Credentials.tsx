import React from 'react';

const Credentials = () => {
  const credentials = [
    {
      number: "15+",
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
    <section className="py-16 sm:py-20 bg-gradient-to-r from-coral/5 via-white to-coral/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-navy/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-coral/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 section-animate">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-3 sm:mb-4">
            Built on <span className="text-coral">Excellence</span>
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-coral mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            15+ years of crafting dreams into reality across Greater Boston's most exclusive neighborhoods.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {credentials.map((item, index) => (
            <div 
              key={index} 
              className="text-center section-animate group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-coral/10 hover:scale-105">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-1 sm:mb-2 font-playfair group-hover:text-coral transition-colors duration-300">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-700 mb-1">
                  {item.text}
                </div>
                <div className="text-xs text-gray-500 font-light">
                  {item.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Certifications Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white via-white to-yellow-50/30 p-6 sm:p-8 rounded-xl shadow-xl border-2 border-yellow-400/40 text-center section-animate transform hover:scale-105 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
              style={{animationDelay: `${(index + 4) * 0.1}s`}}
            >
              {/* Premium Gold Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600"></div>
              
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-coral/20 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border-2 border-yellow-400/30 shadow-lg">
                <img 
                  src="/lovable-uploads/a137f41e-2944-4ea7-94de-bcbb26cae258.png" 
                  alt="HJZ Construction Logo" 
                  className="w-8 sm:w-10 h-8 sm:h-10"
                />
              </div>
              <h3 className="font-semibold text-navy mb-2 sm:mb-3 text-base sm:text-lg font-playfair">{cert.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{cert.description}</p>
              
              {/* Premium Badge Corner */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center section-animate">
          <div className="inline-block bg-navy/5 p-4 sm:p-6 rounded-xl">
            <p className="text-navy font-light text-base sm:text-lg italic">
              "Excellence isn't just our standard—it's our promise to every family we serve."
            </p>
            <div className="text-coral font-semibold mt-2 text-sm sm:text-base">— Hayley Zeoli, HJZ Construction Inc.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
