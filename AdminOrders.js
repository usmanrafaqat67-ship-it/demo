import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/orders")
      .then(res => setOrders(res.data));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>

      <h1>📦 All Orders</h1>

      {orders.map((o, i) => (
        <div key={i} style={{ border: "1px solid #00ffff", margin: 10 }}>

          <h3>Total: ${o.total}</h3>

          <p>Items:</p>

          {o.items.map((item, index) => (
            <p key={index}>
              {item.name} - ${item.price}
            </p>
          ))}

        </div>
      ))}

    </div>
  );
}

export default AdminOrders;