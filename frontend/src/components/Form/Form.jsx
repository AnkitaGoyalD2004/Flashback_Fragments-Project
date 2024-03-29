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

  return (
    <Form onSubmit={handleSubmit}>
      {currentPostId && <Alert variant="info">Editing a Memory</Alert>}
      <Input
        w="full"
        name="creator"
        placeholder="Creator"
        value={postData.creator}
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
      />
      <Input
        w="full"
        name="title"
        placeholder="Title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
      />
      <Textarea
        w="full"
        name="message"
        placeholder="Message"
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
      />
      <Input
        w="full"
        name="tags"
        placeholder="Tags (separated by commas)"
        value={postData.tags}
        onChange={(e) =>
          setPostData({ ...postData, tags: e.target.value.split(",") })
        }
      />
      <div className="fileInput">
        <input type="file" onChange={handleInput} />
        <Button type="submit" color="primary" size="lg">
          Submit
        </Button>
        <Button color="secondary" size="sm" onClick={clear}>
          Clear
        </Button>
      </div>
    </Form>
  );
};

export default Form;
