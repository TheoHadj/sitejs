let app = document.querySelector(".app");
let canva = document.createElement('div');
canva.style.width="100vw";
canva.style.height="100vw";
canva.style.position ="relative";
app?.appendChild(canva);
let title = document.createElement("h1");
title.textContent = "TITRE CACHE"
title.style.display = "none";
canva.append(title);
canva.addEventListener('mouseleave', function() {
    console.log("souris hors écran");
    title.style.display = "block";


})
document.body.addEventListener('mouseenter', function() {
    console.log("souris sur l'écran");
    title.style.display = "none";


})
