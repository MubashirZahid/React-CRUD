import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const useProductHook = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axiosInstance
      .get("/")
      .then((response) => {
        setProductData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const signUp = (userData) => {
    setLoading(true);

    axiosInstance
      .post("/signUp", userData) // Modify the endpoint as needed
      .then((response) => {
        console.log("User signed up successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createPost = (formData) => {
    setLoading(true);

    axiosInstance
      .post("/addNewProduct", formData)
      .then((response) => {
        console.log("Successfully created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteProduct = (productId) => {
    setLoading(true);

    axiosInstance
      .delete(`/deleteById/${productId}`)
      .then((response) => {
        console.log("Successfully deleted:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateProduct = (productId, updatedData) => {
    setLoading(true);

    axiosInstance
      .put(`/updateById/${productId}`, updatedData)
      .then((response) => {
        console.log("Successfully updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    productData,
    loading,
    setLoading,
    createPost,
    deleteProduct,
    updateProduct,
    signUp,
  };
};

export default useProductHook;
