const botaoAlterarTema = document.getElementById("botao-alterar");
const button = document.querySelector("button");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscutoEstaAtivo = button.classList.contains("modo-alterar");

    button.classList.toggle("modo-alterar");
})
