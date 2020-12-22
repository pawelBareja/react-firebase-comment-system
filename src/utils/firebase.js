import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOiNRODXmIP8h0tRXI1951c5Q_5u2jKSg",
  authDomain: "comments-system-74171.firebaseapp.com",
  projectId: "comments-system-74171",
  storageBucket: "comments-system-74171.appspot.com",
  messagingSenderId: "649441903279",
  appId: "1:649441903279:web:8ad6f054bf401e2b22ca5a",
});

const db = firebaseApp.firestore();

export default db;
