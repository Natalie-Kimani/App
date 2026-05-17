import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage({
  products,
  updateProduct,
  deleteProduct,
}) {
  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Products</h1>

      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onUpdate={updateProduct}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}