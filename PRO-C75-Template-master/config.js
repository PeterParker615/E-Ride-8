import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDpiW24jUmev12cZLjrRqa0z4rXHQpb7cU",
  authDomain: "e-ride-7179f.firebaseapp.com",
  projectId: "e-ride-7179f",
  storageBucket: "e-ride-7179f.appspot.com",
  messagingSenderId: "1079002962883",
  appId: "1:1079002962883:web:d8cc812ab1d75bc4b5fb76"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
