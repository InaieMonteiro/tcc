import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Cadastro from './pages/cadastro'
import Promo from './pages/promo'
import Login from './pages/login'
import Promounico from './pages/promounico'
import Historico from './pages/historico'
import Home from './pages/home'
import Batata from './pages/batata'
import LoginCliente from './pages/loginCliente'
import CadastroProduto from './pages/cadastroProduto'
import Passando from './pages/passando';
import Contato from './pages/contato';
import Fogo from './pages/fogo'
import Roda from './pages/rodape'

import EntradaS from './pages/entradaS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='login'  element={<Login/>} />
      <Route path='/promo' element={<Promo/>} />
      <Route path='cadastro' element={<Cadastro/>} />
      <Route path='unico' element={<Promounico/>} />
      <Route path='hisc' element={<Historico/>} />
      <Route path='/' element={ <Home/>} />
      <Route path='batata' element={< Batata/>} />
      <Route path='LoginCliente' element={<LoginCliente/>} />
      <Route path='cadasrtoProduto' element={<CadastroProduto/>}  />
      <Route path='passando' element={<Passando/>} />
      <Route path='contato' element={<Contato/>} />
      <Route path='fogo' element={<Fogo/>} />
      <Route path='roda' element={<Roda/>} />
      <Route path='entra' element={<EntradaS/>} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


