
import { getLanches, setLanches } from "./service.js";
import { criarLanche } from "./model.js";
import * as view from "./view.js";

let editIndex = null;

function salvarLanche() {
  console.log("CLICOU"); // 👈 TESTE

  const { nome, preco, ingredientes } = view.pegarDadosFormulario();

  if (!nome || !preco || !ingredientes) {
    alert("Preencha todos os campos!");
    return;
  }

  const listaIngredientes = ingredientes.split(",").map(i => i.trim());

  let lanches = getLanches();
  const novoLanche = criarLanche(nome, preco, listaIngredientes);

  if (editIndex === null) {
    lanches.push(novoLanche);
  } else {
    lanches[editIndex] = novoLanche;
    editIndex = null;
  }

  setLanches(lanches);
  view.limparCampos();
  atualizarTela();
}

function editar(index) {
  const lanches = getLanches();
  view.preencherFormulario(lanches[index]);
  editIndex = index;
}

function deletar(index) {
  let lanches = getLanches();
  lanches.splice(index, 1);
  setLanches(lanches);
  atualizarTela();
}

function atualizarTela() {
  const lanches = getLanches();
  view.renderizar(lanches, editar, deletar);
}

// eventos
document.getElementById("btnSalvar").addEventListener("click", salvarLanche);

// global (para os botões da lista)
window.editar = editar;
window.deletar = deletar;

// inicialização
atualizarTela();

