import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBSE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBSE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBSE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBSE_MESSEGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBSE_APP_ID,
});

const db = firebaseApp.firestore();

export default db;
