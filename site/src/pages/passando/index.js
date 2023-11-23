import React, { useState } from 'react';
import './index.scss';
import primeira from '../passando/img/Vinil.png';
import segunda from '../passando/img/boa.jpg';
import terceira from '../passando/img/batata.jpg';
import quarta from '../home/img/terceira.jpg';
import quinta from '../passando/img/quartaa.jpg';
import seta from '../passando/img/seta-direita.png';
import esquerda from '../passando/img/seta-esquerda.png';

export default function () {
    const imagens = [primeira, segunda, terceira,
        quinta];
    const [imagemAtual, setImagemAtual] = useState(0);

    const proximaImagem = () => {
        if (imagemAtual < imagens.length - 1) {
            setImagemAtual(imagemAtual + 1);
        } else if (imagemAtual === 4) {
            setImagemAtual(0);
        }
    };

    const imagemAnterior = () => {
        if (imagemAtual > 0) {
            setImagemAtual(imagemAtual - 1);
        } else if (imagemAtual === 0) {
            setImagemAtual(4);
        }
    };

    const estiloImagem = { width: '20px', height: '20px' ,color: 'yellow' }; // Estilo para as imagens dentro dos botões

   
    return (
        <div className='one'>
            <div className='am'>
                <h1>VARIEDADES</h1>
            </div>
            <div className='aprezentacao'>
                <h1>VENHA CORRER CONOSCO</h1>
                <h2>CONHEÇA ALGUMAS DAS NOSSAS OPÇÕES</h2>
            </div>
            <div className='rodando'>
                <button onClick={imagemAnterior}>
                    <img src={esquerda} alt="Seta Esquerda" style={estiloImagem} />
                </button>
                <img
                    src={imagens[imagemAtual]}
                    alt="Imagem"
                    style={{ width: '800px', height: '500px' }}
                    
                />
                <button onClick={proximaImagem}>
                    <img src={seta} alt="Seta Direita" style={estiloImagem} />
                </button>
            </div>
            <div className='carda'>
                <button>CARDÁPIO</button>
            </div>
        </div>
    );
}
