import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./navigation/Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
