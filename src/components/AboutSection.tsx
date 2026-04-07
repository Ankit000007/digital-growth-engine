import { CheckCircle2 } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <div className="rounded-2xl border bg-card p-8 sm:p-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 font-[Poppins] text-foreground">T Technology Pvt Ltd</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          T Technology Pvt Ltd is a full-service digital solutions provider helping businesses of all sizes establish
          and grow their online presence. With a passion for innovation and a commitment to excellence, we deliver
          cutting-edge web, mobile, and marketing solutions that drive real results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["End-to-end digital solutions", "Dedicated project managers", "Transparent communication", "Post-launch support"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
