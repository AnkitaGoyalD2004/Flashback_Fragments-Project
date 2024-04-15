import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

import {
  signInSuccess,
  signInFailure,
  signInStart,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" }); // Set initial values to avoid potential errors
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before dispatching actions
    if (!formData.email || !formData.password) {
      dispatch(signInFailure("Please fill out all fields"));
      // Prevent further execution if validation fails
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        // Use exclamation mark for clarity
        dispatch(signInFailure(data.message));
      } else {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <>
      {/* center min-h-screen mt-10  */}
      <div
        className="self-center flex p-3 max-w-3xl mx-auto
      flex-col  md:flex-row items-center"
      >
        {/* Left */}
        <div className="">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <spam className="self-center px-1 py-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 rounded-lg text-white">
              Memory
            </spam>
            <b>Bank</b>
          </Link>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email" // Use type="email" for email input
                placeholder="Email"
                id="email"
                onChange={handleChange}
                value={formData.email} // Set value from state
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
                value={formData.password} // Set value from state
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">loading...</span>
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
          <div className="flex p-4 gap-2 text-sm ">
            <span>Don't have an Account</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </>
  );
}
