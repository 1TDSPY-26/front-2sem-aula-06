import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


import { createBrowserRouter, RouterProvider} from 'react-router'
import Home from './routes/Home/index.tsx'
import Produto from './routes/Produto/index.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Home/>, children:[
    {path: "home", element: <Home/>}, 
    {path: "produto", element: <Produto/>}
  ]
},]);




  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
