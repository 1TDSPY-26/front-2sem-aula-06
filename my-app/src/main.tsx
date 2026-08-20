import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './routes/Home/index.tsx'
import Produto from './routes/Produto/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'


const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Home/>, 
      children:[
        {path: "/", element: <Home/>},
        {path: "/produto", element: <Produto/>}
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
