import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZaNQifX6S7YhPPRJByeYlmhvHL6HYdI4",
  authDomain: "hdt-jsi15.firebaseapp.com",
  projectId: "hdt-jsi15",
  storageBucket: "hdt-jsi15.appspot.com",
  messagingSenderId: "375118499441",
  appId: "1:375118499441:web:6ee208a78019ce08e695d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("db: ", db);
// db.settings({ timestampsInSnapshóts: true })