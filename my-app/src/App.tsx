import { Outlet } from "react-router";
import Bruno from "./components/Bruno/Bruno";
import Cabecalho from "./components/Cabecalho";

export default function app() {
  //declarar constantes e variaveis


  return (
    //aqui voce cria todo conteudo HTML de apresentação 
    <Cabecalho /> 
      </Outlet >

    <div>

      <h1>Meu Componente</h1>
      <Bruno />
    </div>
  );


}