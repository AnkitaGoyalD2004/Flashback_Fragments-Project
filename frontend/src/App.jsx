import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import { Home } from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
