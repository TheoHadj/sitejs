class Salarie{
    nom:string;
    prenom:string;
    salaire: number;
    nbMois : number;
    charges: number;
    constructor(nom:string, prenom:string, salaire:number, nbMois:number){
        this.nom = nom;
        this.prenom = prenom;
        this.salaire = salaire;
        this.nbMois= nbMois;
        this.charges = 90;

    }

    getPersonne(){
        return [this.nom, this.prenom, this.salaire, this.nbMois, this.charges];
    }
}


class PME{
    nom:string;
    listSalarie:Array<Salarie>;
    revenus:number;
    fraisFixes:number;
    fraisAchat:number;
    constructor(nom:string,listSalarie:Array<Salarie>,revenus:number,fraisFixes:number,fraisAchat:number){
        this.nom = nom;
        this.listSalarie = listSalarie;
        this.revenus = revenus;
        this.fraisFixes= fraisFixes;
        this.fraisAchat = fraisAchat;

    }
}


let listSalarie=[
    new Salarie("Julien", "Julien",2000,12),
    new Salarie("John", "Doe",3000,12),
    new Salarie("Marie", "Marie",4000,12)
]
let pme = new PME("laPME", listSalarie,300000,20000,50000)



let cout:number=0;
for(let sala of pme.listSalarie){
    cout+=sala.nbMois*sala.salaire;
}
cout*=1.9;

console.log(pme.nom + " - : Cout Initial : " + pme.fraisAchat +pme.fraisFixes)
console.log(pme.nom + " - : Cout Total Equipe: " + cout )
console.log(pme.nom + " - : VENTES : " + pme.revenus)
console.log(pme.nom + " - : Cout BILAN : " +  (pme.revenus - (pme.fraisAchat +pme.fraisFixes + cout)).toString())