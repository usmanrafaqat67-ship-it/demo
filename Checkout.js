import React, { useState } from "react";
import axios from "axios";

function Checkout() {

  const [cart] = useState([
    { name: "Headphones", price: 50 },
    { name: "Mouse", price: 30 }
  ]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = async () => {

    await axios.post("http://localhost:5000/orders/create", {
      items: cart,
      total: total
    });

    alert("🎉 Order Placed Successfully!");
  };

  return (
    <div style={{ textAlign: "center" }}>

      <h2>🛒 Checkout</h2>

      <h3>Total: ${total}</h3>

      <button onClick={placeOrder}>
        Place Order
      </button>

    </div>
  );
}

export default Checkout;