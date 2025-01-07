import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <About/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
