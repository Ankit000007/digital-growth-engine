import { Users, IndianRupee, Zap, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Team", desc: "Skilled professionals with years of industry expertise." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium quality services at competitive prices." },
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without compromising on quality." },
  { icon: ThumbsUp, title: "100% Client Satisfaction", desc: "We don't stop until you're completely satisfied." },
];

const WhyChooseUs = () => (
  <section className="py-20 px-4 bg-muted/50">
    <div className="container mx-auto text-center">
      <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Us</span>
      <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-12 font-[Poppins] text-foreground">Why Choose T Technology</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-xl bg-card border p-6 text-center hover:tt-shadow transition-all">
            <div className="w-14 h-14 rounded-full tt-gradient flex items-center justify-center mx-auto mb-4">
              <r.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-[Poppins]">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
