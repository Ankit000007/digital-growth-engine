import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto max-w-3xl text-center">
      <div className="rounded-2xl tt-gradient p-10 sm:p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[Poppins]">Start Your Project Today!</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Let's turn your ideas into reality. Get a free consultation or call us directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 h-12 px-8">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Button>
            <a href="tel:+918409477707">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 gap-2 h-12">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
