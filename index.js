// window.document.body.innerHTML += "teste";
const conteudo = window.document.querySelector(".content");
// conteudo.innerHTML += "teste";
// conteudo.style.background = "red";
let top = "60%";

function sim() {
  const btnSim = window.document.querySelector(".sim");
  let num = 0;
  if (num === 0) {
    btnSim.style.top = "100%";
    btnSim.style.background = "red";
  }
}

function nao() {
  alert("funcionou o não");
}
