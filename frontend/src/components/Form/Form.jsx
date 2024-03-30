import { Form, Input, Textarea, Button, Alert } from "daisyui";
import { convertBase64 } from "../../utils/index";
import "./style.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { createPostAction, updatePostAction } from "../../utils/actions";
import { addPost, updatePost } from "../../features/Posts/PostsSlice";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return;
};

export default Form;
