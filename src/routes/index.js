import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About/index";
import Stay from "../components/Stay/stay";
import Contact from "../components/Contact/index"
import Applayout from "../components/layout/applayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      // Redirect from root path (/) to /home
      {
        index: true, // Indicates this is the default route for "/"
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/stay",
        element: <Stay />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
