import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyCOW_lP7Kq_grwNuQNi5uiavBs5h4PKv2Y",
  authDomain: "clgphotoapp.firebaseapp.com",
  projectId: "clgphotoapp",
  storageBucket: "clgphotoapp.appspot.com",
  messagingSenderId: "286978240483",
  appId: "1:286978240483:web:3085600949c303bc943ad6",
  measurementId: "G-2QCQNH8C4N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
