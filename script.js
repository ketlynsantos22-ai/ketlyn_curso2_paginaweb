const botao = document.querySelector("button");
botao .addEventlistener("click", botaoclicado);

function botaoclicado(){
    let texto = botao.querySelector("span");
    texto.textContent++;
}
