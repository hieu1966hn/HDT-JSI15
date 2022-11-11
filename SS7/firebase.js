import { collection, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

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


const cafeList = document.getElementById("cafe-list");
const form = document.getElementById("add-cafe-form");



//// Create element & render cafe
function renderCafe(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = "x";


  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  cafeList.appendChild(li);

  ///deleting data
  cross.addEventListener("submit", (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("cafes")
      .doc(id)
      .delete();
  })
}


///// saving data
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(
    getCafe(db)

  );

  db.collection("cafes").add({
    name: form.name.value,
    city: form.city.value
  })
})

async function getCafe(db) {
  const cafes = collection(db, 'cafes');
  const cafesSnapshot = await getDocs(cafes);
  const cafeList = cafesSnapshot.docs.map(doc => doc.data());
  return cafeList;
}

