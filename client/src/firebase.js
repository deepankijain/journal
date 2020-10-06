import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDymeTnACb9BbP6MmzSn2GsWDeRaH3sdJ4',
  authDomain: 'journal-in.firebaseapp.com',
  databaseURL: 'https://journal-in.firebaseio.com',
  projectId: 'journal-in',
  storageBucket: 'journal-in.appspot.com',
  messagingSenderId: '176739084729',
  appId: '1:176739084729:web:408e4c2f5007a9d4ca2e68',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export { auth, provider, timestamp };
export default db;
