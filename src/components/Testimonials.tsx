
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "HJZ Management transformed our vision into a masterpiece that exceeded every expectation. Their attention to detail and commitment to excellence is unparalleled.",
      client: "Sarah & Michael Chen",
      project: "Custom Estate, Newton",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "Working with a woman-owned business that truly understands luxury living made all the difference. Every detail was handled with care and precision.",
      client: "Jennifer & Robert Williams",
      project: "Historic Renovation, Beacon Hill",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The team's prof‌essionalism and craftsmanship are evident in every corner of our home. They delivered luxury without compromise.",
      client: "David & Lisa Morrison",
      project: "Modern Build, Cambridge",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-animate">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from homeowners who have experienced the HJZ Management difference.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-4 gap-8 items-center">
                <div className="md:col-span-1">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].project}
                    className="w-24 h-24 rounded-full mx-auto shadow-lg"
                  />
                </div>
                <div className="md:col-span-3 text-center md:text-left">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-navy text-lg">{testimonials[currentIndex].client}</div>
                    <div className="text-gold text-sm">{testimonials[currentIndex].project}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
