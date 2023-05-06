import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRdDHsNp8ba_3RZNK793exzmWAwSfVV5Q',
  authDomain: 'vnv-graphql.firebaseapp.com',
  projectId: 'vnv-graphql',
  storageBucket: 'vnv-graphql.appspot.com',
  messagingSenderId: '130677341853',
  appId: '1:130677341853:web:08a89112973569fb059e74',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerUser = async (userId: string, email: string, name: string) => {
  await addDoc(collection(db, 'users'), {
    uid: userId,
    name,
    authProvider: 'local',
    email,
  });
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, registerUser, sendPasswordReset, logout };
