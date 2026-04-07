import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="pt-28 pb-20 px-4 relative overflow-hidden">
    <div className="absolute inset-0 tt-gradient opacity-[0.03]" />
    <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
    <div className="container mx-auto text-center relative z-10 max-w-3xl">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
        🚀 Full-Service Digital Solutions
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-[Poppins] text-foreground">
        We Build Powerful{" "}
        <span className="bg-clip-text text-transparent tt-gradient">
          Digital Solutions
        </span>{" "}
        for Your Business
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
        From websites to mobile apps and digital marketing, T Technology Pvt Ltd helps your business grow online.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="tt-gradient text-white border-0 gap-2 text-base px-8 h-12">
          Get a Free Consultation <ArrowRight className="w-4 h-4" />
        </Button>
        <a href="tel:+918409477707">
          <Button variant="outline" size="lg" className="gap-2 text-base h-12">
            <Phone className="w-4 h-4" /> Call Now
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
