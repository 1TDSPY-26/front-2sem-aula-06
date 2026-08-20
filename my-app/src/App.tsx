import { Outlet } from "react-router"
// import Hugo from "./components/Hugo/Hugo"
import Header from "./components/Header/Header"

export default function App(){
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}