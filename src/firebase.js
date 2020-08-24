import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDcFueCU1lfXl7rdMmCzXBNEJDn9GgQmuI",
    authDomain: "portfolio-a3c4a.firebaseapp.com",
    databaseURL: "https://portfolio-a3c4a.firebaseio.com",
    projectId: "portfolio-a3c4a",
    storageBucket: "portfolio-a3c4a.appspot.com",
    messagingSenderId: "324512891787",
    appId: "1:324512891787:web:abc802d2347c7353fea58e",
    measurementId: "G-8PQRXYP4LM"
})

const db = firebaseApp.firestore();

export default db;