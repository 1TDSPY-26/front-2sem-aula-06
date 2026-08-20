import { Outlet } from "react-router";
import Ale from "./components/Ale/Ale";
import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function App() {
  //Declarar constantes e variáveis

  const sobreNome1:string = "Carlos";
  const sobreNome2:string = "de Jesus";



  return ( 
    <div>
        <Cabecalho/>
        <Outlet/>

    </div>
  );

}


{/* <Ale sobreNome={{a:"Carlos",b:"de Jesus"}}/> */}