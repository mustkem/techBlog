import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//initialise firebase
const firebaseConfig = {
  apiKey: "AIzaSyB4g1fFy8mVY9fs5c7dW0ti7t53zP2Y2rs",
  authDomain: "my-project-1525784461261.firebaseapp.com",
  databaseURL: "https://my-project-1525784461261.firebaseio.com",
  projectId: "my-project-1525784461261",
  storageBucket: "",
  messagingSenderId: "234456308154",
  appId: "1:234456308154:web:21336fccce9f972d"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({})

export default firebase;