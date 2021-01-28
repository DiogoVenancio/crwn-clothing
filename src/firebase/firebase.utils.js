import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJ6vLJUmX3sgnbEQF36cCmA6G9H0P2Fyo",
    authDomain: "crwn-db-4c1e7.firebaseapp.com",
    projectId: "crwn-db-4c1e7",
    storageBucket: "crwn-db-4c1e7.appspot.com",
    messagingSenderId: "103179917863",
    appId: "1:103179917863:web:d60c4733783b0b53470c02",
    measurementId: "G-QWHVWZJNPY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.error('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;