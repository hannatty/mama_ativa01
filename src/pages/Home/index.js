import { Link } from 'react-router-dom';
import ImgsGroup from '../../components/ImgsGroup';

export default function Home() {
  return (
    <div>
      <Link className='banner' to="/"> 
        <img src="/banner.svg" alt='Banner Mama Ativa' className='banner'/> 
      </Link>
      <div className="container2">
        <h2 className='info-home'>Você sabia que 1L de leite pode <br/> alimentar até 10 recém-nascidos?</h2>
      </div>
      <div>
        <ImgsGroup/>
      </div>
    </div>
  );
}
