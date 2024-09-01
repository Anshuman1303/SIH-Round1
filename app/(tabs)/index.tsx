import invoiceTemplate from "@/components/invoiceTemplates";
import { defaultInvoice, loadInvoiceFromLocalStorage } from "@/utils/firestoreUtils";
import { IInvoice } from "@/utils/types";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Dimensions, Platform, ScrollView, StyleSheet } from "react-native";
import RenderHTML from "react-native-render-html";
import WebView from "react-native-webview";
import Constants from "expo-constants";

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
    <ScrollView style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      {Platform.OS === "web" ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <WebView style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").width }} source={{ html: html }} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
