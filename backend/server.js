const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produto = {
    nome: "Teclado Mecânico",
    preco: 199.90,
    categoria: "Periféricos"
};

app.get("/", (req, res) => {
    res.json(produto);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});