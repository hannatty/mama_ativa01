import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        <img src="/logo2.png" alt="Logo Mama Ativa" />
      </Link>
      <Link className="menu-options"> Quem Somos </Link>
      <Link className="menu-options"> Parcerias </Link>
      <Link className="menu-options"> Contato </Link>
      <Link className="register" to={"/login"}>
        {" "}
        <button className="register-button">Entrar</button>{" "}
      </Link>
    </header>
  );
}
