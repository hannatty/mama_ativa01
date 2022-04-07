import { Link } from 'react-router-dom';
import ImgsGroup from '../../components/ImgsGroup';
import ImgsGroup2 from '../../components/ImgsGroup2';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <Link className='banner' to="/"> 
        <img src="/banner.svg" alt='Banner Mama Ativa' className='banner'/> 
      </Link>
      <div className="container2">
        <h2 className='info-home'>Aqui tem lugar para todo mundo <br/> que se preocupa com o próximo!</h2>
      </div>
      <div>
        <ImgsGroup/>
      </div>
      <div>
        <h2 className='info-home'>Aqui também tem lugar para<br/> quem entende a importância <br/> de um consumo consciente.</h2> 
      </div>
      <div>
        <ImgsGroup2/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
