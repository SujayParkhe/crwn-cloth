import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBKmLG4owfiKW_p8HspGTF08tRI9yUUTSc",
    authDomain: "crwn-db-shopping.firebaseapp.com",
    projectId: "crwn-db-shopping",
    storageBucket: "crwn-db-shopping.appspot.com",
    messagingSenderId: "1027642697075",
    appId: "1:1027642697075:web:029603cbca2ab3bee65106"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;