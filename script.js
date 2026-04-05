let editIndex = null;

function getLanches() {
  return JSON.parse(localStorage.getItem("lanches")) || [];
}

function setLanches(lanches) {
  localStorage.setItem("lanches", JSON.stringify(lanches));
}

function salvarLanche() {
  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;
  const ingredientesInput = document.getElementById("ingredientes").value;

  if (!nome || !preco || !ingredientesInput) {
    alert("Preencha todos os campos!");
    return;
  }

  const ingredientes = ingredientesInput.split(",").map(i => i.trim());

  let lanches = getLanches();

  const novoLanche = { nome, preco, ingredientes };

  if (editIndex === null) {
    lanches.push(novoLanche);
  } else {
    lanches[editIndex] = novoLanche;
    editIndex = null;
  }

  setLanches(lanches);
  limparCampos();
  renderizar();
}

function renderizar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  const lanches = getLanches();

  lanches.forEach((lanche, index) => {
    lista.innerHTML += `
      <div class="lanche">
        <strong>${lanche.nome}</strong><br>
        💰 R$ ${lanche.preco}

        <div class="ingredientes">
          🧾 Ingredientes: ${lanche.ingredientes.join(", ")}
        </div>

        <div class="acoes">
          <button class="edit" onclick="editar(${index})">Editar</button>
          <button class="delete" onclick="deletar(${index})">Excluir</button>
        </div>
      </div>
    `;
  });
}

function editar(index) {
  const lanches = getLanches();

  document.getElementById("nome").value = lanches[index].nome;
  document.getElementById("preco").value = lanches[index].preco;
  document.getElementById("ingredientes").value = lanches[index].ingredientes.join(", ");

  editIndex = index;
}

function deletar(index) {
  let lanches = getLanches();
  lanches.splice(index, 1);
  setLanches(lanches);
  renderizar();
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("ingredientes").value = "";
}

renderizar();