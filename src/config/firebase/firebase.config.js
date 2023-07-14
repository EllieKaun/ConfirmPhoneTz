import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDG48ZwWJdKlE-y-MpkrZAGMTBXowihhmk",
  authDomain: "phone-confirm-tz.firebaseapp.com",
  projectId: "phone-confirm-tz",
  storageBucket: "phone-confirm-tz.appspot.com",
  messagingSenderId: "385430664249",
  appId: "1:385430664249:web:79a439e9a32bb3078d09e8",
};

firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
export { auth, firebase };
