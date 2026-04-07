import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 font-[Poppins] text-foreground">Get In Touch</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg tt-gradient flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+918409477707" className="font-medium text-foreground">+91 8409477707</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg tt-gradient flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <span className="font-medium text-foreground">info@ttechnology.com</span>
              </div>
            </div>
            <a href="https://wa.me/918409477707" target="_blank" rel="noopener noreferrer">
              <Button className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white mt-4">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </Button>
            </a>
          </div>
          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-xl border bg-card p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <Textarea placeholder="Tell us about your project..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            <Button type="submit" className="w-full tt-gradient text-white border-0 h-11">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
