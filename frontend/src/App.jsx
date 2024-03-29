import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import { Home } from "./Pages";
import { Posts } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <Posts></Posts>
    </RouterProvider>
  );
};

export default App;
