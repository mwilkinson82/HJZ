
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const googleReviews = [
    {
      name: "Sarah Johnson",
      text: "HJZ Construction exceeded our expectations! They transformed our basement into a beautiful ADU that's now generating rental income. Professional, timely, and incredible attention to detail.",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      text: "After our insurance claim, HJZ rebuilt our kitchen better than it was before. The team was professional, communicated clearly throughout the process, and finished on schedule.",
      rating: 5,
      date: "1 month ago"
    },
    {
      name: "Emily Rodriguez",
      text: "Our custom home build with HJZ was a dream come true. They listened to our vision and delivered beyond what we imagined. Highly recommend for anyone looking for quality craftsmanship!",
      rating: 5,
      date: "2 months ago"
    },
    {
      name: "David Thompson",
      text: "The modular home installation was seamless. HJZ handled everything from permits to final walkthrough. Great communication and quality work throughout the entire project.",
      rating: 5,
      date: "3 months ago"
    },
    {
      name: "Lisa Park",
      text: "HJZ Construction handled our whole house renovation with professionalism and skill. Every detail was perfect, and they stayed within our budget and timeline. Couldn't be happier!",
      rating: 5,
      date: "4 months ago"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % googleReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [googleReviews.length]);

  const handleReviewClick = () => {
    window.open('https://www.google.com/search?client=firefox-b-1-d&sca_esv=c00251c694cd13aa&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ewap0VJlzwvuNdXbJzj0glYomyCPVXYBK0qkiWSpcGhuy2vhInfARBrJIztbOBjQSQRSygHdPtZyDelkBGI2nGXf1fnoAqbX7Z1FtC69uxreWm04RA%3D%3D&q=HJZ+Construction+%26+Management+Reviews&sa=X&ved=2ahUKEwiljNGWlPuNAxWAlIkEHRXAGaAQ0bkNegQIPBAD&biw=1485&bih=731&dpr=1.25', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 section-animate">
          <h2 className="font-playfair text-5xl font-bold text-navy mb-6">
            What Our <span className="text-coral">Clients</span> Say
          </h2>
          <div className="h-1 w-24 bg-coral mx-auto mb-6 rounded-full"></div>
          
          {/* Google Rating Display */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy mb-1">4.9</div>
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">Google Reviews</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-lg font-semibold text-navy">50+ Reviews</div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleReviewClick}
                  className="mt-2 text-coral border-coral hover:bg-coral hover:text-white"
                >
                  View All <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 section-animate">
            <div className="absolute top-6 left-6 text-6xl text-coral/20 font-playfair">"</div>
            
            <div className="relative z-10">
              <div className="flex space-x-1 mb-6 justify-center">
                {[...Array(googleReviews[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
                {googleReviews[currentTestimonial].text}
              </p>
              
              <div className="text-center">
                <h4 className="font-playfair text-2xl font-bold text-navy mb-1">
                  {googleReviews[currentTestimonial].name}
                </h4>
                <p className="text-coral font-medium">{googleReviews[currentTestimonial].date}</p>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {googleReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-coral scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Leave a Review Call-to-Action */}
        <div className="text-center mt-16 section-animate">
          <div className="bg-gradient-to-r from-navy/5 to-coral/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
              Had a Great Experience?
            </h3>
            <p className="text-gray-600 mb-6">
              Help others discover the HJZ Construction difference by sharing your experience on Google.
            </p>
            <Button 
              onClick={handleReviewClick}
              className="bg-coral hover:bg-coral/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Leave a 5-Star Review <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
