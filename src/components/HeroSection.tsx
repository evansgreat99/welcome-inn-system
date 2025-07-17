import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hotel-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hotel-navy/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-hotel-gold-light">
                <Star className="h-5 w-5" />
                <span className="text-sm font-medium">5-Star Luxury Experience</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to
                <span className="block text-hotel-gold-light">LuxeStay Hotel</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Experience unparalleled luxury in the heart of the city. Where comfort meets elegance, 
                and every moment becomes a cherished memory.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-5 w-5 text-hotel-gold-light" />
              <span>Downtown City Center • Premium Location</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" size="lg" className="text-lg px-8">
                <Calendar className="mr-2" />
                Book Your Stay
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Virtual Tour
              </Button>
            </div>
          </div>

          {/* Right Content - Booking Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-hotel-navy mb-2">Quick Booking</h3>
                  <p className="text-muted-foreground">Reserve your perfect stay</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Check-in</label>
                      <input 
                        type="date" 
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Check-out</label>
                      <input 
                        type="date" 
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Guests</label>
                      <select className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4+ Guests</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Rooms</label>
                      <select className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold">
                        <option>1 Room</option>
                        <option>2 Rooms</option>
                        <option>3+ Rooms</option>
                      </select>
                    </div>
                  </div>

                  <Button variant="luxury" className="w-full text-lg py-3">
                    Check Availability
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;