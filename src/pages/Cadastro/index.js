import "./cadastro.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <div className="cadastro-container">
        <form onSubmit={handleSubmit} autocomplete="off" spellcheck="false" className="cadastro-form">
          <div className="profile-container">
            <div name="photo_profile" className="photo_profile">
              <img src="/cam_profile.png" alt="img user profile" id="img-photo-profile"/> 
              <p>ADICIONAR</p>
              <p>FOTO</p>
            </div>
          </div>

          <div className="wrap container-1"> 
          <label>Nome</label>
          <input type="text" name="ipt_nome" id="ipt_values" placeholder="Digite seu nome!" onChange={handleChange}/>

          <label>E-mail</label>
          <input type="email" name="ipt_email" id="ipt_values" placeholder="nome@email.com" onChange={handleChange}/>
            
          <div className="wrap container-2">
          <label>Data de Nascimento
          <input type="date" name="ipt_nascimento" id="ipt_values" max="2022-DD-MM" onChange={handleChange}/>
          </label>
            
          <label>Telefone
          <input type="tel" name="ipt_telefone" id="ipt_values" placeholder="(__) _____-____" onChange={handleChange}/>
          </label>
          </div>

          <label>Senha</label>
          <input type="password" name="ipt_senha" id="ipt_values" placeholder="Digite sua senha!" onChange={handleChange}/>
            
          <label>Confirmar Senha</label>
          <input type="password" name="ipt_conf_senha" id="ipt_values" placeholder="Confirme a senha!" onChange={handleChange}/>
          </div>

          <div className="wrap container-3">
            <label>
              <input type="checkbox" name="cbox-doar-leite" id="ipt_cbox" onChange={handleChange}/>
              Desejo doar leite materno
            </label>

            <label>
              <input type="checkbox" name="cbox-doar-produtos" id="ipt_cbox" onChange={handleChange}/>
              Desejo doar e/ou receber produtos infantis
            </label>

              <p>* Se desejar, pode marcar ambos ok?</p>
          </div>
          
          <div className="wrap btn-submit">
            <button type="submit" className="btn_cadastro">Concluir Cadastro</button>
          </div>
        </form>

        <Link className="link_voltar" to="/"> 
          {"<"} Voltar
        </Link>    
      </div>  
    </div>  
  );
}
