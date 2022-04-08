import './imgsGroup.css';
import { Link } from 'react-router-dom';
import Cadastro from '../../pages/Cadastro';


export default function ImgsGroup(){
  return(
    <div className='container'>
      <h2 className='subtitle-config'>É LACTANTE?<br/> Que tal doar um pouquinho do seu leite e se juntar a esse time?</h2>
      <Link to={'/Cadastro'}>Cadastre-se</Link>
      <div className='imgGroup'>
        <img src="/foto1.png" alt='Mulher com bebê' className='img-config' /> 
        <img src="/foto2.png" alt='Mulher com bebê' className='img-config'/> 
        <img src="/foto3.png" alt='Mulher com bebê' className='img-config'/> 
        <img src="/foto4.png" alt='Mulher com bebê' className='img-config'/> 
    </div>
   </div>

  );
}