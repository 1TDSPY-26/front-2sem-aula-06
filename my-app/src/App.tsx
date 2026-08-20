import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
//import Vitor from "./components/vitor/vitor";

export default function App() {
  //Declarar constantes e Variaveis

  return (
    //Aqui voce cria todo conteudo HTML de apresentacao
    <div>
      <Cabecalho />
      <Outlet />
    </div>

  );
}