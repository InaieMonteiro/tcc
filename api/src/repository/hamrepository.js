import {con} from "./conection.js";


export async  function cadastrofilme(produtos) {

    const comando =
    `INSERT INTO PRODUTOS (NOME, DESCRICAO, PRECO, CATEGORIA, DISPONIVEL, BEBIDA, VEGANO, TIPO_CARNE, TIPO_FRANGO, INGREDIENTES)
	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [resposta] = await con.query(comando, [
        produtos.NOME,         
        produtos.DESCRICAO,
         produtos.PRECO,
         produtos.CATEGORIA,
         produtos.DISPONIVEL,
         produtos.BEBIDA,
         produtos.VEGANO,
         produtos.TIPO_CARNE,
         produtos.TIPO_FRANGO,
         produtos.INGREDIENTES 
        ])
            produtos.id = resposta.insertId;


    return produtos;
}


export async function deletar(id){
    const comando =
     `
     delete from PRODUTOS
            WHERE ID = ?;
    `

    const[ resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
}



export async function alterar(id, produtos) {
        const comando = `
        update PRODUTOS
        SET	NOME			=	?,
            DESCRICAO		=	?,
            PRECO			=	?,
            CATEGORIA		=	?,
            DISPONIVEL 		=   ?,
            BEBIDA			=	?, 
           VEGANO			=	?,
            TIPO_FRANGO		=	?,
            TIPO_CARNE		=	?,
            INGREDIENTES	=	?
            WHERE  ID = ?     
        ` 

        const [resposta] = await con.query(comando, [
            produtos.NOME,
            produtos.DESCRICAO,
            produtos.PRECO,
            produtos.CATEGORIA,
            produtos.DISPONIVEL,
            produtos.BEBIDA,
            produtos.VEGANO,
            produtos.TIPO_FRANGO,
            produtos.TIPO_CARNE,
            produtos.INGREDIENTES,
            id

            
        ])
        return resposta.affectedRows 

}


export async function listarTodos() {
    const comando = `
    select ID 		id,
	NOME 				nome,
    DESCRICAO   		descricao,
    PRECO				preco,
    CATEGORIA			categoria,
    DISPONIVEL  		disponivel,
    BEBIDA 				bebida,
    VEGANO 				vegano,
    TIPO_FRANGO			frango,
    TIPO_CARNE 			carne,
    INGREDIENTES		ingredientes
    from PRODUTOS
    `
    const [ linhas] = await con.query(comando)
    return linhas;
}


export async function listarporID(id) {
    const comando = `
    select 
     ID 		id,
	NOME 				nome,
    DESCRICAO   		descricao,
    PRECO				preco,
    CATEGORIA			categoria,
    DISPONIVEL  		disponivel,
    BEBIDA 				bebida,
    VEGANO 				vegano,
    TIPO_FRANGO			frango,
    TIPO_CARNE 			carne,
    INGREDIENTES		ingredientes
    from PRODUTOS
    WHERE ID 		 = ?
    `
    const [ linhas] = await con.query(comando, [id])
    return linhas[0];
}


export async function listarporNome(nome) {
    const comando = `
    select 
     ID 		        id,
	NOME 				nome,
    DESCRICAO   		descricao,
    PRECO				preco,
    CATEGORIA			categoria,
    DISPONIVEL  		disponivel,
    BEBIDA 				bebida,
    VEGANO 				vegano,
    TIPO_FRANGO			frango,
    TIPO_CARNE 			carne,
    INGREDIENTES		ingredientes
    from PRODUTOS
    WHERE NOME 		LIKE  ?
    `
    const [ linhas] = await con.query(comando, [  `%${nome}%`  ])
    return linhas;
}


export async  function cadastrarCliente(cliente) {

    const comando =
  `		 insert into TB_USUARIO_CLIENTE (NM_USUARIO, DS_EMAIL , DS_SENHA_HASH)
      values( ?  ,? ,?)`
    
  
    const [resposta] = await con.query(comando, [
        cliente.USUARIO,
        cliente.EMAIL,
        cliente.SENHA
        ])
        
  
            const [ linhas] = await con.query(comando, [resposta])
            return linhas;
  
    
  }
  



