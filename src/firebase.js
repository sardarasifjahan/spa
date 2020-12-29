import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCG3WYbcsN4VFD1wb3_aGTC6HzxyXA0YU4",
  authDomain: "spademo1-e27c4.firebaseapp.com",
  projectId: "spademo1-e27c4",
  storageBucket: "spademo1-e27c4.appspot.com",
  messagingSenderId: "1053829808913",
  appId: "1:1053829808913:web:0f64dc9cdb54c57a1602b0",
  measurementId: "G-1PJQNJHPG0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;
