import "./imgsGroup.css";
import { Link } from "react-router-dom";

export default function ImgsGroup() {
  return (
    <div className="container1">
      <h2 className="subtitle-config">
        É LACTANTE?
        <br /> Que tal doar um pouquinho do seu leite e se juntar a esse time?
      </h2>
      <Link className="link_cadastro" to={"/cadastro"}>
        Cadastre-se!
      </Link>
      <div className="imgGroup">
        <img src="/foto1.png" alt="Mulher com bebê" className="img-config" />
        <img src="/foto2.png" alt="Mulher com bebê" className="img-config" />
        <img src="/foto3.png" alt="Mulher com bebê" className="img-config" />
        <img src="/foto4.png" alt="Mulher com bebê" className="img-config" />
      </div>
    </div>
  );
}
