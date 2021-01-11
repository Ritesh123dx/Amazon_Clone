// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBShkk1gFrTYNcuoWuJU8N9jxZvMMPNZQA",
    authDomain: "clone-69853.firebaseapp.com",
    projectId: "clone-69853",
    storageBucket: "clone-69853.appspot.com",
    messagingSenderId: "209504230186",
    appId: "1:209504230186:web:5616b15934ffbe932edc53",
    measurementId: "G-3VQG1WVNRX"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };