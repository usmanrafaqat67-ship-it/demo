import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Product from "./components/Product";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>

      <h1 className="title">🛒 Full Stack Shop</h1>

      <div className="grid">
        {products.map((p, i) => (
          <Product key={i} product={p} />
        ))}
      </div>

    </div>
  );
}

export default App;