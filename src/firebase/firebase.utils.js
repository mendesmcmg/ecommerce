import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBag3mraace_QKirIjCXgRbLuUAJnMzfrk",
    authDomain: "ecommerce-db-f2014.firebaseapp.com",
    projectId: "ecommerce-db-f2014",
    storageBucket: "ecommerce-db-f2014.appspot.com",
    messagingSenderId: "338831945750",
    appId: "1:338831945750:web:575462c24761a85a45c537",
    measurementId: "G-7HD2SV0ZXG"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase