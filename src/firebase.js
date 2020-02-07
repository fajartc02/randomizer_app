import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDOFFmS9PVIzZls1CJRMKFx2g_r2DcqvUI",
  authDomain: "randomizerprize.firebaseapp.com",
  databaseURL: "https://randomizerprize.firebaseio.com",
  projectId: "randomizerprize",
  storageBucket: "randomizerprize.appspot.com",
  messagingSenderId: "137055312187",
  appId: "1:137055312187:web:4000ac01c2f30f29e57f1e",
  measurementId: "G-0GZR4D2M3W"
};

const app = firebase.initializeApp(firebaseConfig)

let db = app.database()

export default db