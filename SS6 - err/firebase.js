import { child, get, getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const userList = document.getElementById('user-list');

// connect firebase
const dbRef = ref(getDatabase());
console.log("dbRef: ", dbRef);

// get all data from 'users' collection
get(child(dbRef, `users`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.key, snapshot.val());
    const users = snapshot.val(); // Get the users
    // Update the DOM
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      userList.innerHTML +=
        `
          <li onclick="userClicked(${i})">${user.name}</li>
          `;
    }

  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});