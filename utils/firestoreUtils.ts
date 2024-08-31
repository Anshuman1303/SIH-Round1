import { db, auth } from '../firebaseConfig';
import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import { IInvoiceDocument } from './types';
export const storeIInvoiceDocument = async (userId: string, invoice: IInvoiceDocument) => {
	try {
		await addDoc(collection(db, 'users', userId, 'IInvoiceDocument'), invoice);
		console.log('JSON object stored successfully!');
	} catch (error) {
		console.error('Error storing JSON object:', error.message);
	}
};

export const getIInvoiceDocuments = async (): Promise<IInvoiceDocument[]> => {
	try {
		const user = auth.currentUser;
		if (user) {
			const userCollectionRef = collection(db, 'users', user.uid, 'IInvoiceDocument');
			const q = query(userCollectionRef);
			const querySnapshot = await getDocs(q);

			const jsonObjects: IInvoiceDocument[] = [];
			querySnapshot.forEach((doc) => {
				jsonObjects.push(doc.data() as IInvoiceDocument);
			});

			return jsonObjects;
		} else {
			console.log('No user is logged in');
			return [];
		}
	} catch (error) {
		console.error('Error retrieving JSON objects:', error.message);
		return [];
	}
};
