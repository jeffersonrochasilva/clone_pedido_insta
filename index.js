let num = 0;

function sim() {
  const btnSim = window.document.querySelector(".sim");
  console.log(num, "num");
  if (num === 0) {
    btnSim.style.left = "50%";
    num = 1;
  } else if (num === 1) {
    btnSim.style.top = "50%";
    num = 2;
  } else if (num === 2) {
    btnSim.style.top = "70%";
    btnSim.style.left = "55%";
    num = 3;
  } else if (num === 3) {
    btnSim.style.top = "80%";
    btnSim.style.left = "55%";
    num = 4;
  } else if (num === 4) {
    btnSim.style.top = "60%";
    btnSim.style.left = "63%";
    num = 0;
  }
}
const title = window.document.querySelector(".text");
const image = window.document.querySelector(".emoticon");
function nao() {
  title.innerHTML = "Que Pena.. : (";
  image.innerHTML = "&#128531;";
}
