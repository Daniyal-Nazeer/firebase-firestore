import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyABlaggjMWgo8q17WplEWtCvlmqKTe9maE",
  authDomain: "fir-auth-7a105.firebaseapp.com",
  projectId: "fir-auth-7a105",
  storageBucket: "fir-auth-7a105.appspot.com",
  messagingSenderId: "773297731112",
  appId: "1:773297731112:web:ffd58f96217d269747671d",
  measurementId: "G-57XG948YKY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);