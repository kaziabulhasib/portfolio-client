import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";

import Home from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
