const express = require("express")
const porta = process.env.PORT || 3500;
const api = express();

api.get("/produtos", (req, res) => {
    res.send("Acessei a pala pelo GET");
})

api.post("/produtos", (req, res) => {
    res.send("Acessei a pala pelo POST");
})

api.listen(porta, () =>{
    console.log("API está na pala na porta 3500")
})