import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="  items-center min-h-screen mt-10 ">
      <div
        className="self-center flex p-3 max-w-3xl mx-auto
      flex-col  md:flex-row items-center"
      >
        {/* Left */}
        <div className="">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <spam className="self-center px-1 py-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 rounded-lg text-white">
              Create
            </spam>
            <b>New Account</b>
          </Link>
        </div>
        {/* Right */}
        <div className="">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex p-4 gap-2 text-sm ">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
