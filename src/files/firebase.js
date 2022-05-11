import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAHLahWC9SHW41mHuoc_XMKdvDVAxO1DNs",
    authDomain: "library-management-syste-1ea94.firebaseapp.com",
    databaseURL: "https://library-management-syste-1ea94-default-rtdb.firebaseio.com",
    projectId: "library-management-syste-1ea94",
    storageBucket: "library-management-syste-1ea94.appspot.com",
    messagingSenderId: "243559752251",
    appId: "1:243559752251:web:72e673518464579b51b21e",
    measurementId: "G-236N8ZR8W6"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;