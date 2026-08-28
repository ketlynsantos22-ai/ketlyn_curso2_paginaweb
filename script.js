const botao = document.querySelector("button");
botao.addEventlistener("click", botaoCoilicado);

function botaoclicado(){
    let texto = botao.querySelector("span");
    texto.textContent++;
}
