class Imc{
    nom:string;
    poids:number;
    taille: number;
    imc : number;
    constructor(nom:string, poids:number, taille:number){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
        this.imc=parseFloat((this.poids / (this.taille * this.taille)).toFixed(2));

    }

    getPersonne(){
        return [this.nom, this.poids, this.taille, this.imc];
    }
}

let listPersonne = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
];

let app = document.querySelector('.app');
console.log("IMC");



for(let personne of listPersonne){
    let line = document.createElement('ul');
    for(let attr of personne.getPersonne()){
        let att = document.createElement('ol');
        att.textContent = attr.toString();
        line.appendChild(att)
    }
    app?.append(line)
}