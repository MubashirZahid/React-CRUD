// import React, { useEffect, useState } from "react";
// import axiosInstance from "../utils/axiosInstance";
// import "./DebounceDemo.css";

// const DebounceDemo = () => {
//   const [productId, setProductId] = useState(1);
//   const [errorMsg, setErrorMsg] = useState();
//   const [productData, setProductData] = useState({});

//   const callProductApi = () => {
//     axiosInstance
//       .get(`/getOneById/${productId}`)
//       .then((resp) => resp.data)
//       .then((data) => {
//         console.log("Data : ", data);
//         setProductData(data);

//         return data;
//       })
//       .catch((err) => {
//         setErrorMsg("Some error occured");
//         return "Some error";
//       })
//       .finally(() => {});
//   };

//   useEffect(() => {
//     console.log("Product ID: ", productId);

//     const timeOutFunc = setTimeout(() => {
//       callProductApi();
//     }, 2000);

//     return () => clearTimeout(timeOutFunc);
//   }, [productId]);

//   return (
//     <div className="debounce-container">
//       <h1>Debounce Practise</h1>
//       <input
//         placeholder="Enter ID"
//         onChange={(e) => setProductId(e.target.value)}
//       />

//       <h4>Fetched Data by ID</h4>
//       <div>
//         {productData.data ? (
//           <div>
//             <h3>Title: {productData.data.title}</h3>
//           </div>
//         ) : errorMsg ? (
//           <h4>Error: {errorMsg}</h4>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DebounceDemo;

import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useParams } from "react-router-dom"; // Import useParams

const DebounceDemo = () => {
  const { id } = useParams();
  const [errorMsg, setErrorMsg] = useState();
  const [productData, setProductData] = useState({});

  const callProductApi = () => {
    axiosInstance
      .get(`/getOneById/${id}`)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Data : ", data);
        setProductData(data);
      })
      .catch((err) => {
        setErrorMsg("Some error occurred");
      });
  };

  useEffect(() => {
    console.log("Product ID: ", id);

    const timeOutFunc = setTimeout(() => {
      callProductApi();
    }, 2000);

    return () => clearTimeout(timeOutFunc);
  }, [id]);

  return (
    <div className="debounce-container">
      <div>
        {productData.data ? (
          <div>
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Title: {productData.data.title}
            </h1>
          </div>
        ) : errorMsg ? (
          <h4>Error: {errorMsg}</h4>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DebounceDemo;
