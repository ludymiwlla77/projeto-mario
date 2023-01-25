const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModa(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModa();
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {
    alternarModa();
    video.setAttribute("src", "");
})

