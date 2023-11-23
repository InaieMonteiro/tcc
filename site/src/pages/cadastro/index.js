import './index.scss';
import celular from '../cadastro/img/celular.png'
import face from '../cadastro/img/facebook.png'
import google from '../cadastro/img/google.png'

import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';



function Cadastro() {
    const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
    const [nome , setNome] = useState('');
  const navigate = useNavigate();

  async function entrarclick() {
    try {
      const r = await axios.post('http://localhost:5000/usuario/cliente', {
        email: email,
        nome : nome, 
        senha: senha
      });

      if (r.status === 401) {
        setErro("Credenciais inválidas.");
      } else if (r.status === 200) {
        navigate('/entra');
      }
    } catch (error) {
      console.error('Erro:', error);
      setErro("Credenciais inválidas .");
      
    }
  }


    
    
    return (

        <div className='mae111'>

         <main>
        <h1>Criar Conta</h1>
        <div className="social-media">
            <a href="#">
             <img src={google} />
            </a>
            <a href="">
            <img src={face} />
            </a>
            <a href="#">
          
            </a>
        </div>

        <div className="alternative">
            <span>OU</span>
        </div>

        <form action="">
            <label for="name">
                <span>Nome</span>
                <input type="text" value={nome}
          onChange={e => setNome(e.target.value)} id="name" name="name"/>
            </label>

            <label for="email">
                <span>E-mail</span>
                <input type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} id="email" name="email"/>
            </label>

            <label for="password">
                <span>Senha</span>
                <input type="password" 
                value={senha}
                onChange={e => setSenha(e.target.value)}id="password" name="password"/>
            </label>

            <div className='login'>
                <a href='http://localhost:3000/loginCliente'>Já tem conta? Faça login</a>
                <br/>
                <br/>
                <br/>
                <a  className='admzin'  href='http://localhost:3000/login'>Login ADM</a>
            </div>


            <input type="submit" value="Prosseguir" id="button"/>

            </form>
          

    </main>
    <section class="images">
        <img src={celular} />

    </section>

    </div>



    );
}

export default Cadastro;