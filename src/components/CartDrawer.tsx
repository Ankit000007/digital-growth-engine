import { Minus, Plus, Trash2, ShoppingCart, MessageCircle, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const CartDrawer = () => {
  const { items, totalPrice, isDrawerOpen, setDrawerOpen, updateQuantity, removeItem } = useCart();

  const whatsappMessage = () => {
    const lines = items.map((i) => `• ${i.title} x${i.quantity} — ₹${(i.price * i.quantity).toLocaleString("en-IN")}`);
    const msg = `Hi, I'm interested in the following services:\n\n${lines.join("\n")}\n\nTotal: ₹${totalPrice.toLocaleString("en-IN")}\n\nPlease share more details.`;
    return `https://wa.me/918409477707?text=${encodeURIComponent(msg)}`;
  };

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setDrawerOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md p-0">
        <SheetHeader className="px-6 pt-6 pb-4">
          <SheetTitle className="font-[Poppins] text-xl flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" /> Your Plan
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <ShoppingCart className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="font-medium text-foreground mb-1">No services selected yet</p>
              <p className="text-sm text-muted-foreground">Browse our services and add them to your plan.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="rounded-lg border bg-card p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-sm text-foreground pr-2">{item.title}</h4>
                    <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors shrink-0">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, -1)}>
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <span className="font-semibold text-foreground">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 pb-6 pt-4 border-t space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="text-2xl font-bold text-foreground">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <Separator />
            <Button className="w-full tt-gradient text-white border-0 h-11 gap-2">
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </Button>
            <a href={whatsappMessage()} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" className="w-full h-11 gap-2 border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700">
                <MessageCircle className="w-4 h-4" /> Get Quote on WhatsApp
              </Button>
            </a>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
