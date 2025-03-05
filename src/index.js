import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./routes/index";

import "./index.css";

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
