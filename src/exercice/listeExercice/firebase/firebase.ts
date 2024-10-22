// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, child, remove } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG_xfxc3ySqx3GJMxfmTbBe1geC_jLabg",
  authDomain: "coursjs-6bd27.firebaseapp.com",
  databaseURL: "https://coursjs-6bd27-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "coursjs-6bd27",
  storageBucket: "coursjs-6bd27.appspot.com",
  messagingSenderId: "248237640246",
  appId: "1:248237640246:web:6acc0a3e774016ca18e697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

// On va également faire une ref directement dans le noeud / """"table""""" users






// const usersRef = database.child("users");




const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI?.addEventListener("click", addUserBtnClicked);
const formUserUI = document.getElementById("add-user-form");
formUserUI?.addEventListener("submit", (event) => event.preventDefault());
const formUserEditUI = document.getElementById("edit-user-module");
formUserEditUI?.addEventListener("submit", (event) => event.preventDefault());
const userListUI = document.getElementById("user-list");
const userDetailUI = document.getElementById("user-detail");
// let userid ="0"; 
// readUserData(userid);
writeUserData("id","skqdjhfqsdf","qslkdjfqmsdj");
readUserData("id");
deleteUserData("id");
readUserData("id");

function addUserBtnClicked() {
};
function readUserData(userId:any) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("Pas de données disponibles");
      }
    }).catch((error) => {
      console.error("Erreur lors de la lecture :", error);
    });
  }
function userClicked(event:any) {
};
function editButtonClicked(event:any) {
};
function saveUserBtnClicked() {
};
function deleteButtonClicked(event:any) {
}

function deleteUserData(userId:any) {
    // const db = getDatabase();
    remove(ref(database, 'users/' + userId)).then(() => {
      console.log("Données écrites avec succès !");
    }).catch((error) => {
      console.error("Erreur lors de l'écriture :", error);
    });
  }


function writeUserData(userId:any, name:string, email:string) {
    // const db = getDatabase();
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email
    }).then(() => {
      console.log("Données écrites avec succès !");
    }).catch((error) => {
      console.error("Erreur lors de l'écriture :", error);
    });
  }