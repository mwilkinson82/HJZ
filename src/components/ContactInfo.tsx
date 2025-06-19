
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactInfo = () => {
  return (
    <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="font-playfair text-xl sm:text-2xl text-navy">Connect with Hayley</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        <div className="text-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-3 overflow-hidden border-2 border-gold">
            <img 
              src="/lovable-uploads/7c13fd02-73be-4e92-829e-196ff31f429a.png"
              alt="Hayley Zeoli"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-navy text-base sm:text-lg">Hayley Zeoli</h3>
          <p className="text-gray-600 text-sm">Founder & Master Builder</p>
        </div>
        
        <div className="space-y-3 text-center">
          <div>
            <div className="font-medium text-navy text-sm sm:text-base">Direct Line</div>
            <div className="text-gray-600 text-sm sm:text-base">(617) 680-6716</div>
          </div>
          <div>
            <div className="font-medium text-navy text-sm sm:text-base">Email</div>
            <div className="text-gray-600 text-sm">info.hjzmgmt@gmail.com</div>
          </div>
          <div>
            <div className="font-medium text-navy text-sm sm:text-base">Service Area</div>
            <div className="text-gray-600 text-sm">Greater Boston & MetroWest</div>
          </div>
        </div>
        
        <div className="bg-gold/10 p-3 rounded-lg text-center">
          <p className="text-xs sm:text-sm text-navy font-light italic">
            "I personally review every inquiry and respond within 24 hours."
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
