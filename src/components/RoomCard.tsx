import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Coffee, Car, Waves, Users, Star, ArrowRight } from "lucide-react";

interface RoomCardProps {
  id: string;
  name: string;
  type: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  amenities: string[];
  capacity: number;
  size: string;
  isAvailable?: boolean;
}

const RoomCard = ({ 
  name, 
  type, 
  price, 
  originalPrice, 
  image, 
  rating, 
  amenities, 
  capacity, 
  size,
  isAvailable = true 
}: RoomCardProps) => {
  const amenityIcons: { [key: string]: any } = {
    'WiFi': Wifi,
    'Coffee': Coffee,
    'Parking': Car,
    'Pool': Waves,
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-card to-hotel-warm">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={isAvailable ? "default" : "secondary"} className="bg-hotel-gold text-white">
            {isAvailable ? "Available" : "Booked"}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 fill-hotel-gold text-hotel-gold" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-hotel-navy border-hotel-gold">
              {type}
            </Badge>
            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <Users className="h-4 w-4" />
              <span>{capacity} Guests</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-hotel-navy group-hover:text-hotel-gold transition-colors">
            {name}
          </h3>
          
          <p className="text-muted-foreground text-sm">
            {size} • City View • Premium Amenities
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {amenities.slice(0, 4).map((amenity) => {
            const IconComponent = amenityIcons[amenity];
            return (
              <div key={amenity} className="flex items-center space-x-1 text-sm text-muted-foreground">
                {IconComponent && <IconComponent className="h-4 w-4" />}
                <span>{amenity}</span>
              </div>
            );
          })}
        </div>

        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice}
                </span>
              )}
              <span className="text-2xl font-bold text-hotel-navy">
                ${price}
              </span>
              <span className="text-sm text-muted-foreground">
                /night
              </span>
            </div>
            {originalPrice && (
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                Save ${originalPrice - price}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 space-y-3">
        <Button 
          variant={isAvailable ? "book" : "outline"} 
          className="w-full group/btn"
          disabled={!isAvailable}
        >
          {isAvailable ? "Book Now" : "View Details"}
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;