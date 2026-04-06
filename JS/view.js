
export function renderizar(lanches, editar, deletar) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  lanches.forEach((lanche, index) => {
    lista.innerHTML += `
      <div class="lanche">
        <strong>${lanche.nome}</strong><br>
        💰 R$ ${lanche.preco}

        <div class="ingredientes">
          🧾 Ingredientes: ${lanche.ingredientes.join(", ")}
        </div>

        <div class="acoes">
          <button onclick="editar(${index})">Editar</button>
          <button onclick="deletar(${index})">Excluir</button>
        </div>
      </div>
    `;
  });
}

export function pegarDadosFormulario() {
  return {
    nome: document.getElementById("nome").value,
    preco: document.getElementById("preco").value,
    ingredientes: document.getElementById("ingredientes").value
  };
}

export function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("ingredientes").value = "";
}

export function preencherFormulario(lanche) {
  document.getElementById("nome").value = lanche.nome;
  document.getElementById("preco").value = lanche.preco;
  document.getElementById("ingredientes").value = lanche.ingredientes.join(", ");
}

