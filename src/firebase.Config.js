// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQNGAqAFhsA-EImgoqzrGdy6sAOmtzXTA",
  authDomain: "vue-3-2023-61881.firebaseapp.com",
  projectId: "vue-3-2023-61881",
  storageBucket: "vue-3-2023-61881.appspot.com",
  messagingSenderId: "972918819425",
  appId: "1:972918819425:web:63e2a85a900285da3eb820"
};

// Initialize Firebase-Todavia no lo vamos a ejecutar:
//const app = initializeApp(firebaseConfig); solo dejamos el metodo:

initializeApp(firebaseConfig);

const auth = getAuth(); //metodo,getAuth() es una función proporcionada por Firebase que devuelve una instancia de autenticación que se puede utilizar para realizar acciones relacionadas con la autenticación de usuarios.

export {auth};


