import { Avatar, Button, Typography } from "daisyui";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserReducer } from "../../features/User/UserSlice";

const NavBar = () => {
  const { user: currentUser } = useSelector((state) => state.userState);
  const user = currentUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/auth");
    dispatch(logoutUserReducer());
  };

  return (
    <nav className="navbar bg-base-100 shadow-md">
      <div className="navbar-container mx-auto flex justify-between">
        {/* Brand Name */}
        <div className="brand">
          <Typography variant="h2" align="center">
            Memories
          </Typography>
        </div>

        {/* User Profile (if logged in) */}
        {user && (
          <div className="profile flex items-center">
            <Avatar
              alt={user.name || "User"} // Use user name if available
              src={user.avatarUrl || ""} // Use avatar URL if available
              className="mask mask-squircle w-10 h-10 bg-base-300"
            >
              {user.name?.charAt(0).toUpperCase() || "S"}
            </Avatar>
            <Typography variant="h6" className="ml-2">
              {user.name || "Username"}
            </Typography>
            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        )}

        {!user && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/auth")}
          >
            Sign In
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
