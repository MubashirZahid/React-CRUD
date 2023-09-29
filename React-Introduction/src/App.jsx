import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import BoxContainer from "./components/BoxContainer";
import Footer from "./components/Footer";
import useProductHook from "./hooks/useProductHook";
import PostDemo from "./components/postDemo";
import DeleteProduct from "./components/DeleteProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  console.log("Rendering from App.jsx file");
  const { productData } = useProductHook();
  useEffect(() => {
    if (productData) {
      console.log("From app.jsx ", productData.result);
    }
  }, [productData]);

  return (
    <div>
      <Header />
      <Banner />
      {/* <BoxContainer /> */}
      <h3>
        Title:
        {productData.result &&
          productData.result.map((product, i) => {
            return <div key={i}>{product.title}</div>;
          })}
      </h3>
      <PostDemo />
      <DeleteProduct />
      <UpdateProduct />
      <Footer />

      {/* <div>
        <h1>React Introduction</h1>
        <p>Hello World</p>
        <p>Some basic components</p>
      </div> */}
    </div>
  );
}

export default App;
