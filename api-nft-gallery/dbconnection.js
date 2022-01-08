async function  connect(){
    const mysql = require("mysql2/promise")
    //const connection = await mysql.createConnection("mysql://root:32442905Juan!@localhost:3306/nft_gallery")
    const connection = await mysql.createConnection("mysql://sql10458678:9tRtPQh7ka@sql10.freesqldatabase.com:3306/sql10458678")
    //const connection = await mysql.createConnection("mysql://b7c70c5d298fd5:bbd7740b@us-cdbr-east-05.cleardb.net/heroku_bc878ea95a94f7b")

    // mysql://b7c70c5d298fd5:bbd7740b@us-cdbr-east-05.cleardb.net/heroku_bc878ea95a94f7b?reconnect=true

    console.log("conectado com a verdadeira pala")

    global.connection = connection;
    return connection;
}

async function getProdutos(){
    const conn = await connect();
    console.log("Conectado ao banco, vou na pala");
    const [resultado] = await conn.query("SELECT * from tbitens");
    console.log(resultado);
    return resultado;
}
async function getProdutosId(id){
    const conn = await connect();
    console.log("Conectado ao banco, vou na pala");
    const parameters = [id];
    const [resultado] = await conn.query("SELECT * from tbitens where codigo = ?", parameters);
    return resultado;
}
async function getCategorias(){
    const conn = await connect();
    console.log("Conectado ao banco, vou na pala");
    const [resultado] = await conn.query("SELECT * from tbcategoria");
    return resultado;
}
async function getCategoriasId(id){
    const conn = await connect();
    console.log("Conectado ao banco, vou na pala");
    const parameters = [id];
    const [resultado] = await conn.query("SELECT * from tbitens where id_categoria = ?", parameters);
    return resultado;
}

module.exports = {getProdutos, getProdutosId, getCategorias, getCategoriasId};

