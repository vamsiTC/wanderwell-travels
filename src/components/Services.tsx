import { Plane, Shield, MapPin, Camera, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Find the best deals on flights worldwide with our exclusive partnerships and price match guarantee.",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage for peace of mind during your adventures, including medical and trip cancellation.",
  },
  {
    icon: MapPin,
    title: "Custom Itineraries",
    description: "Personalized travel plans crafted by local experts to match your interests and budget perfectly.",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture stunning moments with professional photography guides at the world's most photogenic locations.",
  },
  {
    icon: Users,
    title: "Group Travel",
    description: "Organize memorable group adventures with special rates and dedicated support for large parties.",
  },
  {
    icon: Star,
    title: "Luxury Experiences",
    description: "Exclusive access to premium accommodations, private tours, and VIP experiences worldwide.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "California, USA",
    text: "WanderLust made our honeymoon absolutely perfect! The attention to detail and personalized service exceeded all expectations.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "The photography tour in Iceland was incredible. Our guide knew all the hidden gems and helped us capture amazing shots.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    text: "Excellent service from start to finish. The custom itinerary was exactly what we wanted, and everything went smoothly.",
    rating: 5,
    avatar: "EW"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the perfect trip, handled by our expert team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-secondary/50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Our Travelers Say
            </h3>
            <p className="text-lg text-muted-foreground">
              Real experiences from real adventurers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;