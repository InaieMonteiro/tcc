import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000/'
})


export async function cadastrarFilme( NOME ,PRECO,DISPONIVEL,BEBIDA,VEGANO,TIPO_FRANGO,TIPO_CARNE,INGREDIENTES){
    const resposta = await api.post('/produtos' , {
        NOME :NOME ,   
        PRECO:  PRECO,
        DISPONIVEL: DISPONIVEL,
        BEBIDA:BEBIDA,
        VEGANO: VEGANO,
        TIPO_FRANGO:TIPO_FRANGO,
        TIPO_CARNE:TIPO_CARNE,
        INGREDIENTES: INGREDIENTES
    } )

    return resposta;

}   





