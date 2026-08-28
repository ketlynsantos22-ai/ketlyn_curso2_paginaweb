const botao = document.querySelector("button");
botao.addEventListener("click", botaoclicado);

function botaoclicado() {
    let texto = botao.querySelector("span");
    texto.textContent++;
}
