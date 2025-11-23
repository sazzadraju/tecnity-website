"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductModal } from "@/components/modals/product-modal";
import { products, Product } from "@/lib/data/products";
import { Package } from "lucide-react";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleRequestQuote = () => {
    setModalOpen(false);
    setQuoteModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-b border-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
            <Package className="text-[#e8e8e8]" size={16} />
            <span className="text-sm text-[#a8a8a8] uppercase tracking-wide">Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]">
            Our <span className="bg-gradient-to-r from-white to-[#a8a8a8] bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-lg text-[#a8a8a8] max-w-3xl mx-auto">
            Innovative solutions designed to solve real-world problems. Click on any product to explore features and capabilities.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="cursor-pointer bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:border-[#444444] hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <span className="material-icons text-5xl text-[#e8e8e8] mb-4">{product.icon}</span>
                  <CardTitle className="text-[#e8e8e8]">{product.title}</CardTitle>
                  <CardDescription className="text-[#a8a8a8]">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">
                    Click to learn more →
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onRequestQuote={handleRequestQuote}
      />
    </div>
  );
}
