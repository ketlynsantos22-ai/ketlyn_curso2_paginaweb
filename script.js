const botao = document.querySelector("button");
botao.addEventlistener("click", botaoClicado);

function botaoclicado(){
    let texto = botao.querySelector("span");
    texto.textContent++;
}
