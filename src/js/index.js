/*

OBEJETIVO:1 - quando usuario clicar no botao veja o trailer  devemos abrir a modal com video trailer

OBEJETIVO:2 - quando usuario clicar no x devemos fechar a modal

objetivo 1:
   passo 1- dar um jeito de pegar o elemento que representa o botao na tela usando o js 
   passo 2- dar um jeito de indentificar quando o usuario clicar no botao
   passo 3- dar um jeito de pegar o elemento modal no js
   passo 4 - abrir modal na tela
OBEJETIVO:2 - quando o usuario clicar no botão x fechar a modal
   passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js
   passo 2 - dar um jeito de indentificar quando o usuario clicar no X
   passo 3 - fechar  a modal
 */

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}


botaoTrailer.addEventListener("click", () => {
    alternarModal();
video.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "")
});

