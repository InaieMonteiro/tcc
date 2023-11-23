import './index.scss';
import { useState } from 'react';
import { cadastrarFilme } from '../../api/filmeApi';

export default function () {
    const [nome, setNome] = useState('');
    const [ingre, setIgre] = useState('');
    const [preco, setPreço] = useState('');
    

    const [disponivel, setDisponivel] = useState(false);
    const [bebida, setBebida] = useState(false);
    const [Vegano, setVegano] = useState(false);
    const [frango, setFrango] = useState(false);
    const [carne, setCarne] = useState(false);
  

    async function salvarClick() {
        try {
   
            const resposta = await cadastrarFilme(nome, preco,  disponivel, bebida, Vegano, frango, carne, ingre);



            
            console.log('Resposta da API:', resposta);
            alert('Filme cadastrado com sucesso!');
        } catch (err) {
            console.error('Erro ao cadastrar filme:', err);
            alert('Erro ao cadastrar filme: ' + err.message);
        }
    }
    


    return (
        <div className='mak'>

            <div className='tudao'>

                <div className='imagem'>
                    <div>
                        <input type='file' />
                    </div>
                </div>
                <div className='produto'>

                    <h1 className='um'>Seu Produto É:</h1>
                    <div className='porra1'>
                        <div className='tipo'>
                            <input type='checkbox' checked={bebida} onChange={ e => setBebida(e.target.checked)} />
                                 <h2>Bebida</h2>
                            <input type='checkbox'  checked={Vegano} onChange={ e => setVegano(e.target.checked)}/>
                                 <h2>Vegano</h2>
                            <input type='checkbox'  checked={frango} onChange={ e => setFrango(e.target.checked)}/>
                                 <h2>Tipo-Frango</h2>
                            <input type='checkbox'  checked={carne} onChange={ e => setCarne(e.target.checked)}/>
                                  <h2>Tipo-Carne</h2>
                            <input type='checkbox'  checked={disponivel} onChange={e => setDisponivel(e.target.checked)}/>
                                 <h2>Disponivel</h2>
                            <div className='Acor'></div>
                        </div>

                    </div>


                    <div className='sobre'>
                        <div className='nome'>
                            <h1>Adicionar Nome Do Produto</h1>
                            <input type='text' placeholder='  Escreva Aqui...'  value={nome} onChange={ e => setNome(e.target.value)} />
                        </div>
                        <div className='ingre'>
                            <h1>Informe Os Ingredientes</h1>
                            <input type='text' placeholder='Informe...'  value={ingre} onChange={ e => setIgre(e.target.value)}/>
                        </div>
                        <div className='valor'>
                            <h1>Valor Do Seu Produto</h1>
                            <input type='number' placeholder='R$'  value={preco} onChange={ e => setPreço(e.target.value)}/>
                        </div>
                        <div className='butai'><button onClick={salvarClick}>salvar</button></div>
                        
                    </div>
                </div>
            </div>
        </div>

    )

}
