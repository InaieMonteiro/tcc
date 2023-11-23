import { cadastrofilme, listarporNome } from "../repository/hamrepository.js";
import { deletar } from "../repository/hamrepository.js";
import { alterar } from "../repository/hamrepository.js";
import { listarTodos } from "../repository/hamrepository.js";
import { listarporID } from "../repository/hamrepository.js";

 import { Router } from "express";

 const server = Router();


server.post('/produtos', async(req,resp) => {

    try{
        const novoFilme= req.body;

        if ( !novoFilme.NOME)
            throw new Error('O Nome Do Produto é Obrigatorio')

           // if ( !novoFilme.DESCRICAO)
           // throw new Error('informe Uma Descriçao')

            if ( !novoFilme.PRECO)
            throw new Error('Informe o Preço')

            if ( !novoFilme.CATEGORIA)
            throw new Error('Informe a Categoria')

          //  if ( !novoFilme.DISPONIVEL)
            //throw new Error('Informe Se Esta Disponivel ou Nao')

            //if ( !novoFilme.BEBIDA)
            //throw new Error('Informe SE É BEBIDA')

            //if ( !novoFilme.VEGANO)
            //throw new Error('Informe  se é vegano')

           // if ( !novoFilme.TIPO_FRANGO)
          //  throw new Error('Informe  se é frango')

           
            //if ( !novoFilme.TIPO_CARNE)
            //throw new Error('Informe se é carne')


            if ( !novoFilme.INGREDIENTES)
            throw new Error('Informe Quais Sao  os Ingredientes')

          


        const filmeInserido =  await cadastrofilme(novoFilme)

        resp.send(filmeInserido)
    }
    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }


})





server.delete('/produtos/:id' ,async (req,resp) => {

    try{
        
        const { id } = req.params;

        const resposta = await deletar(id);

        if (resposta === 0) {
            resp.status(404).send({ message: 'Produto não foi removido' });
        } else {
            resp.status(204).send({ message: 'Produto foi removido com sucesso' });
        }
    }

    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }

})


server.put('/produtos/:id' , async (req, resp) =>{

    try{

        const { id } = req.params;
        const produ = req.body;

        
        if ( !produ.NOME)
            throw new Error('O Nome Do Produto é Obrigatorio')

            if ( !produ.DESCRICAO)
            throw new Error('informe Uma Descriçao')

            if ( !produ.PRECO)
            throw new Error('Informe o Preço')

            if ( !produ.CATEGORIA)
            throw new Error('Informe a Categoria')

          //  if ( !produ.DISPONIVEL)
            //throw new Error('Informe Se Esta Disponivel ou Nao')//


        const resposta = await alterar(id, produ);
        if (resposta != 1)
                throw new Error('produto nao pode ser alterado');
        else
                 resp.status(204).send();


    }
    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }

})


server.get('/produtos/tudo' , async (req, resp) =>{

    try{
        const resposta =  await listarTodos();
        resp.send(resposta)

    }


    catch (err){
        resp.status(400).send({
            err: err.message
        })
    }
});



server.get('/produtos/:id' , async (req, resp) => {

    try{
        const { id } = req.params;

        const resposta =  await listarporID(id);

        if( !resposta)
            throw new Error('Produto Nao Encontrado Ou  Já Excluido')

        resp.send(resposta);

    }


    catch (err){
        resp.status(400).send({
            err: err.message
        })
    }
});


server.get('/produto/busca' , async (req, resp) => {

    try{
        const { nome } = req.query;

        const resposta =  await  listarporNome(nome);

        if( resposta.length === 0)
        resp.status(404).send('Produto nao Encontrado')
        else
        resp.send(resposta);
    }
    catch (err){
        resp.status(400).send({
            err: err.message
        })
    }
});



server.put('/produto/:id/imagem' , async (req,resp) =>{

    try{

    }
    catch (err){
        resp.status(400).send({
            err: err.message
        })
    }

});

server.post('/usuario/cliente', async (req, resp) => {
    try {
        const cliente = req.body;

        /*if (!cliente.USUARIO) {
            throw new Error('Seu Nome é Obrigatório');
        }

        if (!cliente.EMAIL) {
            throw new Error('E-mail obrigatório');
        }

        if (!cliente.SENHA) {
            throw new Error('Senha obrigatória');
        }*/

        // Outras verificações necessárias podem ser adicionadas aqui

        // Se todas as verificações passarem, envie a resposta
        resp.send(cliente);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

export default server;