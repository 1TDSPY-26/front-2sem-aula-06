import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./routes/Home/index.tsx";
import Product from "./routes/Product/index.tsx";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />, 
    errorElement: <Home />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product",
        element: <Product />
      }
    ] },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
