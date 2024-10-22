// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap';

console.log("Hemmqslmd")
let app = document.querySelector(".app");
let h1 = document.createElement("h1");
h1.textContent = localStorage.getItem("input") + " => LocalStorage";
let h2 = document.createElement("h2");
h2.textContent = "Bienvenue sur la page Home"
app?.append(h1)
app?.append(h2)



// fetch('https://y4e1hazwu7.execute-api.eu-west-3.amazonaws.com/f/theo');


 