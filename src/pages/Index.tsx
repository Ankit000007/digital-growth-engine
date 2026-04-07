import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <ServicesSection />
    <WhyChooseUs />
    <AboutSection />
    <CTASection />
    <ContactSection />
    <Footer />
    <CartDrawer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
