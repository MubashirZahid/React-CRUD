import React, { useState } from "react";
import useProductHook from "../hooks/useProductHook";

const UpdateProduct = () => {
  const { updateProduct } = useProductHook();
  const [productId, setProductId] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState("");
  const [productStock, setProductStock] = useState("");

  const handleUpdate = () => {
    if (productId) {
      const updatedData = {
        title: productTitle,
        price: productPrice,
        rating: productRating,
        stock: productStock,
      };
      updateProduct(productId, updatedData);
      setProductId("");
    }
  };

  return (
    <div>
      <h1>Update Product By ID</h1>
      <p>Enter Product ID to update:</p>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <p>Enter new title:</p>
      <input
        type="text"
        placeholder="New title"
        value={productTitle}
        onChange={(e) => setProductTitle(e.target.value)}
      />
      <p>Enter new price:</p>
      <input
        type="number"
        placeholder="New price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <p>Enter new rating:</p>
      <input
        type="number"
        placeholder="New rating"
        value={productRating}
        onChange={(e) => setProductRating(e.target.value)}
      />
      <p>Enter new stock:</p>
      <input
        type="number"
        placeholder="New stock"
        value={productStock}
        onChange={(e) => setProductStock(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateProduct;
