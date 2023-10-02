// import React, { useState } from "react";
// import useProductHook from "../hooks/useProductHook";
// import "./postDemo.css";

// const PostDemo = () => {
//   const { createPost } = useProductHook();

//   const [productTitle, setProductTitle] = useState("");
//   const [productPrice, setProductPrice] = useState();
//   const [productRating, setProductRating] = useState();
//   const [productStock, setProductStock] = useState();

//   const handleCreateProduct = (e) => {
//     e.preventDefault();

//     const data = {
//       title: productTitle,
//       price: productPrice,
//       rating: productRating,
//       stock: productStock,
//       //   description: productDescription,
//     };

//     createPost(data);

//     // console.log(
//     //   "The title ",
//     //   productTitle,
//     //   " & description ",
//     //   productDescription
//     // );

//     // fetch("http://127.0.0.1:8000/products/addNewProduct", {
//     //   method: "POST",
//     //   body: JSON.stringify({
//     //     title: productTitle,
//     //     price: parseInt(productPrice),
//     //     rating: parseInt(productRating),
//     //     stock: parseInt(productStock),
//     //     // body: productDescription,
//     //   }),
//     // });
//   };

//   return (
//     <div className="form-container">
//       <h1>Post Data</h1>
//       <p>Enter title</p>
//       <form onSubmit={handleCreateProduct}>
//         <input
//           type="text"
//           label="title"
//           placeholder="input title"
//           onChange={(e) => setProductTitle(e.target.value)}
//         />
//         <p>Enter Price</p>
//         <input
//           type="number"
//           placeholder="input price"
//           onChange={(e) => setProductPrice(e.target.value)}
//         />
//         <p>Enter Rating</p>
//         <input
//           type="number"
//           placeholder="input rating"
//           onChange={(e) => setProductRating(e.target.value)}
//         />
//         <p>Enter Stock</p>
//         <input
//           type="number"
//           placeholder="input stock"
//           onChange={(e) => setProductStock(e.target.value)}
//         />
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default PostDemo;

import React from "react";
import { useForm, Controller } from "react-hook-form";
import useProductHook from "../hooks/useProductHook";
import "./postDemo.css";

const PostDemo = () => {
  const { createPost } = useProductHook();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createPost(data);
  };

  return (
    <div className="form-container">
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h4>Title</h4>
          <Controller
            name="title"
            control={control}
            rules={{
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Minimum length must be 3",
              },
              maxLength: {
                value: 30,
                message: "Title must be at most 30 characters",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter title"
                {...field}
                style={{ border: errors.title ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <h4>Price</h4>
          <Controller
            name="price"
            control={control}
            rules={{
              maxLength: {
                value: 10,
                message: "Price must be at most 10 characters",
              },
              min: {
                value: 0,
                message: "Price must be a non-negative value",
              },
            }}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Enter price"
                {...field}
                style={{ border: errors.price ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div>
          <h4>Rating</h4>
          <Controller
            name="rating"
            control={control}
            rules={{
              maxLength: {
                value: 10,
                message: "Rating must be at most 10 characters",
              },
              min: {
                value: 0,
                message: "Rating must be a non-negative value",
              },
              max: {
                value: 5,
                message: "Rating must be not more than 5",
              },
            }}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Enter rating"
                {...field}
                style={{ border: errors.rating ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.rating && <p>{errors.rating.message}</p>}
        </div>
        <div>
          <h4>Stock</h4>
          <Controller
            name="stock"
            control={control}
            rules={{
              maxLength: {
                value: 10,
                message: "Stock must be at most 10 characters",
              },
              min: {
                value: 0,
                message: "Stock must be a non-negative value",
              },
            }}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Enter stock"
                {...field}
                style={{ border: errors.stock ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.stock && <p>{errors.stock.message}</p>}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default PostDemo;
