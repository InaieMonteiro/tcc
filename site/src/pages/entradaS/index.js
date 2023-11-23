import './index.scss';
import lixeira from '../entradaS/img/lixeira.png'
import lapis from '../entradaS/img/lapis.png'

import { useNavigate } from 'react-router-dom';

export default function () {
    const navigate = useNavigate();

        function sair(){
            navigate('/')
        }


        function home(){
            navigate('/cadasrtoProduto')
        }


    return (

        <div class="one-one">
            <div class="entrada-saida">
                <h1>Entrada e Saida-Administrador</h1>
                <div class="cor-baixo"></div>

            </div>
            <div className='cor-cinza-back'>
                <div class="back">
                    <div class="meio">
                        <div class="cor-antes"></div>
                        <div class="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Produto-Tipo</th>
                                        <th>Valor Total</th>
                                        <th>Ingredientes</th>
                                        <th>Nome Do Pedido</th>
                                        <th>Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>carne </td>
                                        <td>R$58.90 </td>
                                        <td className='six'>dfygsdcgsaod </td>
                                        <td>vegano bom </td>
                                        <td>disponivel </td>
                                    </tr>
                                </tbody>

                            </table>
                            <div class="icons">
                                <img src={lixeira} />
                                <img src={lapis} />
                            </div>
                     </div>

                     
                     
                    </div>
                </div>
            </div>
        
            <div className='rodazin'>
                <div className='novo'>
                     <button onClick={home}>Novo</button>
                </div>
                
                <div className='sair'>
                     <button onClick={sair}>Sair</button>
                </div>
                

            </div>
        
        </div>







    )


















}