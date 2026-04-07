import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t py-12 px-4 bg-card">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg tt-gradient flex items-center justify-center text-white font-bold font-[Poppins]">T</div>
            <span className="font-semibold font-[Poppins] text-foreground">T Technology Pvt Ltd</span>
          </div>
          <p className="text-sm text-muted-foreground">Full-service digital solutions for modern businesses.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 font-[Poppins] text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Home", "Services", "About", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 font-[Poppins] text-foreground">Contact</h4>
          <a href="tel:+918409477707" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> +91 8409477707
          </a>
        </div>
      </div>
      <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} T Technology Pvt Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
