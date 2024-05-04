import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAtdzbiEOBRJXHv90OmS5dQnytIjC1yGuw',
  authDomain: 'movie-mingle-fa3f5.firebaseapp.com',
  databaseURL: 'https://movie-mingle-fa3f5-default-rtdb.firebaseio.com',
  projectId: 'movie-mingle-fa3f5',
  storageBucket: 'movie-mingle-fa3f5.appspot.com',
  messagingSenderId: '941998964637',
  appId: '1:941998964637:web:1b1ca7ff26a30d3aad3974',
}

firebase.initializeApp(firebaseConfig)

// Initialize Firestore and Authentication
const db = firebase.firestore()
const auth = firebase.auth()

export {auth}
export default db
