import { Posts, Form } from "../../components";

const Landing = () => {
  return (
    <div className="animate-fadeIn duration-300">
      {" "}
      {/* Animation using Tailwind */}
      <div className="container mx-auto px-4 py-8">
        {" "}
        {/* Container with padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {/* Grid layout */}
          <div className="col-span-full md:col-span-1">
            {" "}
            {/* Full width on small screens, narrower on medium */}
            <Posts />
          </div>
          <div className="col-span-full md:col-span-1">
            {" "}
            {/* Full width on small screens, narrower on medium */}
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
