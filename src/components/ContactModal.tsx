
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ 
  isOpen, 
  onClose, 
  title = "Start Your Journey",
  description = "Tell us about your vision—every detail matters."
}) => {
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
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="font-playfair text-2xl sm:text-3xl text-navy">{title}</DialogTitle>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <Input
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <Input
                id="modal-email"
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
              <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                id="modal-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full"
                placeholder="(617) 555-0123"
              />
            </div>
            <div>
              <label htmlFor="modal-projectType" className="block text-sm font-medium text-gray-700 mb-1">
                Project Type *
              </label>
              <select
                id="modal-projectType"
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
                <option value="adu">ADU/Accessory Dwelling Unit</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="modal-budget" className="block text-sm font-medium text-gray-700 mb-1">
              Investment Range
            </label>
            <select
              id="modal-budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base"
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
            <label htmlFor="modal-details" className="block text-sm font-medium text-gray-700 mb-1">
              Tell Us About Your Vision *
            </label>
            <Textarea
              id="modal-details"
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
            className="w-full bg-coral hover:bg-coral/90 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Begin Our Conversation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
