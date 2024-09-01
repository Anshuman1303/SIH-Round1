import { db, auth } from '../firebaseConfig';
import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IInvoiceDocument } from './types';
export const storeIInvoiceDocument = async (userId: string, invoice: IInvoiceDocument) => {
	try {
		await addDoc(collection(db, 'users', userId, 'IInvoiceDocument'), invoice);
		console.log('JSON object stored successfully!');
	} catch (error) {
		console.error('Error storing JSON object:', error.message);
	}
};

const fetchInvoiceDocuments = async (userId: string): Promise<IInvoiceDocument[]> => {
	try {
		if (userId) {
			const userCollectionRef = collection(db, 'users', userId, 'IInvoiceDocument');
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

const storeInvoiceDocumentsInLocalStorage = async (invoiceDocuments: IInvoiceDocument[]) => {
  try {
    const jsonDocuments = JSON.stringify(invoiceDocuments);
    await AsyncStorage.setItem('@invoiceDocuments', jsonDocuments);
  } catch (error) {
    console.error('Error saving invoices to local storage', error);
  }
};

const getInvoiceDocumentsFromLocalStorage = async (): Promise<IInvoiceDocument[] | null> => {
	try {
	  const jsonDocuments = await AsyncStorage.getItem('@invoiceDocuments');
	  return jsonDocuments != null ? JSON.parse(jsonDocuments) : null;
	} catch (error) {
	  console.error('Error retrieving invoices from local storage', error);
	  return null;
	}
  };
  
  export const loadInvoiceDocuments = async (userId) => {
	try {
	  if (!userId) {
		console.error('No user is logged in');
		return [];
	  }
	  const invoiceDocuments = await fetchInvoiceDocuments(userId);
	  await storeInvoicesInLocalStorage(invoiceDocuments);
	  return invoiceDocuments;
	} catch (e) {
	  console.error('Error fetching invoices from Firebase', e);
	  return getInvoicesFromLocalStorage();
	}
  };