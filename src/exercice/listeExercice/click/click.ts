let app = document.querySelector(".app");
console.log('abbd')
let canva = document.createElement('div');
canva.style.width="100vw";
canva.style.height="100vw";
canva.style.position ="relative";
app?.appendChild(canva);

canva.addEventListener('click', function(event) {
    // console.log('X:', event.clientX, 'Y:', event.clientY);

    console.log(event)
    let img = document.createElement('img');
    img.src = '/src/assets/image.jpg';
    img.style.position = 'absolute';
    img.style.left = event.clientX + 'px';
    img.style.top = event.clientY + 'px';

    app?.append(img);
})