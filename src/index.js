import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, onSnapshotsInSync
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAGOlbdFxHgMCRZO7yMBLykUkb3niZIgZQ",
    authDomain: "daxoppg.firebaseapp.com",
    projectId: "daxoppg",
    storageBucket: "daxoppg.appspot.com",
    messagingSenderId: "31736140212",
    appId: "1:31736140212:web:6c74537a1ed8785826a2e1"
  }

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'Users')

const numRef = collection(db, 'counter')

var userdata

var counter

getDocs(colRef)
  .then((snapshot) => {
    let Users = []
    snapshot.docs.forEach((doc) => {
        Users.push({ ...doc.data(), id: doc.id })
    })
    console.log(Users)
  userdata = Users;})
  .catch(err => {
    console.log(err.message)
  })
  
  getDocs(numRef)
  .then((snapshot) => {
    let nums = []
    snapshot.docs.forEach((doc) => {
        nums.push({ ...doc.data(), id: doc.id })
    })
  counter = nums; console.log(counter);})
  .catch(err => {
    console.log(err.message)
  })

 


  const loginForm = document.querySelector('.login')

/*    loginForm.addEventListener('submit', (e) => {
      e.preventDefault()
        users.forEach((item) => {
          if (item.username == loginForm.username.value && item.password === loginForm.password.value) {
            console.log('succes');
            formWrapper.classList.add('d-none');
          }
        })
      }) */
const shit = document.querySelector(".login")
shit.addEventListener("submit", e => {
  e.preventDefault()
  let p = 'p'
  if(userdata[0].username == shit.username.value) {
        console.log(('squidward'));
         document.querySelector('#title').textContent = counter[0].counternum
  } else {
    alert("Wrong Username or password.");
  }
  console.log(shit.username.value);
  console.log(shit.password.value);
});

