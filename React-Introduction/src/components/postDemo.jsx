import React, { useState } from "react";
import useProductHook from "../hooks/useProductHook";

const PostDemo = () => {
  const { createPost } = useProductHook();

  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productRating, setProductRating] = useState();
  const [productStock, setProductStock] = useState();
  //   const [productDescription, setProductDescription] = useState("");

  const handleCreateProduct = (e) => {
    e.preventDefault();

    const data = {
      title: productTitle,
      price: productPrice,
      rating: productRating,
      stock: productStock,
      //   description: productDescription,
    };

    createPost(data);

    // console.log(
    //   "The title ",
    //   productTitle,
    //   " & description ",
    //   productDescription
    // );

    // fetch("http://127.0.0.1:8000/products/addNewProduct", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: productTitle,
    //     price: parseInt(productPrice),
    //     rating: parseInt(productRating),
    //     stock: parseInt(productStock),
    //     // body: productDescription,
    //   }),
    // });
  };

  return (
    <div>
      <h1>Post Data</h1>
      <p>Enter title</p>
      <form onSubmit={handleCreateProduct}>
        <input
          type="text"
          label="title"
          placeholder="input title"
          onChange={(e) => setProductTitle(e.target.value)}
        />
        <p>Enter Price</p>
        <input
          type="number"
          placeholder="input price"
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <p>Enter Rating</p>
        <input
          type="number"
          placeholder="input rating"
          onChange={(e) => setProductRating(e.target.value)}
        />
        <p>Enter Stock</p>
        <input
          type="number"
          placeholder="input stock"
          onChange={(e) => setProductStock(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default PostDemo;
