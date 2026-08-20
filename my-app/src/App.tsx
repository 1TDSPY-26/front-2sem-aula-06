import { Outlet } from "react-router";
import Eliza from "./components/Eliza/Eliza";
import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function name() {
  // Declarar constantes e variáveis

  return(
    <div>
    <Cabecalho />
    <Outlet />
    </div>
  );
  
}