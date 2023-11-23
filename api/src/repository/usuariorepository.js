import {con} from './conection.js'

export async function login(email, senha) {
    const comando = `
    SELECT  ID_USUARIO ,
     NM_USUARIO         ,
      DS_EMAIL          
    FROM TB_USUARIO
    WHERE DS_EMAIL = ? AND DS_SENHA_HASH = ?`

    const [resposta] = await con.query(comando, [email,senha]);
    return resposta[0]  
}

