
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="section-animate">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="HJZ Management Founder"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-medium">Woman-Owned</div>
                  <div className="text-xs">Business</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="section-animate">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
              Crafting Dreams Into Reality
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For over two decades, HJZ Management has been the trusted name among Boston's most discerning homeowners. As a woman-owned business, we bring a unique perspective to luxury custom home construction, combining meticulous attention to detail with innovative design solutions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our commitment extends beyond exceptional craftsmanship—we believe in creating lasting relationships with our clients, understanding that your home is a reflection of your values, aspirations, and lifestyle.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-gold mb-2">20+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-gold mb-2">100+</div>
                <div className="text-sm text-gray-600">Luxury Homes</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
