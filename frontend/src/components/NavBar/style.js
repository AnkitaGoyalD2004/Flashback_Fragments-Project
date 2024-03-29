import { AppBar, Typography, Toolbar } from "daisyui";

// MyAppBar
export const MyAppBar = (props) => (
  <AppBar
    className={`rounded-lg mt-30 mb-30 flex items-center justify-between px-10 py-4`}
    {...props} // Pass any additional props to the AppBar component
  >
    {/* AppBar content */}
  </AppBar>
);

// MyTypography
export const MyTypography = (props) => (
  <Typography
    className={`text-sky-500 decoration-none`}
    {...props} // Pass any additional Typography props
  >
);

// MyToolbar
export const MyToolbar = (props) => (
  <Toolbar
    className={`flex justify-end w-400`}
    {...props} // Pass any additional Toolbar props
  >
    {/* Toolbar content */}
  </Toolbar>
);