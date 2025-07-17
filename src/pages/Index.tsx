import { useState } from "react";
import HotelNavbar from "@/components/HotelNavbar";
import HeroSection from "@/components/HeroSection";
import RoomGallery from "@/components/RoomGallery";
import FoodMenu from "@/components/FoodMenu";
import AuthModal from "@/components/AuthModal";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <HotelNavbar />
      <HeroSection />
      <RoomGallery />
      <FoodMenu />
      
      {/* Footer */}
      <footer className="bg-hotel-navy text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-hotel-gold-light">LuxeStay Hotel</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience unparalleled luxury and comfort in the heart of the city. 
              Your perfect stay awaits at LuxeStay Hotel.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-hotel-gold-light transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-hotel-gold-light transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-hotel-gold-light transition-colors">Contact Us</a>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 LuxeStay Hotel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
