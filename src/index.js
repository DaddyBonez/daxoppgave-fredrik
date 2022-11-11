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

const colRef = collection(db, 'daxoppg')

getDocs(colRef)
  .then((snapshot) => {
    let daxoppg = []
    snapshot.docs.forEach((doc) => {
        daxoppg.push({ ...doc.data(), id: doc.id })
    })
    console.log(daxoppg)
  })
  .catch(err => {
    console.log(err.message)
  })



