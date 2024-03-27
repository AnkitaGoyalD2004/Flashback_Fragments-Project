import React from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./images/image.png";
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <img src={memories} alt="memories" height="60"></img>
      <Form />
      <Posts />
    </div>
  );
};
export default App;
