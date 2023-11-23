INSERT INTO TB_USUARIO (NM_USUARIO, DS_EMAIL, DS_SENHA_HASH)
VALUES ('admin', 'admin@.com.br', 'hashed_password');

SELECT ID_USUARIO, NM_USUARIO, DS_EMAIL
FROM TB_USUARIO
WHERE DS_EMAIL = 'admin@.com.br' AND DS_SENHA_HASH = 'hashed_password';


INSERT INTO PRODUTOS (NOME, DESCRICAO, PRECO, CATEGORIA, DISPONIVEL, BEBIDA, VEGANO, TIPO_CARNE, TIPO_FRANGO, INGREDIENTES)
	VALUES ('Hamburguer de Carne', 'Delicioso hamburguer de carne grelhada', 10.99, 'Hamburgueres', TRUE, FALSE, FALSE, TRUE, FALSE, 'Carne, pão, alface, tomate');

select * from PRODUTOS;

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
    from PRODUTOS;
    
    select  ID 		id,
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
    WHERE NOME 		LIKE  '%P%';
    
        select  ID 		id,
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
    WHERE ID 		 = 33;
    