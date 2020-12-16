import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDC_WHDbv5S6lrySMOgcSZ9k_I4XEKVS1Y",
    authDomain: "whats-app-clone-a7d13.firebaseapp.com",
    projectId: "whats-app-clone-a7d13",
    storageBucket: "whats-app-clone-a7d13.appspot.com",
    messagingSenderId: "915942040196",
    appId: "1:915942040196:web:15a38e6cc29f98d223d8d1",
    measurementId: "G-LW23MR49HM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;