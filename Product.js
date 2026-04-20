import React from "react";

function Product({ product }) {
  return (
    <div className="card">

      <img src={product.image} />

      <h2>{product.name}</h2>

      <h3>Rs {product.price}</h3>

      <button>Add to Cart</button>

    </div>
  );
}

export default Product;