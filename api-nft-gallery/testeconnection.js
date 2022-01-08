const bd = require("./dbconnection");

(async () => {
    console.log("iniciando a pala");
    const result = bd.getProdutos();
    console.log("fim");
}) ();