import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyAudrc209MNiV2guoKMONB4DhyLUzijTcA",
    authDomain: "react-ecommerce-e83a3.firebaseapp.com",
    databaseURL: "https://react-ecommerce-e83a3.firebaseio.com",
    projectId: "react-ecommerce-e83a3",
    storageBucket: "",
    messagingSenderId: "713924627299",
    appId: "1:713924627299:web:924e488708f3a3e3"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  // Initialize Firebase Auth Lib
  export const auth = firebase.auth();

  // Initialize Firebase Firestore Lib
  export const firestore = firebase.firestore();

  // Initialize Firebase Google Auth Lib
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)


  export const createUserProfileDocument = async (userAuth, addionalData) => {
    if(userAuth.length < 0 ) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date()
      try{
        await userRef.set({
          displayName, email, createdAt, ...addionalData
        })
      } catch (error){
        console.log('Error creating user', error.message)
      }
    }
    return userRef;
  }

  export default firebase;