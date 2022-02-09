/*
 * @Author: Helitha Rupasinghe;
 * @Version: Version 1.0 - 09/02/2022
 * License : MIT
 */
import firebase from 'firebase'


const firebaseConfig = {
  //your firebase config goes here
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGE_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export {
  auth,
  provider
}
export default db
