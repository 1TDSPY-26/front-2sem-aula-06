import { Outlet } from 'react-router';
import Heloisa from './components/Heloisa/Heloisa';
import Cabecalho from './routes/Cabecalho/Cabecalho';


export default function App() {


  return (
    <div>
      
      <Cabecalho />
      <Outlet />

    </div>
  );
}