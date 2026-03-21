import { useEffect, useState } from "react";
import { fetchProducts } from "../api";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} – ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

