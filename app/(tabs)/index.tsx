import invoiceTemplate from "@/components/invoiceTemplates";
import { defaultInvoice, loadInvoiceFromLocalStorage } from "@/utils/firestoreUtils";
import { IInvoice } from "@/utils/types";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
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
  const html = invoiceTemplate(invoice);
  return (
    <ScrollView style={{ backgroundColor: "white" }} horizontal={true}>
      {Platform.OS === "web" ? <div dangerouslySetInnerHTML={{ __html: html }} /> : <RenderHTML source={{ html: html }} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
