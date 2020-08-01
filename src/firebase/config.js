import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAkAB1BZMM-EYDZUvzjWISvwRzf_s8VPHw",
    authDomain: "ninja-firegram-de03f.firebaseapp.com",
    databaseURL: "https://ninja-firegram-de03f.firebaseio.com",
    projectId: "ninja-firegram-de03f",
    storageBucket: "ninja-firegram-de03f.appspot.com",
    messagingSenderId: "320963039733",
    appId: "1:320963039733:web:0c15c4d2da0170f99fd0bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};
