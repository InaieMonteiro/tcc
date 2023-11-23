import './index.scss';
import celular from '../cadastro/img/celular.png'
import face from '../cadastro/img/facebook.png'
import google from '../cadastro/img/google.png'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Cadastro() {
  
    
    return (

        <div className='mae111'>

         <main>
        <h1>Faça Login</h1>
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
          

            <label for="email">
                <span>E-mail</span>
                <input type="email"   />
            </label>

            <label for="password">
                <span>Senha</span>
                <input type="password" 
               
                id="password" name="password"/>
            </label>

         


            <input type="submit"    value="Prosseguir"  id="button"/>

            </form>
          

    </main>
    <section class="images">
        <img src={celular} />

    </section>

    </div>



    );
}

export default Cadastro;