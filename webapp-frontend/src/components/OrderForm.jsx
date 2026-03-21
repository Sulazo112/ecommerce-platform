import { useState } from "react";
import { placeOrder } from "../api";

export default function OrderForm() {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await placeOrder(Number(productId), Number(quantity));
    setMessage(res.message);
  }

  return (
    <div>
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Product ID" 
          value={productId} 
          onChange={e => setProductId(e.target.value)} 
        />
        <input 
          placeholder="Quantity" 
          value={quantity} 
          onChange={e => setQuantity(e.target.value)} 
        />
        <button type="submit">Order</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

