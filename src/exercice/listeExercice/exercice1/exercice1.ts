console.log("Coucou");
let i=0;
let app = document.querySelector('.app');
let title = document.createElement('h1')
title.textContent = "Exercice 1";
title.style.backgroundColor="black";
title.style.color = "white";
title.addEventListener('click',()=>{
    if(i%2==0){
        title.style.backgroundColor="white";
        title.style.color = "black";
    }
    else{
        title.style.backgroundColor="black";
        title.style.color = "white";
    }
    i++;
})
let input=document.createElement('input');
let writeInput=document.createElement('h1')
input.addEventListener('keydown',()=>{
    writeInput.textContent= input.value;
    localStorage.setItem("input",input.value); 
})

// input.addEventListener('keyup',()=>{
//     writeInput.textContent= input.value;
// })



app?.append(title);
app?.append(input);
app?.append(writeInput);
