import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDJBFuWhJ4rR9JMxMOXCgpbr-IguCJw_TM",
	authDomain: "sihround1.firebaseapp.com",
	projectId: "sihround1",
	storageBucket: "sihround1.appspot.com",
	messagingSenderId: "1031444392724",
	appId: "1:1031444392724:web:318155b58bb3c3efd8b001",
	measurementId: "G-GWYC65QEX5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };