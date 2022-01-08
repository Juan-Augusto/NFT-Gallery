const express = require("express");
const bd = require("./dbconnection");
const porta = process.env.PORT || 3500;
const api = express();
const cors = require("cors");


api.use(cors()); //cross origin = permite fazer requisições de origens distintas (front)


api.get("/produtos", async (req, res) => {
    try{
        const result = await bd.getProdutos();

        res.status(200);
        res.json(result);
    }
    catch(erro){
        console.log("Erro no endpoint produtos GET")
        console.log(erro)
    }
})
api.get("/produtos/:id", async (req, res) =>{
    try{
        const idProduto = req.params["id"];
        console.log("ID recuperado = " + req.params["id"]);
        const resultado = await bd.getProdutosId(idProduto);
        if(resultado.length == 0){
            res.status(404);
            res.send("NOT FOUND");
        }else{
            const produto = resultado[0];
            res.status(200);
            res.json(produto);
        }
    }
    catch(erro){
        console.log("Erro no endpoint produtos GET por id")
        console.log(erro)
    }
})
api.get("/categorias", async (req, res) =>{
    try{
        const result = await bd.getCategorias();

        res.status(200);
        res.json(result);
    }
    catch(erro){
        console.log("Erro no endpoint produtos GET")
        console.log(erro)
    }
})
api.get("/categorias/:id", async (req, res) =>{
    try{
        const idProduto = req.params["id"];
        console.log("ID recuperado = " + req.params["id"]);
        const resultado = await bd.getCategoriasId(idProduto);
        if(resultado.length == 0){
            res.status(404);
            res.send("NOT FOUND");
        }else{
            res.status(200);
            res.json(resultado);
        }
    }
    catch(erro){
        console.log("Erro no endpoint produtos GET por id")
        console.log(erro)
    }
})
api.listen(porta, () =>{
    console.log("API está na pala na porta 3500")
})