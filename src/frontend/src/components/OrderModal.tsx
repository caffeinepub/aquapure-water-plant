import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, Loader2, Package } from "lucide-react";
import { useState } from "react";
import { Product, useSubmitOrderInquiry } from "../hooks/useQueries";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderModal({ open, onOpenChange }: OrderModalProps) {
  const { mutate, isPending, isSuccess, isError, reset } =
    useSubmitOrderInquiry();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: Product.jar20L,
    quantity: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      {
        name: form.name,
        phone: form.phone,
        product: form.product,
        quantity: BigInt(Number.parseInt(form.quantity) || 1),
        message: form.message,
      },
      {
        onSuccess: () =>
          setForm({
            name: "",
            phone: "",
            product: Product.jar20L,
            quantity: "1",
            message: "",
          }),
      },
    );
  };

  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        data-ocid="order.modal"
        className="sm:max-w-lg rounded-3xl"
        style={{ border: "1px solid oklch(0.42 0.18 252 / 0.15)" }}
      >
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(var(--primary) / 0.1)" }}
            >
              <Package
                className="w-5 h-5"
                style={{ color: "oklch(var(--primary))" }}
              />
            </div>
            <DialogTitle className="font-display font-black text-xl">
              Place an Order
            </DialogTitle>
          </div>
        </DialogHeader>

        {isSuccess ? (
          <div
            data-ocid="order.success_state"
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <CheckCircle2
              className="w-14 h-14 mb-4"
              style={{ color: "oklch(0.55 0.2 155)" }}
            />
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              Order Submitted!
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              We'll call you within 2 hours to confirm your order.
            </p>
            <button
              type="button"
              onClick={reset}
              className="px-6 py-2 rounded-full font-bold text-white water-gradient"
            >
              Place Another Order
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="order-name"
                className="font-semibold text-foreground mb-1.5 block"
              >
                Full Name
              </Label>
              <Input
                id="order-name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                required
                className="rounded-xl"
              />
            </div>

            <div>
              <Label
                htmlFor="order-phone"
                className="font-semibold text-foreground mb-1.5 block"
              >
                Phone Number
              </Label>
              <Input
                id="order-phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                required
                className="rounded-xl"
              />
            </div>

            <div>
              <Label className="font-semibold text-foreground mb-1.5 block">
                Product
              </Label>
              <Select
                value={form.product}
                onValueChange={(v) =>
                  setForm((p) => ({ ...p, product: v as Product }))
                }
              >
                <SelectTrigger data-ocid="order.select" className="rounded-xl">
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={Product.jar20L}>20L Water Jar</SelectItem>
                  <SelectItem value={Product.bottle1L}>
                    1L Water Bottle
                  </SelectItem>
                  <SelectItem value={Product.bottle500ml}>
                    500ml Water Bottle
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="order-qty"
                className="font-semibold text-foreground mb-1.5 block"
              >
                Quantity
              </Label>
              <Input
                id="order-qty"
                type="number"
                min="1"
                placeholder="1"
                value={form.quantity}
                onChange={(e) =>
                  setForm((p) => ({ ...p, quantity: e.target.value }))
                }
                required
                className="rounded-xl"
              />
            </div>

            <div>
              <Label
                htmlFor="order-msg"
                className="font-semibold text-foreground mb-1.5 block"
              >
                Additional Notes
              </Label>
              <Textarea
                id="order-msg"
                placeholder="Delivery address, special instructions..."
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                rows={3}
                className="rounded-xl resize-none"
              />
            </div>

            {isError && (
              <div
                data-ocid="order.error_state"
                className="flex items-center gap-2 text-sm p-3 rounded-lg"
                style={{
                  color: "oklch(0.4 0.2 25)",
                  background: "oklch(0.95 0.06 25)",
                }}
              >
                <AlertCircle className="w-4 h-4" />
                Failed to submit. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              data-ocid="order.submit_button"
              className="w-full py-3.5 rounded-xl font-bold text-white water-gradient disabled:opacity-60 flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
            >
              {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
              {isPending ? "Submitting..." : "Submit Order"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
