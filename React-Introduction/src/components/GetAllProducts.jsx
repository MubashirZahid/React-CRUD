import React from "react";
import { useEffect } from "react";

import useProductHook from "../hooks/useProductHook";

const GetAllProducts = () => {
  const { productData } = useProductHook();
  useEffect(() => {
    if (productData) {
      console.log("From app.jsx ", productData.result);
    }
  }, [productData]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Products</h1>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {productData.result &&
          productData.result.map((product, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "10px",
                margin: "5px",
              }}
            >
              {product.title}
            </div>
          ))}
      </h3>
    </div>
  );
};

export default GetAllProducts;
