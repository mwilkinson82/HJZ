import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! Hayley will personally review your inquiry and respond within 24 hours.");
    setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', details: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/60 to-gold/10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 section-animate">
            <h2 className="font-playfair text-5xl font-bold text-white mb-6">
              Let's Create Your <span className="text-coral">Legacy</span>
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Every extraordinary home begins with an extraordinary conversation. Share your vision, and let's explore how we can bring your dreams to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 section-animate">
              <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="font-playfair text-2xl text-navy">Connect with Hayley</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden border-2 border-gold">
                      <img 
                        src=src="public/lovable-uploads/7c13fd02-73be-4e92-829e-196ff31f429a.png"
                        alt="Hayley Zeoli"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-navy text-lg">Hayley Zeoli</h3>
                    <p className="text-gray-600 text-sm">Founder & Master Builder</p>
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <div>
                      <div className="font-medium text-navy">Direct Line</div>
                      <div className="text-gray-600">(617) 555-0123</div>
                    </div>
                    <div>
                      <div className="font-medium text-navy">Email</div>
                      <div className="text-gray-600">hayley@hjzmanagement.com</div>
                    </div>
                    <div>
                      <div className="font-medium text-navy">Service Area</div>
                      <div className="text-gray-600">Greater Boston & MetroWest</div>
                    </div>
                  </div>
                  
                  <div className="bg-gold/10 p-3 rounded-lg text-center">
                    <p className="text-sm text-navy font-light italic">
                      "I personally review every inquiry and respond within 24 hours."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-2 section-animate">
              <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="font-playfair text-3xl text-navy">Start Your Journey</CardTitle>
                  <p className="text-gray-600">Tell us about your vision—every detail matters.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="(617) 555-0123"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                        >
                          <option value="">Select project type</option>
                          <option value="new-construction">New Custom Home</option>
                          <option value="renovation">Luxury Renovation</option>
                          <option value="addition">Home Addition</option>
                          <option value="historic-restoration">Historic Restoration</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Investment Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      >
                        <option value="">Select investment range</option>
                        <option value="1-2m">$1M - $2M</option>
                        <option value="2-4m">$2M - $4M</option>
                        <option value="4-6m">$4M - $6M</option>
                        <option value="6m+">$6M+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                        Tell Us About Your Vision *
                      </label>
                      <Textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full"
                        placeholder="Describe your dream home, timeline, must-haves, and any specific requirements..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-coral hover:bg-coral/90 text-white font-semibold py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Begin Our Conversation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
