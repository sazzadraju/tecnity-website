"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data/products";

export function ProductModal({
  product,
  open,
  onOpenChange,
  onRequestQuote,
}: {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestQuote: () => void;
}) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="material-icons text-4xl text-primary">{product.icon}</span>
            <DialogTitle className="text-2xl">{product.title}</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-muted-foreground">{product.description}</p>

          <div>
            <h3 className="font-semibold text-lg mb-3">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="material-icons text-primary text-sm mt-0.5">check_circle</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {product.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>

          <Button onClick={onRequestQuote} className="w-full">
            Request Demo / Quote
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
