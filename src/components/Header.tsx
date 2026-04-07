import { Phone, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { totalItems, setDrawerOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg tt-gradient flex items-center justify-center text-white font-bold text-lg font-[Poppins]">
            T
          </div>
          <span className="font-semibold text-lg font-[Poppins] text-foreground hidden sm:block">
            T Technology
          </span>
        </a>

        <div className="flex items-center gap-3">
          <a href="tel:+918409477707">
            <Button variant="outline" size="sm" className="gap-2 hidden sm:flex">
              <Phone className="w-4 h-4" />
              +91 8409477707
            </Button>
            <Button variant="outline" size="icon" className="sm:hidden">
              <Phone className="w-4 h-4" />
            </Button>
          </a>

          <Button
            onClick={() => setDrawerOpen(true)}
            className="relative tt-gradient text-white border-0 gap-2"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Your Plan</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center font-bold animate-scale-in">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
