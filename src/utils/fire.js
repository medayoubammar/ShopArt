import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyDXmeUBaYlExFrp9Bshtt68TYVtO1UwZgU",
    authDomain: "reactauth-22893.firebaseapp.com",
    databaseURL: "https://reactauth-22893-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reactauth-22893",
    storageBucket: "reactauth-22893.appspot.com",
    messagingSenderId: "1089318689335",
    appId: "1:1089318689335:web:041d169b9e049ebbbffdb2"
  };
  
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase(app);
