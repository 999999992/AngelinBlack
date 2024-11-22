function openModal(src, caption) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");
    
    modal.style.display = "flex";
    modal.style.flexDirection = "column"
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modalImg.src = src;
    modalCaption.innerHTML = caption;
    document.getElementById("modal-video").style.display = "none"; // Ocultar video
}

function openVideoModal(videoSrc, caption) {
    const modal = document.getElementById("modal");
    const modalVideo = document.getElementById("modal-video");
    const modalCaption = document.getElementById("modal-caption");
    
    modal.style.display = "flex";
    modal.style.flexDirection = "column"
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modalVideo.src = videoSrc;
    modalVideo.style.display = "block"; // Mostrar video
    modalCaption.innerHTML = caption;
    document.getElementById("modal-img").style.display = "none"; // Ocultar imagen
}

function closeModal() {
    const modal = document.getElementById("modal");
    const modalVideo = document.getElementById("modal-video");
    
    modal.style.display = "none";
    document.getElementById("modal-img").style.display = "block"; // Mostrar imagen
    modalVideo.style.display = "none"; // Ocultar video
    modalVideo.pause(); // Detener la reproducción del video
    modalVideo.currentTime = 0; // Reiniciar el video al inicio
}
