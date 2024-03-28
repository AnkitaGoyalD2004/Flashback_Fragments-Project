import { NavBar } from "../../src/components";
import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div maxWidth="lg">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
