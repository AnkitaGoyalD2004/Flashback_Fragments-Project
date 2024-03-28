import { Toolbar as DaisyToolbar, Button, Text } from "daisyui";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

const NavBar = () => {
  const { user: currentUser } = useSelector((state) => {
    return state.userState;
  });
  const user = currentUser;
  //to navigate to other page using react router
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //handle user logout

  return (
    <header className="bg-base-100 rounded-lg px-4 py-2 my-4 mx-auto max-w-7xl">
      <DaisyToolbar justify="space-between">
        <div className="flex items-center">
          <Text className="text-3xl font-bold text-blue-600">Memories</Text>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Avatar className="w-8 h-8 rounded-full bg-blue-50 text-blue-500">
                {"S"}
              </Avatar>
              <Text className="text-sm font-medium text-blue-500">ASDASD</Text>
              <Button variant="outline" onClick={userlogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          )}
        </div>
      </DaisyToolbar>
    </header>
  );
};

export default NavBar;
