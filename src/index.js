import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import Home from "./pages/Home";
import About from "./pages/About";
import swDev from "./swDev";
import Users from "./pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "users",
    element: <Users/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
swDev();


