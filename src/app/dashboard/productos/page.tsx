import { ProductCard } from "@/productos/components/product-card";

export default function page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <ProductCard />
    </div>
  );
}
