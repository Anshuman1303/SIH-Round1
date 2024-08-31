import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const signUpUser = async (email: string, password: string, role: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		await setDoc(doc(db, 'users', userCredential.user.uid), {
			email: userCredential.user.email,
			role: role,
		});
		return userCredential.user;
	} catch (error) {
		console.error('Error signing up:', error.message);
	}
};

export const signInUser = async (email: string, password: string) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		return userCredential.user;
	} catch (error) {
		console.error('Error signing in:', error.message);
	}
};
