import { Button } from "@/components/ui/button";
import { Hotel, User, Calendar, UtensilsCrossed, LogIn } from "lucide-react";

const HotelNavbar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Hotel className="h-8 w-8 text-hotel-gold" />
            <span className="text-xl font-bold text-hotel-navy">LuxeStay</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#rooms" className="text-foreground hover:text-hotel-gold transition-colors">
              Rooms
            </a>
            <a href="#dining" className="text-foreground hover:text-hotel-gold transition-colors">
              Dining
            </a>
            <a href="#services" className="text-foreground hover:text-hotel-gold transition-colors">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-hotel-gold transition-colors">
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <User className="mr-2" />
              Login
            </Button>
            <Button variant="luxury" size="sm">
              <Calendar className="mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HotelNavbar;