// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, child, remove } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';



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

let appDiv = document.querySelector('#todoList')
let todoList= document.createElement('ul');

function readAllTask() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `task`)).then((snapshot) => {
      if (snapshot.exists()) {

        console.log(snapshot.val());
        // todoList.style.display = "flex";


        let addTaskLine = document.createElement('li');
        addTaskLine.style.background="white";

        let inputTitle = document.createElement('input');
        inputTitle.value = "Title"
        let inputContent = document.createElement('input');
        inputContent.value = "Content";


        let addTaskTxt = document.createElement('h3');
        // addTaskTxt.textContent="Txt";
        // addTaskLine.appendChild(addTaskTxt);

        let addTaskBtn = document.createElement('button');
        addTaskBtn.textContent = "Ajouter"
        addTaskBtn.addEventListener("click", () => writeTask(inputTitle.value, inputContent.value))
        addTaskLine.appendChild(addTaskBtn);
        addTaskLine.appendChild(inputTitle);
        addTaskLine.appendChild(inputContent);
        addTaskLine.style.listStyle="none",
        addTaskLine.style.marginBottom="1%",
        todoList.appendChild(addTaskLine)


        Object.keys(snapshot.val()).forEach(key => {
            console.log(snapshot.val()[key])
            let todoTask = document.createElement('li');
            todoTask.style.listStyle="none"
            todoTask.style.display="flex"

            todoTask.style.marginBottom="1%"
            todoTask.id=key;

            console.log(key)
            todoTask.style.background="white";
            let taskTitle = document.createElement('h3');
            taskTitle.textContent=snapshot.val()[key]['title']
            taskTitle.style.display = "flex"
            taskTitle.style.textAlign="start"
            taskTitle.style.width = "40%"
            let taskContent = document.createElement('p');
            taskContent.textContent=snapshot.val()[key]['content']
            taskContent.style.textAlign="start"
            taskContent.style.marginLeft="10px"
            taskContent.style.width="80%"

            let taskRmBtn= document.createElement('button');
            taskRmBtn.textContent="Supprimer";
            taskRmBtn.style.display = "flex";
            taskRmBtn.style.marginLeft ="auto";


            taskRmBtn.addEventListener("click", () => deleteTask(key));

            todoTask.appendChild(taskTitle);
            todoTask.appendChild(taskContent);
            todoList.appendChild(todoTask);
            todoTask.appendChild(taskRmBtn);

      });
        appDiv?.append(todoList);
      } else {
        console.log("Pas de données disponibles");
      }
    }).catch((error) => {
      console.error("Erreur lors de la lecture :", error);
    });
  }



function readTask(taskID:any) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `task/${taskID}`)).then((snapshot) => {
      if (snapshot.exists()) {
        let todoTask = document.createElement('li');
            todoTask.style.listStyle="none"
            todoTask.style.display="flex"

            todoTask.style.marginBottom="1%"
            todoTask.id=taskID;

            console.log(taskID)
            todoTask.style.background="white";
            let taskTitle = document.createElement('h3');
            taskTitle.textContent=snapshot.val()['title']
            taskTitle.style.display = "flex"
            taskTitle.style.textAlign="start"
            taskTitle.style.width = "40%"
            let taskContent = document.createElement('p');
            taskContent.textContent=snapshot.val()['content']
            taskContent.style.textAlign="start"
            taskContent.style.marginLeft="10px"
            taskContent.style.width="80%"

            let taskRmBtn= document.createElement('button');
            taskRmBtn.textContent="Supprimer";
            taskRmBtn.style.display = "flex";
            taskRmBtn.style.marginLeft ="auto";

            
            taskRmBtn.addEventListener("click", () => deleteTask(taskID));

            todoTask.appendChild(taskTitle);
            todoTask.appendChild(taskContent);
            todoList.appendChild(todoTask);
            todoTask.appendChild(taskRmBtn);
      } else {
      }
    }).catch((error) => {
      console.error("Erreur lors de la lecture :", error);
    });
  }

function updateTask(taskID:any) {
};


function deleteTask(taskID:any) {
    // const db = getDatabase();
    remove(ref(database, 'task/' + taskID)).then(() => {
      console.log("Données supprimées avec succès !");
      let taskToRm = document.getElementById(taskID);
      if(taskToRm){
        taskToRm.remove();

      }

      // let taskToRm = document.querySelector(`#${taskID}`);
    }).catch((error) => {
      console.error("Erreur lors de l'écriture :", error);
    });
  }


function writeTask(title:string, content:string ) {
    // const db = getDatabase();
    let uuid = uuidv4();
    set(ref(database, 'task/' + uuid), {
      title:title,
      content: content
    }).then(() => {
      console.log("Données écrites avec succès !");
      readTask(uuid)

    }).catch((error) => {
      console.error("Erreur lors de l'écriture :", error);
    });
  }




  // writeTask("titre de la tache1", "contenu de la tache");
  // writeTask("titre de la tache2", "contenu de la tache");
  // writeTask("titre de la tache3", "contenu de la tache");
  // writeTask("titre de la tache4", "contenu de la tache");
  // writeTask("titre de la tache5", "contenu de la tache");
  // writeTask("titre de la tache6", "contenu de la tache");
  // writeTask("titre de la tache7", "contenu de la tache");
  // writeTask("titre de la tache8", "contenu de la tache");
  // writeTask("titre de la tache9", "contenu de la tache");
  // writeTask("titre de la tache10", "contenu de la tache");
  // writeTask("titre de la tache", "contenu de la tache");
  // writeTask("titre de la tache", "contenu de la tache");
  // writeTask("titre de la tache", "contenu de la tache");
  // writeTask("titre de la tache", "contenu de la tache");
  // writeTask("titre de la tache", "contenu de la tache");
  // writeTask("titre de la tache", "contenu de la tache");
  // writeTask("titre de la tache", "contenu de la tache");
  // writeTask("titre de la tache", "contenu de la tache");
  // writeTask("titre de la tache", "contenu de la tache");
  readAllTask()