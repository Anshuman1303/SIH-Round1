import { db, auth } from "../firebaseConfig";
import { collection, addDoc, query, getDocs, doc, deleteDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IInvoice, IInvoiceDocument, IInvoiceDocumentWithId } from "./types";

export const defaultInvoice: IInvoice = {
  invoiceNumber: "",
  invoiceDate: undefined,
  invoiceTitle: "",
  billToName: "",
  billToAddressLine1: "",
  billToAddressLine2: "",
  billToPhone: "",
  fromName: "",
  fromAddressLine1: "",
  fromAddressLine2: "",
  fromPhone: "",
  items: [{ description: "", amount: "" }],
  currency: "",
  total: 0,
  invoiceType: 2,
  tax: "",
};
export const storeIInvoiceDocument = async (userId: string, invoice: IInvoiceDocument) => {
  try {
    await addDoc(collection(db, "users", userId, "IInvoiceDocument"), invoice);
    console.log("JSON object stored successfully!");
  } catch (error) {
    console.error("Error storing JSON object:", error.message);
  }
};

export const fetchInvoiceDocuments = async (userId: string): Promise<IInvoiceDocumentWithId[]> => {
  try {
    if (userId) {
      const userCollectionRef = collection(db, "users", userId, "IInvoiceDocument");
      const q = query(userCollectionRef);
      const querySnapshot = await getDocs(q);

      const jsonObjects: IInvoiceDocumentWithId[] = [];
      querySnapshot.forEach((doc) => {
        jsonObjects.push({ ...(doc.data() as IInvoiceDocument), id: doc.id });
      });

      return jsonObjects;
    } else {
      console.log("No user is logged in");
      return [];
    }
  } catch (error) {
    console.error("Error retrieving JSON objects:", error.message);
    return [];
  }
};

export const deleteInvoiceDocument = async (userId: string, invoiceId: string) => {
  const invoiceRef = doc(db, "users", userId, "IInvoiceDocument", invoiceId);

  try {
    await deleteDoc(invoiceRef);
    console.log(`Invoice with ID ${invoiceId} deleted successfully`);
  } catch (e) {
    console.error("Error deleting invoice:", e);
  }
};

const storeInvoiceDocumentsInLocalStorage = async (invoiceDocuments: IInvoiceDocument[]) => {
  try {
    const jsonDocuments = JSON.stringify(invoiceDocuments);
    await AsyncStorage.setItem("@invoiceDocuments", jsonDocuments);
  } catch (error) {
    console.error("Error saving invoices to local storage", error);
  }
};

const getInvoiceDocumentsFromLocalStorage = async (): Promise<IInvoiceDocument[] | null> => {
  try {
    const jsonDocuments = await AsyncStorage.getItem("@invoiceDocuments");
    return jsonDocuments != null ? JSON.parse(jsonDocuments) : null;
  } catch (error) {
    console.error("Error retrieving invoices from local storage", error);
    return null;
  }
};

export const loadInvoiceDocuments = async (userId) => {
  try {
    if (!userId) {
      console.error("No user is logged in");
      return [];
    }
    const invoiceDocuments = await fetchInvoiceDocuments(userId);
    await storeInvoicesInLocalStorage(invoiceDocuments);
    return invoiceDocuments;
  } catch (e) {
    console.error("Error fetching invoices from Firebase", e);
    return getInvoicesFromLocalStorage();
  }
};

export const saveInvoiceLocally = async (invoice: IInvoice) => {
  try {
    /* const baseDocument = new Document();
      const invoiceDocument: IInvoiceDocument = {
        ...baseDocument,
        ...invoice,
    createdAt: new Date(),
    updatedAt: new Date(),
      }
      const jsonInvoiceDocument = JSON.stringify(invoiceDocument);
      await AsyncStorage.setItem("@invoiceDocuments_local", jsonInvoiceDocument); */
    const jsonInvoice = JSON.stringify(invoice);
    await AsyncStorage.setItem("@invoice_local", jsonInvoice);
  } catch (error) {
    console.error("Error saving invoice locally", error);
  }
};

export const loadInvoiceFromLocalStorage = async (): Promise<IInvoice> => {
  try {
    const jsonValue = await AsyncStorage.getItem("@invoice_local");
    return jsonValue != null ? JSON.parse(jsonValue) : defaultInvoice;
  } catch (e) {
    console.error("Error loading invoice from local storage", e);
    return defaultInvoice;
  }
};
