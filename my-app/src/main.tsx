import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import Home from './routes/Home/Index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Produto from './routes/Produto/index.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Home/>, children:[
    {path:"/", element: <Home/>},
    {path: "/Produto", element: <Produto/>}
  ]}
])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
