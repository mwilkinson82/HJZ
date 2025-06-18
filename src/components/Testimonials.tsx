
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Hayley transformed our century-old Beacon Hill brownstone into a masterpiece that honors its history while embracing our family's future. Her attention to every detail shows she truly understands how families live.",
      client: "Sarah & Michael Chen",
      project: "Historic Renovation, Beacon Hill",
      value: "$2.8M",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "Working with a woman who understands luxury living made all the difference. Hayley didn't just build us a house—she created a sanctuary where we host dinner parties, raise our children, and find peace.",
      client: "Jennifer & Robert Williams", 
      project: "Custom Estate, Newton",
      value: "$4.2M",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The craftsmanship is evident in every detail, but what sets Hayley apart is her intuition for how a family actually lives. She anticipated needs we didn't even know we had.",
      client: "David & Lisa Morrison",
      project: "Modern Build, Cambridge",
      value: "$3.6M", 
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-16 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 section-animate">
          <h2 className="font-playfair text-5xl font-bold mb-6">
            Stories of <span className="text-gold">Home</span>
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Behind every custom home is a family with dreams. Here's what they're saying about their journey with Hayley.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2 text-center">
                  <div className="relative inline-block">
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].project}
                      className="w-24 h-24 rounded-full mx-auto shadow-xl object-cover"
                    />
                    <div className="absolute -top-1 -right-1 bg-gold text-navy px-2 py-1 rounded-full text-xs font-bold">
                      {testimonials[currentIndex].value}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold text-navy text-lg mb-1">
                      {testimonials[currentIndex].client}
                    </div>
                    <div className="text-gold text-sm font-medium">
                      {testimonials[currentIndex].project}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-gold text-5xl font-playfair mb-3">"</div>
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic">
                    {testimonials[currentIndex].quote}
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0 border-2 border-gold/30 text-gold hover:bg-gold hover:text-navy transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0 border-2 border-gold/30 text-gold hover:bg-gold hover:text-navy transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold scale-125' : 'bg-white/30 hover:bg-white/50'
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
