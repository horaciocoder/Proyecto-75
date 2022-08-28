import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCdnkGRN_29ncS7JTBmSC83Kjm1UvWdj6Y",
  authDomain: "travesia-digital-960cb.firebaseapp.com",
  projectId: "travesia-digital-960cb",
  storageBucket: "travesia-digital-960cb.appspot.com",
  messagingSenderId: "853235316493",
  appId: "1:853235316493:web:fd465773ec3610e37f2244",
  measurementId: "G-021GGNKX8Y"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
