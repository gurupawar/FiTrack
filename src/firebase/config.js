import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLgzZJJsmwcIRKlmpAJWbJ-lGJfdANisE",
  authDomain: "fitrack-2979c.firebaseapp.com",
  projectId: "fitrack-2979c",
  storageBucket: "fitrack-2979c.appspot.com",
  messagingSenderId: "153199650388",
  appId: "1:153199650388:web:19f1c9748c8f79a7eb2fc1",
};

firebase.initializeApp(firebaseConfig);

const ProjectFirebase = firebase.firestore();
const ProjectAuth = firebase.auth();
export { ProjectFirebase, ProjectAuth };
