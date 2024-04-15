import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//to implement lazy loading
import { lazy, Suspense } from "react";

import Header from "./components/Header";

import Home from "./Pages/Home";
import About from "./Pages/About";
import DashBoard from "./Pages/DashBoard";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Projects from "./Pages/Projects";
//import FooterComp from "./components/FooterComp";

const Myfootercomp = lazy(() => import("./components/FooterComp"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Suspense fallback={<div>Loading...</div>}>
        <Myfootercomp />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
