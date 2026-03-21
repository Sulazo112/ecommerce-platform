import ProductList from "./components/ProductList";
import Login from "./components/Login";
import OrderForm from "./components/OrderForm";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>E-Commerce Frontend</h1>
      <Login />
      <ProductList />
      <OrderForm />
    </div>
  );
}

