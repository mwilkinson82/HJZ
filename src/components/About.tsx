
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Hayley's Image with Premium Styling */}
          <div className="section-animate relative">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/HJZ/lovable-uploads/7c13fd02-73be-4e92-829e-196ff31f429a.png"
                  alt="Hayley Zeoli - Founder & Master Builder"
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-coral/20">
                <div className="text-center">
                  <div className="text-coral text-2xl font-bold">20+</div>
                  <div className="text-navy text-sm font-medium">Years Mastery</div>
                </div>
              </div>
              
              {/* Premium Woman-Owned Badge */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-coral to-coral-600 text-white px-6 py-3 rounded-full shadow-xl transform -rotate-3 border-2 border-yellow-400/30">
                <div className="text-center">
                  <div className="text-sm font-bold drop-shadow">Woman-Owned</div>
                  <div className="text-xs opacity-90 drop-shadow">& Proud</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content with Personality */}
          <div className="section-animate space-y-8">
            <div>
              <h2 className="font-playfair text-6xl font-bold text-navy mb-4 leading-tight">
                <span className="font-mono text-2xl tracking-[0.3em] transform inline-block text-gray-400 uppercase relative border-2 border-dashed border-gray-300 px-4 py-2 bg-blue-50/30" 
                      style={{ 
                        fontFamily: 'Courier New, monospace',
                        letterSpacing: '0.15em',
                        transform: 'rotate(-1deg)',
                        textShadow: '1px 1px 0px rgba(0,0,0,0.1)'
                      }}>
                  Meet
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-gray-400 bg-white"></div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 border border-gray-400 bg-white"></div>
                </span>
                <span className="text-gradient-coral block">Hayley Zeoli</span>
              </h2>
              <div className="text-coral text-xl font-medium mb-6 font-playfair">
                Master Designer & Builder, CEO
              </div>
              <div className="h-1 w-24 bg-coral rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-700">
                <span className="text-coral font-semibold text-xl">"Every home has a soul waiting to be discovered."</span>
              </p>
              
              <p className="text-gray-700">
                For the past twenty years, I've been the trusted confidante of New England's most discerning families, 
                transforming their deepest aspirations into architectural poetry. As a woman in a traditionally 
                male-dominated field, I bring an intuitive understanding of how families truly live, love, and create memories.
              </p>
              
              <p className="text-gray-700">
                My approach isn't just about building houses—it's about crafting legacies. Each project begins 
                with understanding your story, your dreams, your vision of the perfect life. Then, through meticulous 
                craftsmanship and innovative design, we bring that vision to life in ways that exceed even your wildest expectations.
              </p>
            </div>
            
            {/* Signature Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <Card className="p-6 text-center hover-lift bg-white/80 backdrop-blur border-coral/20">
                <div className="text-3xl font-bold text-coral mb-2 font-playfair">$50M+</div>
                <div className="text-sm text-gray-600 font-medium">Dreams Built</div>
              </Card>
              <Card className="p-6 text-center hover-lift bg-white/80 backdrop-blur border-coral/20">
                <div className="text-3xl font-bold text-coral mb-2 font-playfair">100+</div>
                <div className="text-sm text-gray-600 font-medium">Luxury Estates</div>
              </Card>
              <Card className="p-6 text-center hover-lift bg-white/80 backdrop-blur border-coral/20">
                <div className="text-3xl font-bold text-coral mb-2 font-playfair">5★</div>
                <div className="text-sm text-gray-600 font-medium">Client Rating</div>
              </Card>
            </div>
            
            {/* Personal Touch Quote */}
            <div className="bg-navy/5 p-8 rounded-2xl border-l-4 border-coral">
              <p className="text-navy italic text-lg font-light">
                "When you choose HJZ Construction, you're not just hiring a builder—you're partnering with 
                someone who will guard your vision as fiercely as their own reputation."
              </p>
              <div className="mt-4 text-coral font-semibold">— Hayley Zeoli</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
