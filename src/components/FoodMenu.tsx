import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star, Clock, Leaf } from "lucide-react";

const FoodMenu = () => {
  const menuCategories = [
    {
      id: "appetizers",
      name: "Appetizers",
      items: [
        {
          id: "1",
          name: "Truffle Arancini",
          description: "Crispy risotto balls with black truffle and parmesan",
          price: 18,
          rating: 4.8,
          prepTime: "15 min",
          tags: ["Vegetarian"],
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
        },
        {
          id: "2", 
          name: "Seared Scallops",
          description: "Pan-seared scallops with cauliflower purée and caviar",
          price: 24,
          rating: 4.9,
          prepTime: "12 min",
          tags: ["Gluten-Free"],
          image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      id: "mains",
      name: "Main Courses", 
      items: [
        {
          id: "3",
          name: "Wagyu Beef Tenderloin",
          description: "Grilled wagyu with roasted vegetables and red wine jus",
          price: 58,
          rating: 5.0,
          prepTime: "25 min",
          tags: ["Premium"],
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
        },
        {
          id: "4",
          name: "Lobster Thermidor",
          description: "Fresh lobster with brandy cream sauce and herb crust",
          price: 48,
          rating: 4.9,
          prepTime: "20 min", 
          tags: ["Signature"],
          image: "https://images.unsplash.com/photo-1565680018434-b513d5b93-1ba?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          id: "5",
          name: "Chocolate Soufflé",
          description: "Warm chocolate soufflé with vanilla bean ice cream", 
          price: 16,
          rating: 4.8,
          prepTime: "18 min",
          tags: ["Vegetarian"],
          image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop"
        }
      ]
    }
  ];

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      "Vegetarian": "bg-green-100 text-green-700",
      "Gluten-Free": "bg-blue-100 text-blue-700", 
      "Premium": "bg-hotel-gold/20 text-hotel-gold",
      "Signature": "bg-purple-100 text-purple-700"
    };
    return colors[tag] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="dining" className="py-20 bg-gradient-to-b from-hotel-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-hotel-navy">
            Fine Dining Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Indulge in our chef's curated selection of exquisite dishes, 
            crafted with the finest ingredients and served with luxury.
          </p>
        </div>

        <div className="space-y-12">
          {menuCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-3xl font-bold text-hotel-navy text-center">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-hotel-warm">
                    <div className="flex">
                      <div className="w-1/3 relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-hotel-gold text-hotel-gold" />
                          <span className="text-xs font-medium">{item.rating}</span>
                        </div>
                      </div>
                      
                      <CardContent className="w-2/3 p-4 space-y-3">
                        <CardHeader className="p-0">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg text-hotel-navy group-hover:text-hotel-gold transition-colors">
                              {item.name}
                            </CardTitle>
                            <span className="text-xl font-bold text-hotel-gold">
                              ${item.price}
                            </span>
                          </div>
                        </CardHeader>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{item.prepTime}</span>
                            </div>
                            {item.tags.map((tag) => (
                              <Badge key={tag} className={`text-xs ${getTagColor(tag)}`}>
                                {tag === "Vegetarian" && <Leaf className="h-3 w-3 mr-1" />}
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <Button variant="book" size="sm" className="h-8 px-3">
                            <Plus className="h-4 w-4 mr-1" />
                            Order
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;