import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <h1 className='text-4xl text-center text-red-500'>Comming soon</h1> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
