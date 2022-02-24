import firebase from "firebase";

const firebsaeApp = firebase.initializeApp({
    apiKey: "AIzaSyBbpUFD3mPTt-GpAIQ2Ns3P9iYWTrNQBAY",
  authDomain: "instagram-clone-react-befa3.firebaseapp.com",
  projectId: "instagram-clone-react-befa3",
  storageBucket: "instagram-clone-react-befa3.appspot.com",
  messagingSenderId: "222935542236",
  appId: "1:222935542236:web:f9234dfaabd99160170719",
  measurementId: "G-X5S01MWYZ3"
});

const db = firebaseApp.firestroe();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};