import './footer.css';
import { Link } from 'react-router-dom';


export default function Footer(){
  return(
    <footer className='footer-container'>
      <span> <img src='copyright.png' alt='copyright' id='copyright'/>2022 MAMA ATIVA</span>  
      <div>
        <Link className='link-footer' to="/">Política de Privacidade</Link>
        <Link className='link-footer' to="/">Contato</Link>
      </div> 
      <div>
        <Link to="/" className='config-icon'><img src="facebook.png" alt="logo facebook" className='media-icon'/></Link>
        <Link to="/" className='config-icon'><img src="instagram.png" alt="logo instagram" className='media-icon'/></Link>
        <Link to="/" className='config-icon'><img src="whatsapp.png" alt="logo whatsapp" className='media-icon'/></Link>
      </div>
    </footer>

  );
}