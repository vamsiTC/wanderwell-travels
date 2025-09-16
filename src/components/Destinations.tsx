import { MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import mountainsImage from "@/assets/destination-mountains.jpg";
import europeImage from "@/assets/destination-europe.jpg";
import tropicalImage from "@/assets/destination-tropical.jpg";
import safariImage from "@/assets/destination-safari.jpg";

const destinations = [
  {
    id: 1,
    name: "Swiss Alps",
    location: "Switzerland",
    image: mountainsImage,
    rating: 4.9,
    price: "From $2,499",
    duration: "7 days",
    description: "Experience breathtaking mountain vistas and pristine alpine lakes",
  },
  {
    id: 2,
    name: "Tuscany Villages",
    location: "Italy",
    image: europeImage,
    rating: 4.8,
    price: "From $1,899",
    duration: "5 days",
    description: "Discover charming medieval towns and world-class cuisine",
  },
  {
    id: 3,
    name: "Maldives Paradise",
    location: "Maldives",
    image: tropicalImage,
    rating: 5.0,
    price: "From $3,299",
    duration: "6 days",
    description: "Luxury overwater villas in crystal-clear lagoons",
  },
  {
    id: 4,
    name: "Safari Adventure",
    location: "Kenya",
    image: safariImage,
    rating: 4.7,
    price: "From $2,799",
    duration: "8 days",
    description: "Witness the Great Migration in the heart of Africa",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the world's most stunning locations, carefully curated for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span className="text-xs font-medium">{destination.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="sm" className="w-full">
                    Explore Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{destination.duration}</p>
                    <p className="font-bold text-primary">{destination.price}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="explore" size="lg">
            View All Destinations
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;