import firebase from 'firebase/app';
import firebaseconfig from '../src/data/firebaseconfig';

const firebase = firebase.initializeApp(firebaseconfig);

export default {
  googleLogin: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    let response = await firebase.auth().signInWithPopup(provider);
    return response;
  }
}
