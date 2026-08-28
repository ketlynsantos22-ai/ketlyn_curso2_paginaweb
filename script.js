const botao = document.querySelector("button");
botao.addEventlistener("click", botaoclicado);

function botaoClicado() {
    let texto = botao.querySelector("span");

 texto.textContent++;
  }
