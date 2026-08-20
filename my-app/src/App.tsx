import { Outlet } from 'react-router';
import Yasmin from './components/Yasmin/Yasmin';
import Cabecalho from './components/Cabecalho/Cabecalho';


export default function App() {
  
  
  return (
    <div>
      {/** Conteúdo da aplicação */}
      <Cabecalho/>
      <Outlet/>
    </div>
  );
}