import './index.scss';
import local from '../contato/img/local.png'
import telefone from '../contato/img/telefone.png'
import email from '../contato/img/email.png'




export default function () {
    return (
        <div className='tudinho'>
            <div className='sur'>
            <h1>SURGIU ALGUMA DUVIDA OU SUGESTÃO?</h1>
            <h2>FALE CONOSCO</h2>
            </div>
            <div className='desc'>
               
                <div className='loc'>
                    <div className='alin'>
                        <div className='one1'>
                            <img src={local} />
                            <h2>RUA ANDRE PERNET, 1017 VILA OLIMPIA - SP CEP: 04890-020</h2>
                        </div>
                        <div className='two'>
                            <img src={local} />
                            <h2>RUA EUZEBIO COCHI, 1237 NAÇÕES UNIDAS - SP CEP: 04890-020</h2>
                        </div>
                        <div className='thre'>
                            <img src={email} />
                            <h2>therunnerburguers@gmail.com</h2>
                        </div>
                        <div className='four'>
                            <img src={telefone} />
                            <h2>11 93953-8476</h2>
                        </div>
                    </div>
                </div>
                <div className='inputas'>
                
                    <div className="input-group">
                        <div className="input-one">
                            <h2>Nome</h2>
                            <input type='text'  placeholder='Nome'/>
                        </div>
                        <div className="input-two">
                            <h2>Whatsapp</h2>
                            <input type='text' placeholder='Whatsapp' />
                        </div>
                        <div className="input-thre">
                            <h2>E-Mail</h2>
                            <input type='text' placeholder='E-mail' />
                        </div>
                        <div className="input-fuor">
                            <h2>Assunto</h2>
                            <input type='text' placeholder='Assunto' />
                        </div>
                        <div className='pai'><button>Enviar</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
