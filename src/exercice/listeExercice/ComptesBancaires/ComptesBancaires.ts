class CompteBancaire {
    nom: string;
    solde: number;

    constructor(nom: string) {
        this.nom = nom;
        this.solde = 0;
    }

    public crediter(montant: number): void {
        this.solde += montant;
        console.log(`Ajout de: ${montant} pour: ${this.nom}`);

    }

    public retirer(montant: number) {
        if (montant > this.solde) {
            console.log(`${this.nom}, retrait de ${montant} refusé avec solde: ${this.solde}`);
            
        }
        else{
            this.solde -= montant;
            console.log(`Retrait de: ${montant} pour:${this.nom}`);
        }
    }

    public virement(destinataire: CompteBancaire, montant: number){
        if (montant > this.solde) {
            console.log(`Impossible de virer ${montant}. Solde insuffisant pour ${this.nom}.`);
        }
        else{
            this.retirer(montant);
            destinataire.crediter(montant);
            console.log(`Virement de ${montant} de ${this.nom} à ${destinataire.nom}`);

        }
    }

    public afficherSolde() {
        console.log(`titulaire: ${this.nom}, solde: ${this.solde}`);
    }
}


let cbAlex = new CompteBancaire("Alex");
let cbClovis = new CompteBancaire("Clovis");
let cbMarco = new CompteBancaire("Marco");


cbAlex.crediter(1000);
cbClovis.crediter(1000);
cbMarco.crediter(1000);

cbAlex.retirer(100);

cbMarco.virement(cbClovis,300)

cbAlex.retirer(1200);

cbAlex.afficherSolde();
cbClovis.afficherSolde();
cbMarco.afficherSolde();