// class Pokemon {
//     constructor(name,url){
//         this.name = name;
//         this.url =  url;
//     }
// }

let app = document.querySelector(".app")
let title = document.createElement('h1');
title.textContent = "Les 20 premiers Pokemons";
app?.append(title);

let pokemonData : Array<any> = [] ;
console.log("abc");

fetch('https://pokeapi.co/api/v2/pokemon').then(response => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    console.log(response)
    return response.json();
}).then(data => {
    console.log(data);
    pokemonData=data['results'];
    console.log(pokemonData);
}).catch(error => {
    console.error(error);
}).then(()=> {

    let i = 0;
    for(let pokemon of pokemonData){
        console.log(i);
        i++
        console
        let line = document.createElement('ul');
        line.textContent = pokemon.name;
        app?.append(line);
    }
})
