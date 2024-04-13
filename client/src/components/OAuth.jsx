import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Button } from "flowbite-react";
export default function OAuth() {
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue With Google
    </Button>
  );
}
