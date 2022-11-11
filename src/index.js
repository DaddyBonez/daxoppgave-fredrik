  console.log('gaming')


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

getDocs(colRef)
  .then((snapshot) => {
    let Users = []
    snapshot.docs.forEach((doc) => {
        Users.push({ ...doc.data(), id: doc.id })
    })
    console.log(Users)
  })
  .catch(err => {
    console.log(err.message)
  })

  const loginForm = document.querySelector('.login')
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault()
      getDocs(colRef).then((snapshot) => {
        let users = []
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id })
        })
        users.forEach((item) => {
          if (item.username == loginForm.username.value && item.password === loginForm.password.value) {
            console.log('succes');
            formWrapper.classList.add('d-none');
          }
        })
      })
  })
