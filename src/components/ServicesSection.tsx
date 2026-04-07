import { Globe, Smartphone, Palette, TrendingUp, Video, Cloud, ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

const services = [
  { id: "web", title: "Website Design & Development", description: "Custom responsive websites built with modern technologies for optimal performance.", price: 15000, icon: "Globe" },
  { id: "app", title: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android.", price: 30000, icon: "Smartphone" },
  { id: "design", title: "Graphic Design & Branding", description: "Professional logos, brand identity, and visual design that stands out.", price: 8000, icon: "Palette" },
  { id: "seo", title: "Digital Marketing & SEO", description: "Data-driven marketing strategies to boost your online presence and traffic.", price: 12000, icon: "TrendingUp" },
  { id: "video", title: "Video Editing", description: "High-quality video production and editing for marketing and social media.", price: 5000, icon: "Video" },
  { id: "saas", title: "Software as a Service (SaaS)", description: "Scalable cloud-based software solutions tailored to your business needs.", price: 25000, icon: "Cloud" },
];

const iconMap: Record<string, React.ElementType> = { Globe, Smartphone, Palette, TrendingUp, Video, Cloud };

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const Icon = iconMap[service.icon];

  const handleAdd = () => {
    addItem({ id: service.id, title: service.title, price: service.price, icon: service.icon });
    setAdded(true);
    toast.success(`${service.title} added to your plan!`);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group rounded-xl border bg-card p-6 hover:tt-shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="w-12 h-12 rounded-xl tt-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-semibold text-lg mb-2 font-[Poppins] text-foreground">{service.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{service.description}</p>
      <div className="flex items-end justify-between mt-auto">
        <div>
          <span className="text-xs text-muted-foreground">Starting at</span>
          <p className="text-2xl font-bold text-foreground">₹{service.price.toLocaleString("en-IN")}</p>
        </div>
        <Button
          onClick={handleAdd}
          size="sm"
          className={`gap-1.5 transition-all ${added ? "bg-green-600 hover:bg-green-600" : "tt-gradient text-white border-0"}`}
        >
          {added ? <><Check className="w-4 h-4" /> Added</> : <><ShoppingCart className="w-4 h-4" /> Add to Plan</>}
        </Button>
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <section id="services" className="py-20 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 font-[Poppins] text-foreground">
          Solutions That Drive Growth
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Choose the services you need and build your custom digital plan.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
