import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCcLQjjS3GIqroqITi61IKnda-V5zuhlNo',
  authDomain: 'phb9-coffee-store.firebaseapp.com',
  projectId: 'phb9-coffee-store',
  storageBucket: 'phb9-coffee-store.appspot.com',
  messagingSenderId: '703155949538',
  appId: '1:703155949538:web:2a4c3569d8af437db433bb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
