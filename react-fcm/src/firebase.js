// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } from './Environment';
const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
};

firebase.initializeApp(firebaseConfig);
export default firebase;


// vvvvvvvvvvvvvvvvvvvvv for firebase v7 vvvvvvvvvvvvvvvvvvvvvvv

// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey,
//     authDomain,
//     projectId,
//     storageBucket,
//     messagingSenderId,
//     appId
// };

// firebase.initializeApp(firebaseConfig);
// export default firebase;