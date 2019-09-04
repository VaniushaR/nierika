import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCgNc_FLBAnpD_90joGLfphWunHY1OYjns',
  authDomain: 'nierika-7a8d3.firebaseapp.com',
  databaseURL: 'https://nierika-7a8d3.firebaseio.com',
  projectId: 'nierika-7a8d3',
  storageBucket: 'nierika-7a8d3.appspot.com',
  messagingSenderId: '795639442168'
};

const init = firebase.initializeApp(config);
const db = firebase.firestore();
const storage = firebase.storage();
//sdb.settings({ timestampsInSnapshots: true });

export { db, init, storage };
