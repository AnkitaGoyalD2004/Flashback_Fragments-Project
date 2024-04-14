import { GoogleLogin } from "@react-oauth/google";

const OAuth = () => {
  const onSuccess = (response) => {
    console.log("Login Success:", response);
    // Send the access token to your backend for verification
  };

  const onFail = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div>
      <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        onSuccess={onSuccess}
        onFailure={onFail}
      />
    </div>
  );
};

export default OAuth;
