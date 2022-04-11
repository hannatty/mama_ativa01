import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Erro from './pages/Erro';
import Header from './components/Header';
import Cadastro from './pages/Cadastro';

const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Cadastro" component={Cadastro} />
      
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;