import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Erro from "./pages/Erro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/login" component={Login} />
        <Route exact path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
