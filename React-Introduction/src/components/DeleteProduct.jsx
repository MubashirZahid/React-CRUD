import React, { useState } from "react";
import useProductHook from "../hooks/useProductHook";

const DeleteProduct = () => {
  const { deleteProduct } = useProductHook();
  const [productId, setProductId] = useState("");

  const handleDelete = () => {
    if (productId) {
      deleteProduct(productId);
      setProductId(""); // Clear input field after delete
    }
  };

  return (
    <div>
      <h1>Delete Product By ID</h1>
      <p>Enter Product ID to delete:</p>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteProduct;
