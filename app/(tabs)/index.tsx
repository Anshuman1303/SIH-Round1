import invoiceTemplate from "@/components/invoiceTemplates";
import { defaultInvoice, loadInvoiceFromLocalStorage } from "@/utils/firestoreUtils";
import { IInvoice } from "@/utils/types";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import RenderHTML from "react-native-render-html";

export default function TabTwoScreen() {
  const [invoice, setInvoice] = useState<IInvoice>(defaultInvoice);
  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        const savedInvoice = await loadInvoiceFromLocalStorage();
        if (savedInvoice) {
          setInvoice(savedInvoice);
          console.log("Invoice loaded from local storage");
        }
      };
      loadData();
    }, [])
  );
  console.log("view", invoice);
  return (
    <ScrollView>
      <RenderHTML source={{ html: invoiceTemplate(invoice) }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
