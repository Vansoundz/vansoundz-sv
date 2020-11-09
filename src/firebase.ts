// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import store from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBa9nAt-K1BJ62LrpFuxgAHypXX-ShnZ0Y",
  authDomain: "vansoundz.firebaseapp.com",
  databaseURL: "https://vansoundz.firebaseio.com",
  projectId: "vansoundz",
  storageBucket: "vansoundz.appspot.com",
  messagingSenderId: "965402537402",
  appId: "1:965402537402:web:8733a1ce96266aa8a50183",
  // measurementId: "G-HPDJLK57NQ"
};

const fb = firebase.initializeApp(firebaseConfig);
const firestore = fb.firestore();

export { firestore };
