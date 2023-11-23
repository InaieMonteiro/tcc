import './index.scss';
import logo from '../home/img/logo.svg'
import hamm from '../home/img/Mham.png'
import mao from '../home/img/mao.png'
import { useNavigate } from 'react-router-dom';
import Passa from '../passando'
import Fogo from '../fogo'
import Roda from '../rodape'


export default function () {
    const navigate = useNavigate();

    function dastro() {
        navigate('/cadastro');
    }



    return (
        <div className='Amaior'>
            <div className='cabecudo'>
                <img src={logo} />
                <a> QUEM SOMOS</a>
                <a>CARDÁPIO</a>
                <a>COMBOS</a>
                <a href='http://localhost:3000/contato'> CONTATO</a>
                <button onClick={dastro}>Cadastre-se</button>
            </div>


            <div className='apresentacao'>
                <div className='porra'>

                    <img src={logo} />
                    <h1>THE RUNNERS BURGUES</h1>
                    <h2>HAMBURGUERS E COMBOS ARTESANAIS E VEGANOS</h2>
                    <div className='butas'>
                        <button>MAIS DELICIAS</button>
                    </div>

                </div>
            </div>
            <div className='sobrezada'>
                <h1>THE RUNNERS <br /><span> BURGUERS</span></h1>
                <h2 className='meio'>Na "THE RUNNERS BURGUES", fazemos<br /> hambúrgueres que são como um abraço<br />
                    saboroso para sua corrida diária. </h2>
                <br />
                <br />
                <h2>Usamos ingredientes premium e<br />
                    uma pitada de criatividade para transformar sua<br /> pressa em momentos de pura delícia.</h2>
                <div className='imze'>

                    <img src={mao} class="animated" />


                </div>
            </div>
                <div>
                    <Fogo/>
                </div>

            <div>
                <Passa />
            </div>
            <div>
                <Roda/>
            </div>

        </div>

    )
}



