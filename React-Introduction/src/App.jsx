import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import BoxContainer from "./components/BoxContainer";
import Footer from "./components/Footer";
import useProductHook from "./hooks/useProductHook";
import PostDemo from "./components/postDemo";
import DeleteProduct from "./components/DeleteProduct";
import UpdateProduct from "./components/UpdateProduct";
import DebounceDemo from "./components/DebounceDemo";
import RegistrationForm from "./components/RegistrationForm";
import GetAllProducts from "./components/GetAllProducts";
import { Route, Routes } from "react-router-dom";
import CustomHeader from "./components/CustomHeader";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      {/* <Header /> */}
      <CustomHeader />
      <Banner />
      <Routes>
        <Route path="/" element={<GetAllProducts />} />
        <Route path="/create" element={<PostDemo />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/getOneById/:id" element={<DebounceDemo />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/user/create" element={<UserCreatePage />} />
        <Route path="/user/edit" element={<UserCreatePage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
