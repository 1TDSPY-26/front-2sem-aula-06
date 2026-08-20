import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./routes/Home/index.tsx";
import Produto from "./routes/Home/Produto/produto.tsx";

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Home/>, children:[
    {path: "/", element: <Home/>},
  { path: "/produto", element: <Produto /> }
  ]}
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
