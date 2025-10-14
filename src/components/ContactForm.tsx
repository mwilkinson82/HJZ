import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object for proper Formspree submission
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('projectType', formData.projectType);
      form.append('budget', formData.budget);
      form.append('details', formData.details);

      const response = await fetch('https://formspree.io/f/xdkzlkwq', {
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Thank you for reaching out! Hayley will personally review your inquiry and respond within 24 hours.");
        setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', details: '' });
      } else {
        toast.error("There was an issue sending your message. Please try again or call Hayley directly at (617) 680-6716.");
      }
    } catch (error) {
      toast.error("There was an issue sending your message. Please try again or call Hayley directly at (617) 680-6716.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="font-playfair text-2xl sm:text-3xl text-navy">Start Your Journey</CardTitle>
        <p className="text-gray-600 text-sm sm:text-base">Tell us about your vision—every detail matters.</p>
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
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base"
            >
              <option value="">Select investment range</option>
              <option value="100k-500k">$100K - $500K</option>
              <option value="500k-1m">$500K - $1M</option>
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
              className="w-full text-sm sm:text-base"
              placeholder="Describe your dream home, timeline, must-haves, and any specific requirements..."
            />
          </div>
          
          <Button 
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-coral hover:bg-coral/90 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? 'Sending...' : 'Begin Our Conversation'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
