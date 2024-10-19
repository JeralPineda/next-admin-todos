import { ProductCard } from "@/productos/components/product-card";
import { products } from "@/productos/data/products";

export default function page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
