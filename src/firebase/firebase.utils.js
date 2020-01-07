import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJt1xATxxFiYGxPds2GkCzEUkT2WHvYKM",
    authDomain: "kiki-clothing-db.firebaseapp.com",
    databaseURL: "https://kiki-clothing-db.firebaseio.com",
    projectId: "kiki-clothing-db",
    storageBucket: "kiki-clothing-db.appspot.com",
    messagingSenderId: "159255937804",
    appId: "1:159255937804:web:500ec69fc3d95efbd0bf29",
    measurementId: "G-89SET5FDG5"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;