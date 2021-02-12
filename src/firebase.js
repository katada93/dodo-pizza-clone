import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBii0WaA-nLFladejLpEgkwHDgHA3FNsD0",
  authDomain: "dodo-pizza-f23a3.firebaseapp.com",
  projectId: "dodo-pizza-f23a3",
  storageBucket: "dodo-pizza-f23a3.appspot.com",
  messagingSenderId: "870865654199",
  appId: "1:870865654199:web:0cd2f45f4cd1ba366f5832"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db