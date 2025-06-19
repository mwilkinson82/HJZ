
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Insurance = () => {
  const steps = [
    {
      number: "01",
      title: "ASSESSMENT AND INSPECTION",
      content: `HJZ Construction begins by planning a site inspection as soon as you contact us. Our Project Manager can then gather all the relevant information during the visit to create your reconstruction plans. We meticulously assess every detail of your renovation project; from providing necessary measurements to ensuring the quality & quantity of building materials, identifying code upgrades and anticipating any potential issues ahead of time - all to minimize complications during reconstruction.

Granting us permission to work directly with your insurance company can speed up the entire rebuilding process. With your permission, we'll create a reconstruction plan that specifies all the damage to your house down to the very last detail. That way you can rest assured that everything is accounted for and taken care of in a timely manner.`
    },
    {
      number: "02", 
      title: "RECONSTRUCTION PLAN",
      content: `Our decades of experience in the construction and insurance claims sector enable us to assess and articulate your damage details like no other contractor. This comprehensive representation is key for your claim's success. We strive to keep our initial plan as comprehensive as possible so that we can avoid having to seek additional fees from the insurer, thus expediting the rebuilding process.

We can have a comprehensive reconstruction plan tailored to your needs, ready within the first 1-2 days of our visit - even for complex projects, this can take up to 7 days. Our extensive experience in this field gives us the confidence to be able to provide you with a detailed strategy that works.`
    },
    {
      number: "03",
      title: "SUBMISSION TO THE INSURANCE COMPANY", 
      content: `After we complete our plan, we forward it to your insurance adjuster for their assessment. We collaborate with the adjuster to make sure that all of the proposed projects are satisfactory. There may be times where several iterations and clarifications are needed in order for them to understand the project requirements. We strive to effectively convert this information into a format that is easily comprehendible. Once a consensus has been reached concerning the scope of the job, we'll confer with you to commence with repairs.`
    },
    {
      number: "04",
      title: "STEADY COMMUNICATION THROUGHOUT THE PROCESS",
      content: `We continually monitor the progress of our projects and projected material delivery dates. We keep our clients and the insurance companies informed on a daily basis until the project is 100% completed by utilizing structured reports of progress, complete with photos of each phase. We understand the importance of complete documentation requirements while working with insurance companies to ensure coverage of the work and for a more streamlined process.`
    },
    {
      number: "05", 
      title: "PROJECT IS COMPLETE",
      content: `Following the project scope review and final walkthrough, we forward our invoice, any payment deposits/installments and photos to both you & the insurance agency. When dealing with property damage claims, insurers often retain a portion of the funds until the repairs are done and all invoices from the contractor have been provided - this is commonly known as "recoverable depreciation" or simply, the "holdback". After verifying that the repairs are done and you've paid your deductible and the first installment, the insurance company will release the remaining balance they owe you. We offer a 100% satisfaction guarantee and a comprehensive 1 year warranty.`
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy/95 to-coral/20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500">
              Insurance Claims
            </h1>
            <div className="text-2xl md:text-3xl font-light mb-8 text-coral animate-fade-in">
              Expert Restoration Services
            </div>
            <p className="text-xl mb-12 text-gray-200 hover:text-white transition-colors duration-300">
              Navigate the insurance process with confidence
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-300 hover:text-gray-100 transition-colors duration-300">
              Our experienced team works directly with your insurance company to ensure 
              comprehensive coverage and seamless restoration of your property.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4 hover:scale-105 transition-transform duration-500">
              From Damage to Dream
            </h2>
            <div className="h-1 w-32 bg-coral mx-auto rounded-full mb-6 hover:w-40 transition-all duration-500"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how we transform damaged properties into beautiful, functional spaces through our comprehensive insurance claim process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Before Image */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105">
              <img 
                src="/HJZ/lovable-uploads/89ea6360-60b9-4667-bb3f-f9a3ed3ce617.png"
                alt="Property damage requiring insurance claim restoration"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-coral backdrop-blur-sm p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">The Challenge</h3>
                  <p className="text-white text-sm">Water damage requiring comprehensive restoration and insurance coordination.</p>
                </div>
              </div>
            </div>
            
            {/* After Image */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105">
              <img 
                src="/HJZ/lovable-uploads/89e28b0b-1a9e-4c65-a6aa-90f61831e24d.png"
                alt="Beautifully restored kitchen after insurance claim completion"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-coral backdrop-blur-sm p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">The Result</h3>
                  <p className="text-white text-sm">A stunning modern kitchen that exceeds the original, fully covered by insurance.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <span className="text-coral font-semibold">Before</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-coral rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-coral/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-coral/40 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span className="text-navy font-semibold">After</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4 hover:scale-105 transition-transform duration-500">
              HJZ Experts of the Insurance Process
            </h2>
            <div className="h-1 w-24 bg-coral mx-auto rounded-full hover:w-32 transition-all duration-500"></div>
          </div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl shadow-lg border border-coral/10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <div className="w-20 h-20 bg-coral text-white rounded-full flex items-center justify-center text-2xl font-bold hover:bg-coral/90 hover:scale-110 transition-all duration-500 group-hover:rotate-6 shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-2xl font-bold text-navy mb-4 hover:text-coral transition-colors duration-300">
                      {step.title}
                    </h3>
                    <div className="text-gray-700 leading-relaxed space-y-4 group-hover:text-gray-800 transition-colors duration-300">
                      {step.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="hover:translate-x-2 transition-transform duration-300">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insurance;
