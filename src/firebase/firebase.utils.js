import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDHA4TQP_ksyWTmp6q-vyHP-qnA-1koAmU",
  authDomain: "ecommerce-shop-5c8ad.firebaseapp.com",
  databaseURL: "https://ecommerce-shop-5c8ad.firebaseio.com",
  projectId: "ecommerce-shop-5c8ad",
  storageBucket: "ecommerce-shop-5c8ad.appspot.com",
  messagingSenderId: "698667517346",
  appId: "1:698667517346:web:5eb9c3234e7070382b5efb",
  measurementId: "G-4EG0NV2TJ7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
