import firebase from "firebase/compat";
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaOVsJ1CalPDNgAMi19K9JpXBYuQxJtJs",
    authDomain: "chatapp-a1aff.firebaseapp.com",
    projectId: "chatapp-a1aff",
    storageBucket: "chatapp-a1aff.appspot.com",
    messagingSenderId: "243842531366",
    appId: "1:243842531366:web:2bd913727d7322659f66e7",
    measurementId: "G-WVJJB4NPZM"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics()

const auth = firebase.auth();
const db = firebase.firestore()
export {db,auth}
export default firebase