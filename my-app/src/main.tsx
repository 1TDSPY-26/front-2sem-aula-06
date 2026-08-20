import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './routes/Home/index.tsx'
import Produto from './routes/Produto/index.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {"path": "/", "element": <App />}, erroeElement: <Home />, children:[
    {"path": "/produto", "element": <Produto />},
    {"path": "/home", "element": <Home />}

  ]
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
