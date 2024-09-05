import invoiceTemplate from "@/components/invoiceTemplates";
import { defaultInvoice, loadInvoiceFromLocalStorage, saveInvoiceLocally } from "@/utils/firestoreUtils";
import { IInvoice } from "@/utils/types";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Dimensions, Platform, ScrollView, StyleSheet } from "react-native";
import RenderHTML from "react-native-render-html";
import WebView from "react-native-webview";
import Constants from "expo-constants";
import * as AppGeneral from "@/components/socialcalc";
import { DATA } from "@/constants/app-data";
import { Button } from "react-native-paper";
import { useInvoice } from "@/contexts/InvoiceContext";

export default function TabTwoScreen() {
  const { invoice, setInvoice } = useInvoice();
  useEffect(() => {
    const loadData = async () => {
      const savedInvoice = await loadInvoiceFromLocalStorage();
      if (savedInvoice) {
        setInvoice(savedInvoice);
        console.log("Invoice loaded from local storage");
      }
    };
    loadData();
  }, []);

  const saveData = async () => {
    if (invoice) {
      await saveInvoiceLocally(invoice);
      console.log("Invoice saved locally");
    }
  };

  useEffect(() => {
    AppGeneral.initializeApp(JSON.stringify(invoice));
  }, []);

  const html = invoiceTemplate(invoice);
  return (
    // <ScrollView style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
    //   {Platform.OS === "web" ? (
    //     <div dangerouslySetInnerHTML={{ __html: html }} />
    //   ) : (
    //     <WebView style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").width }} source={{ html: html }} />
    //   )}
    // </ScrollView>
    <>
      <Button
        onPress={() => {
          setInvoice(JSON.parse(AppGeneral.getSpreadsheetContent()));
          saveData();
          console.log(invoice);
        }}>
        test
      </Button>
      <div id="container">
        <div id="workbookControl"></div>
        <div id="tableeditor"></div>
        <div id="msg"></div>
      </div>
      {/* {Platform.OS === "web" ? (
      ) : (
        <WebView
          source={{
            html: `
        <div id="container">
        <div id="workbookControl"></div>
        <div id="tableeditor"></div>
        <div id="msg"></div>
        </div>
        `,
          }}
        />
      )} */}
    </>
  );
}

const styles = StyleSheet.create({});
