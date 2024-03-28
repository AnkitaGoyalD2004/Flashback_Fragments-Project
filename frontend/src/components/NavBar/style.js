import { Toolbar as DaisyToolbar, Button } from "daisyui";

function MyAppBar() {
  return (
    <header className="bg-base-100 rounded-lg px-4 py-2 my-4 mx-auto max-w-7xl">
      <DaisyToolbar justify="space-between">
        <div className="flex items-center space-x-4"></div>
        <Button variant="outline">Action</Button>
      </DaisyToolbar>
    </header>
  );
}

function MyTypography({ children, ...otherProps }) {
  return (
    <h1 className="text-blue-500 text-lg font-medium" {...otherProps}>
      {children}
    </h1>
  );
}
