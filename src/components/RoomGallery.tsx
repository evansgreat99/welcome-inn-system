import RoomCard from "./RoomCard";

const RoomGallery = () => {
  const rooms = [
    {
      id: "1",
      name: "Executive Suite",
      type: "Suite",
      price: 299,
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      rating: 4.9,
      amenities: ["WiFi", "Coffee", "Parking", "Pool"],
      capacity: 2,
      size: "45 sqm",
      isAvailable: true
    },
    {
      id: "2", 
      name: "Deluxe King Room",
      type: "Deluxe",
      price: 199,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
      rating: 4.8,
      amenities: ["WiFi", "Coffee", "Parking"],
      capacity: 2,
      size: "32 sqm",
      isAvailable: true
    },
    {
      id: "3",
      name: "Presidential Suite", 
      type: "Presidential",
      price: 599,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      rating: 5.0,
      amenities: ["WiFi", "Coffee", "Parking", "Pool"],
      capacity: 4,
      size: "85 sqm",
      isAvailable: false
    },
    {
      id: "4",
      name: "Garden View Room",
      type: "Standard",
      price: 149,
      originalPrice: 179,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
      rating: 4.7,
      amenities: ["WiFi", "Coffee"],
      capacity: 2,
      size: "28 sqm",
      isAvailable: true
    },
    {
      id: "5",
      name: "Family Suite",
      type: "Family",
      price: 399,
      image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop",
      rating: 4.8,
      amenities: ["WiFi", "Coffee", "Parking"],
      capacity: 4,
      size: "55 sqm",
      isAvailable: true
    },
    {
      id: "6",
      name: "Ocean View Suite",
      type: "Premium",
      price: 449,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
      rating: 4.9,
      amenities: ["WiFi", "Coffee", "Parking", "Pool"],
      capacity: 3,
      size: "50 sqm",
      isAvailable: true
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-background to-hotel-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-hotel-navy">
            Luxury Accommodations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of elegantly appointed rooms and suites, 
            each designed to provide the ultimate comfort and luxury experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;