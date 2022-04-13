import './index.css'
import { Link } from 'react-router-dom';
import logo from '../Login/2_3.png'

const Login = () =>{
    return(
       <div className='container'>
          <div className='login'>
           <div className='img-div'>
              <img src={logo} className='img'  alt='Logo'  />
           </div>
         
             <p className='teste'>Email</p>
             <input type="text" className='input' />
             <p className='teste' style={{}}>Senha</p>
             <input type="text" className='input' />

             <button>Login</button>
              <Link  className='link' to='/senha' >Esqueceu sua senha ?</Link>
              <Link  className='link2'  to='/cadastro' > Cadastre-se</Link>
              <Link className='link3'   to='/cadastro' > Voltar</Link>
              
          </div>
       </div>
    )
}


export default Login