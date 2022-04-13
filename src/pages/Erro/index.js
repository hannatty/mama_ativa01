import './erro.css';
import { Link } from 'react-router-dom';

export default function Erro(){
  return(
    <div className='container-erro'>
      <img src="/computer.png" alt='erro 404' id='erro-img-config' /> 
      <h2 id="erro-msg">Huuum... A página que você digitou não existe.</h2>
      <Link to={'/'}>Retornar à Página Principal</Link>
   </div>
  );
}