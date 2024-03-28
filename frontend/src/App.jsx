import React from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./images/image.png";
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <NavBar />
      <img src={memories} alt="memories" height="60" />.
      <Form />
      <Posts />
    </div>
  );
};
export default App;
