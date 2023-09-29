import { useState, useEffect } from "react";

const useProductHook = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://127.0.0.1:8000/products/")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Data : ", data);
        setProductData(data.data);
        setLoading(false);
      });
  }, []);

  const createPost = (formData) => {
    setLoading(true);
    console.log("The form data ", formData);
    fetch("http://127.0.0.1:8000/products/addNewProduct", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log("Successfully created", data))
      .finally(() => setLoading(false));
  };

  const deleteProduct = (productId) => {
    setLoading(true);
    console.log("Deleting product with ID: ", productId);
    fetch(`http://127.0.0.1:8000/products/deleteById/${productId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => console.log("Successfully deleted", data))
      .finally(() => setLoading(false));
  };

  const updateProduct = (productId, updatedData) => {
    setLoading(true);
    console.log("Updating product with ID: ", productId);

    fetch(`http://127.0.0.1:8000/products/updateById/${productId}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log("Successfully updated", data))
      .finally(() => setLoading(false));
  };

  return {
    productData,
    loading,
    setLoading,
    createPost,
    deleteProduct,
    updateProduct,
  };
  //   return productData;
};

export default useProductHook;
