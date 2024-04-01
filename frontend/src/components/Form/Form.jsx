import { convertBase64 } from "../../utils/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createPostAction,
  updatePostAction,
  addPost,
  updatePost,
} from "../../utils/actions";

const Form = () => {
  return (
    <div className="container mx-auto p-4 shadow-md bg-base-100 rounded-lg">
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        autoComplete="off"
        noValidate
        onSubmit={(event) => handleSubmit(event)}
      >
        <div>
          <h2 className="text-lg font-medium mb-4">
            {currentPostId ? "Editing " : "Creating "} a Memory
          </h2>
        </div>

        <div className="form-group">
          <label htmlFor="creator" className="label">
            Creator
          </label>
          <input
            type="text"
            id="creator"
            name="creator"
            className="input"
            value={postData.creator}
            onChange={(event) =>
              setPostData({ ...postData, creator: event.target.value })
            }
          />
        </div>

        <div className="flex items-center justify-end">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button className="btn btn-secondary ml-4" onClick={clear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
