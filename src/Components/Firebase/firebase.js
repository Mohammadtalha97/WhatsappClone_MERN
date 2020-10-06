import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqbSYWJSJrYiKHl45Q4njpLwl41kblHIY",
  authDomain: "whatsapp-part-1.firebaseapp.com",
  databaseURL: "https://whatsapp-part-1.firebaseio.com",
  projectId: "whatsapp-part-1",
  storageBucket: "whatsapp-part-1.appspot.com",
  messagingSenderId: "1049876906412",
  appId: "1:1049876906412:web:3d3a0c3b1381bad55f7a09",
  measurementId: "G-4KTGSZEKT1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
