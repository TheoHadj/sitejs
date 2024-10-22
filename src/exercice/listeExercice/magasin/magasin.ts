class Produit {
    private nom:string;
    private prix:number;
    private qtt:number;
    line = document.createElement("div")


    constructor(nom:string, prix:number,qtt:number){
        this.nom = nom;
        this.prix = prix;
        this.qtt = qtt;
    }

    getProduit(){
        return this;
    }
    getProductName(){
        return this.nom;
    }
    getProductQtt(){
        return this.qtt;
    }


    isDisponible(){
        if(this.qtt > 0){
            return true;
        }
        else{return false;}
    }

    emprunter(){
        if(this.isDisponible()){
            this.qtt -= 1
        }
        else{
            throw "Ce produit n'a plus de stock"
        }
    }

}

class Magasin {
    private listProduit:Array<Produit>=[new Produit("a",1,1),new Produit("b",10,12),new Produit("c",30,0),new Produit("d",12,4),new Produit("d",1,1),new Produit("e",10,1)];

    getAllProduct(){
        return this.listProduit;
    }
    addProduct(product:Produit){
        this.listProduit.push(product);
    }
    findProductByName(productName:String){
        for(let product of this.listProduit){
            if(product.getProductName()==productName){
                return product;
// On part sur la base de : Chaque produit a un nom unique
            }
        }

        throw "Ce produit n'existe pas";
    }

}





// let productTest = new Produit("a",1,1);
// let productTest2 = new Produit("a",1,1);

let magasin = new Magasin;
let app = document.querySelector('#product');


for(let product of Object.entries(magasin.getAllProduct())){
    displayP(product[1]);  
}


let search = document.createElement("div")
let searchInput = document.createElement("input");
searchInput.placeholder="Product name";
let searchButton = document.createElement("button");
searchButton.textContent="Recherche";
let er = document.createElement("div");
searchButton.addEventListener("click", () => {
    console.log("aaaa")
    er.textContent="";

    try{
        let prod = magasin.findProductByName(searchInput.value);
        displayP(prod);
    }
    catch(e){
        er.textContent=("Ce produit n'existe pas");
        search.append(er);
    }

})

search.appendChild(searchInput)
search.appendChild(searchButton)

app?.append(search)
try{
    let prod = magasin.findProductByName("abc");
    console.log(prod)

} catch(e){

    console.log(e)
}



function displayP(product:Produit){
    let produit = document.createElement('div')
    console.log(product.getProduit())
    console.log(product)
    
    // for(let [key,value] of Object.entries(product.getProduit())){
    //     console.log(key, ":", value)
    // }
    let titleProduct = document.createElement('h3');
    titleProduct.textContent=product.getProductName();
    produit.appendChild(titleProduct);
    let btnEmprunter = document.createElement("button");
    let emprResp = document.createElement('div'); 
    btnEmprunter.textContent="Emprunter"
    btnEmprunter.addEventListener("click", () =>{ 
        try{
            product.emprunter();
            // btnEmprunter.disabled=true; 
            emprResp.textContent = `Produit emprunter avec succès, Stock restant : ${product.getProductQtt()}`;
    
        }
        catch (e){
            
            emprResp.textContent=`${product.getProductName()} n'est pas en stock`;
            console.log(e)
        }
        
    })
    
    produit.appendChild(emprResp)
    produit.appendChild(btnEmprunter)
    app?.append(produit);

}