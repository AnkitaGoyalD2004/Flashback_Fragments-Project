import { NavBar } from "../../components";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Home;
