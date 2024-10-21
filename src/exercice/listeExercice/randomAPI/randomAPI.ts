
function getApi(){
    let line = document.createElement("ul");
    line.textContent="user"; 
    let btn = document.createElement('button');
    btn.textContent="Charger l'user"
    btn.addEventListener('click', () => { if(app){app.innerHTML = ""}; getApi()})
    app?.append(btn)

    fetch('https://randomuser.me/api/').then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        console.log(response);
        return response.json()}).then(data=> {
            data = data.results[0]
            console.log(data)

            let img = document.createElement("img");
            img.src = data["picture"]["large"];
            app?.append(img);
            let desc = document.createElement('ul');
            desc.textContent = `${data['name']["title"]} ${data['name']["first"]} ${data['name']["last"]}`
            app?.append(desc);
            let email = document.createElement('ul')
            email.textContent = `${data['email']}`
            app?.append(email);
            let loc = document.createElement('ol');
    
            for(let [key,value] of Object.entries(data['location']) ){
                if(key =='street'){
                    let row = document.createElement('ol');
                    for(let key in data['location']["street"]){
                        let line = document.createElement('ul');
                        line.textContent = data['location']["street"][key]
                        row.appendChild(line)
                    }
                    loc.appendChild(row)
                }
                else if (key =="coordinates"||key =="timezone"){
                    continue
                }
                else{
                    
                    let line = document.createElement('ul');
                    line.textContent = data['location'][key];
                    loc.appendChild(line)
                }
            }
            app?.append(loc)
    
            let phone = document.createElement("ul")
            phone.textContent = data["phone"]
            app?.append(phone)
    
    
        }).catch(error => { 
            console.log(error); 
            let er = document.createElement("h1");
            er.textContent="Erreur"
            app?.append(er)})
    }

    let app = document.querySelector("#userCard");

    getApi();
