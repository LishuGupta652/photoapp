import * as firebase from './firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAV0MIc7nJ5bt2R3eEvroWL9-tuByzkkz8",
    authDomain: "coding-cosmos.firebaseapp.com",
    databaseURL: "https://coding-cosmos.firebaseio.com",
    projectId: "coding-cosmos",
    storageBucket: "coding-cosmos.appspot.com",
    messagingSenderId: "536522201509",
    appId: "1:536522201509:web:757a57ccd738551e79b04c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);   

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore};