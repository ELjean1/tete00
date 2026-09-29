async function carregarDados() {
    const url = "https://expert-space-broccoli-vpq4v457x6r9hp67p-3000.app.github.dev/";

    const resposta = await fetch(url);

    const produtos = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = produtos.map(produto => `
        <div class="card">
            <img src="${produto.imagem}" alt="${produto.nome}">

            <h2>${produto.nome}</h2>

            <p>Categoria: ${produto.categoria}</p>

            <p class="preco">
                R$ ${produto.preco.toFixed(2).replace(".", ",")}
            </p>
        </div>
    `).join("");
}

carregarDados();