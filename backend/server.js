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
        imagem: "https://cdn.oderco.com.br/produtos/317919/4BAA10CF7A3A546AE0630300A8C0BF9A"
    },
    {
        nome: "Mouse Gamer",
        preco: 89.90,
        categoria: "Periféricos",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8YNx_RRPtKhM8fPcmNuSoRjstjW0Dxc2FWJGeng3JXar6iLj5Aue9D7D&s=10"
    },
    {
        nome: "Headset Gamer",
        preco: 149.90,
        categoria: "Áudio",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEgtSyyAMGKlMr9A2bhudSwWHs-x27OVNap-Z_R7tgfLYs-FQ5RtKl9k&s=10"
    }
];

app.get("/", (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});