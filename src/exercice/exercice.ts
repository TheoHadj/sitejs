console.log("CoucouEXO")

let listExercice = ["/listeExercice/exercice1/","/listeExercice/exercice2/","/listeExercice/exercice3/"]
let link;
let path;

let app = document.querySelector('.app');
let name = document.createElement('h2');
name.textContent = "Bienvenue dans execrice";



for(let exercice of listExercice){
    path=exercice; 
    link = document.createElement('a');
    link.className = 'nav-link active';
    link.href = exercice + "exercice" + exercice[23] + ".html";


    link.textContent = "exercice " + exercice[23];
    app?.append(link);  
}

app?.append(name);