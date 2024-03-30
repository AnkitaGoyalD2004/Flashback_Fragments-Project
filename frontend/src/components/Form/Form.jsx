import { Form, Input, Textarea, Button, Alert, Paper } from "daisyui";
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

  const { posts, currentPostI } = useSelector((state) => {
    return state.postData;
  });

  const handleSubmit = () => {};

  return (
    <Paper>
      <form
        className="form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Grid alignItems="center">
          <Grid item>
            <Typography variant="h6"></Typography>
          </Grid>

          <Grid item>
            <TextField>
              name="creator" variant="outlined" label="Creator" value=
              {postData.creator}
              onChange=
              {(event) => {
                setPostData({ ...postData, creator: EventTarget.target.value });
              }}
            </TextField>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
