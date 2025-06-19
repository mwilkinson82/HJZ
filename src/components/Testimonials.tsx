
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const googleReviews = [
    {
      name: "Courtney Drake",
      text: "We loved working with HJZ Construction on our kitchen and bathroom renovation. Hayley's communication and project management was exceptional. She made the process stress-free. We finished the project a month ahead of schedule and on budget.",
      rating: 5,
      date: "a month ago",
      initials: "CD"
    },
    {
      name: "Laura Goodbody",
      text: "Hayley and her team are a true pleasure to work with. The attention to detail, communication with clients, and true care Hayley puts into her projects is outstanding. She helped us create a bathroom of our dreams!",
      rating: 5,
      date: "a month ago",
      initials: "LG"
    },
    {
      name: "Mercedes Lopez",
      text: "The quality of the finished renovation is excellent. Also excellent were the timelines of completion, the care put in incorporating the details of our vision, and the continuous flow in communicating updates. I highly recommend HJZ Construction.",
      rating: 5,
      date: "a month ago",
      initials: "ML"
    },
    {
      name: "Leonard DiPietro",
      text: "Hayley was incredible. She was understanding of my situation, responsive to my questions and requests and her company was great in refurbing my damaged condo. I highly recommend them. I couldn't be happier with the completed product!",
      rating: 5,
      date: "a month ago",
      initials: "LD"
    },
    {
      name: "Yulieth Ramos",
      text: "We absolutely loved working with HJZ Construction & Management. They did an outstanding job from start to finish! Communication was excellent throughout the entire project, and they consistently showed care and consideration for our building.",
      rating: 5,
      date: "a month ago",
      initials: "YR"
    },
    {
      name: "Sasha Serdiuk-Weles Wood Floors",
      text: "I've been working with Hayley for over 3 years now and can't say nothing but positive experience! Jobs are always well organized, trades are happy and clients are always thrilled by the results of Hayley's attention to details and communication!",
      rating: 5,
      date: "8 months ago",
      initials: "SS"
    },
    {
      name: "Brenda Gallagher",
      text: "A year ago, a tornado caused damage to our home. HJZ Construction came the next day and walked us through the process. Hayley was attentive, organized and has a skilled team. Looking back at the work completed we are so proud of the quality of the workmanship.",
      rating: 5,
      date: "8 months ago",
      initials: "BG"
    },
    {
      name: "Lisa O'Rourke",
      text: "I had hired Hayley to help us design and build an ADU. From the very beginning, we knew that we had made the best decision. Her attention to detail and follow up gave us the peace of mind to know that we were going to be 100% satisfied with the end result.",
      rating: 5,
      date: "3 months ago",
      initials: "LO"
    },
    {
      name: "Emily Elliott",
      text: "Hayley and her team were outstanding! I've used them on multiple projects and they are always fast, attentive & professional. I highly recommend this company and will definitely be using them again!",
      rating: 5,
      date: "2 years ago",
      initials: "EE"
    },
    {
      name: "Chris Sheehan",
      text: "I had this company build out a new 750 sf office in our warehouse. The company was reasonable on pricing, efficient and easy to work with. I would highly recommend!",
      rating: 5,
      date: "2 years ago",
      initials: "CS"
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
    <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-coral/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 section-animate">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
            What Our <span className="text-coral">Clients</span> Say
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-coral mx-auto mb-4 sm:mb-6 rounded-full"></div>
          
          {/* Enhanced Google Rating Display with Badge */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 border border-gray-100">
              {/* Google Logo and Badge */}
              <div className="flex items-center space-x-3">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  G
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">5.0</div>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700">Google Reviews</div>
                </div>
              </div>
              
              <div className="h-px w-16 sm:h-16 sm:w-px bg-gray-200"></div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="w-4 sm:w-5 h-4 sm:h-5 text-coral" />
                  <span className="text-base sm:text-lg font-semibold text-navy">10 Happy Clients</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleReviewClick}
                  className="text-coral border-coral hover:bg-coral hover:text-white transition-all duration-300 text-sm"
                >
                  View All Reviews <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 section-animate">
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-4xl sm:text-6xl text-coral/20 font-playfair">"</div>
            
            <div className="relative z-10">
              {/* Profile Initials and Rating */}
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-coral to-coral/80 flex items-center justify-center text-white text-lg sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
                  {googleReviews[currentTestimonial].initials}
                </div>
                <div className="flex space-x-1">
                  {[...Array(googleReviews[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center italic px-2">
                {googleReviews[currentTestimonial].text}
              </p>
              
              <div className="text-center">
                <h4 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-navy mb-1">
                  {googleReviews[currentTestimonial].name}
                </h4>
                <p className="text-coral font-medium text-sm sm:text-base">{googleReviews[currentTestimonial].date}</p>
                <div className="mt-2 text-xs sm:text-sm text-gray-500">Verified Google Customer</div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {googleReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-coral scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Leave a Review Call-to-Action */}
        <div className="text-center mt-12 sm:mt-16 section-animate">
          <div className="bg-gradient-to-r from-navy/5 to-coral/5 rounded-2xl p-6 sm:p-8 lg:p-10 max-w-3xl mx-auto border border-gray-100 shadow-lg">
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-md mb-3 sm:mb-4">
                <Star className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-700 text-sm sm:text-base">5-Star Experience?</span>
              </div>
            </div>
            
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">
              Share Your <span className="text-coral">HJZ Experience</span>
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed px-2">
              Help others discover the HJZ Construction difference! Your honest review helps our local community 
              find trusted construction professionals and helps us continue delivering exceptional service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button 
                onClick={handleReviewClick}
                className="bg-coral hover:bg-coral/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 w-full sm:w-auto"
              >
                <Star className="w-4 sm:w-5 h-4 sm:h-5 fill-white" />
                <span>Leave a 5-Star Review</span>
                <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
              </Button>
              
              <div className="text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1">
                <span>Takes less than 2 minutes</span>
                <span className="hidden sm:inline">•</span>
                <span>Helps local families</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
