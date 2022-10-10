import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { DashBoard } from "./dashboard";
import { Home } from "./home";
import { Login } from "./login";
import { Profile } from "./profile";
import { Signup } from "./signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/:username",
    element: <Profile />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
