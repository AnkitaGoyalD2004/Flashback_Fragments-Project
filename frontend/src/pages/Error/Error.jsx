import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status == 404) {
    return <h1>Page not found</h1>;
  } else {
    console.log(error);
    return <h1>Error happen!!!!</h1>;
  }
};

export default Error;
