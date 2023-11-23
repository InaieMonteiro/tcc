import './index.scss';

import normal from '../batata/img/batataA.png'
import B from '../batata/img/batataB.png'
import C from '../batata/img/batataC.png'
import ultima from '../batata/img/ultima.png'







export default function () {


    return (

        <div className='mae'>

            <div className='cabecalho-batata'>
                <h1>BATATA FRITA</h1>
                <a href='http://localhost:3000'><strong>Voltar Para Pagina Inicial</strong> </a>
                <div className='corzs'></div>
            </div>
            <div className='cardapio'>
                <div className='primeira'>
                    <div className='batata-a'>
                        <div className='paddin'>
                            <div className='costa'>
                                <div className='fora'>
                                    <img src={normal} />

                                    <h1><span>BATATA COM CHEDDAR E BACON  (A)</span></h1>
                                    <div className='pedido'>
                                        <h1>R$ 20,90</h1>

                                        <a><strong>Fazer Pedido</strong></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='batata-b'>
                        <div className='paddin1'>
                            <div className='costa1'>
                                <div className='fora1'>
                                    <img src={B} />
                                    <h1><span>BATATA COM CHEDDAR E BACON  (B)</span></h1>
                                    <div className='pedido1'>
                                        <h1><strong>R$ 25,90</strong></h1>
                                        <a><strong>Fazer Pedido</strong></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='segunda'>
                    <div className='batata-c'>
                        <div className='paddin2'>
                            <div className='costa2'>
                                <div className='fora2'>
                                    <img src={C} />
                                    <h1><span>BATATA NORMAL  (A)</span></h1>
                                    <div className='pedido2'>
                                        <h1><strong>R$ 15,00</strong></h1>
                                        <a><strong>Fazer Pedido</strong></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='batata-c'>
                        <div className='paddin2'>
                            <div className='costa2'>
                                <div className='fora2'>
                                    <img src={ultima} />
                                    <h1><span>BATATA NORMAL  (B)</span></h1>
                                    <div className='pedido2'>
                                        <h1><strong>R$ 17,90</strong></h1>
                                        <a><strong>Fazer Pedido</strong></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}