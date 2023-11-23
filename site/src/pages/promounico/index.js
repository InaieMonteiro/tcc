import './index.scss'
import React, { useState } from 'react';

import logo from '../promounico/img/logo.png'
import carrinho from '../promounico/img/carrinho.png'
import ham from '../promounico/img/ham.png'
import master from '../promounico/img/master.png'
import pix from '../promounico/img/pix.png'
import visa from '../promounico/img/visa.png'
import elo from '../promounico/img/elo.png'


export default function ProdutoPage() {
    const [quantidade, setQuantidade] = useState(1);
  
    function diminuirQuantidade() {
      if (quantidade > 1) {
        setQuantidade(quantidade - 1);
      }
    }
  
    function aumentarQuantidade() {
      setQuantidade(quantidade + 1);
    }
  
    return (
      <div className='maezona'>
        <div className='color'>
          <div className='cabecalhoo'>
          <div className='cabecudo'>
                <img src={logo} />
                <a href='http://localhost:3000/'> HOME</a>
                <a>CARDÁPIO</a>
                <a>COMBOS</a>
                <a href='http://localhost:3000/contato'> CONTATO</a>
                <button >Cadastre-se</button>
            </div>
                    
          </div>

  
          <div className='promo12'>
            <img src={ham} alt='Hamburguer' />
            <div className='textos'>
              <h1><span> Hamburguer Clássico 70 (Tipo x -salada)</span></h1><br />
              <h2>Cheese salada, burger bovino de 160g ao ponto, queijo cheddar , maionese de ervas, alface, tomate, cebola roxa, picles no pão de brioche artesanal.
                (Obs: Nosso hamburguer contém derivados de porco.)</h2>
            
              <h1><span>Total:</span> <span id="precoTotal">{(quantidade * 54.7).toFixed(2)}</span></h1>
            </div>
          </div>
  
          <div className='butoess'>
            <h1>Quantidade</h1>
            <button className='branco'>
              <button className='menos' onClick={diminuirQuantidade}>-</button>
              <input type="text" id="quantidade" value={quantidade} readOnly />
              <button className='mais' onClick={aumentarQuantidade}>+</button>
            </button>
            <button>Comprar</button>
            <h1 className='amanho'>Frete grátis a partir de R$49,99</h1>
            <div className='pagamentos'>
                <img src={ master} />
                <img src={ pix} />
                <img src={ visa} />
                <img src={ elo} />

            </div>
          </div>
        </div>
      </div>
    );
  }