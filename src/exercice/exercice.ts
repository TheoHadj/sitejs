console.log("CoucouEXO")

let listExercice = ["exercice1","exercice2","exercice3","IMC","apiPokemon"]
let link;
let path;

let app = document.querySelector('.app');
let name = document.createElement('h2');
name.textContent = "Bienvenue dans la section exercice";

app?.append(name);


for(let exercice of listExercice){
    path=exercice; 
    link = document.createElement('a');
    link.className = 'nav-link active';
    link.href = "./listeExercice/" + exercice+ "/" + exercice + ".html";


    link.textContent = exercice;
    app?.append(link);  
}