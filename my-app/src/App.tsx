import { Outlet } from "react-router";
import Marcelo from "./components/marcelo/marcelo";
import Cabecalho from "./components/cabecalho/cabecalho";

export default function App () {
  //declarar constantes e variaveis

  return(
    <div>
      
      <Cabecalho/>
      <Outlet />

    </div>



  );

}

