import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";


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
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export { auth, db };