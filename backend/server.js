const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
    {
        nome: "Teclado Mecânico",
        preco: 199.90,
        categoria: "Periféricos",
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
    },
    {
        nome: "Mouse Gamer",
        preco: 89.90,
        categoria: "Periféricos",
        imagem: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
    },
    {
        nome: "Headset Gamer",
        preco: 149.90,
        categoria: "Áudio",
        imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    }
];

app.get("/", (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor funcionando!");
});