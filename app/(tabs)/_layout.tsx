import { router, Tabs, useFocusEffect, usePathname } from "expo-router";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { TabBar } from "@/components/navigation/TabBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Divider, FAB, IconButton, Menu, Modal, Portal, Text, TextInput, useTheme } from "react-native-paper";
import useRender from "@/hooks/useRender";
import { en, registerTranslation } from "react-native-paper-dates";
import { signInUser, signUpUser } from "@/utils/authenticationUtils";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useUser } from "@/contexts/UserContext";
import {
  defaultInvoice,
  fetchInvoiceDocuments,
  loadInvoiceFromLocalStorage,
  storeIInvoiceDocument,
  deleteInvoiceDocument,
  saveInvoiceLocally,
} from "@/utils/firestoreUtils";
import { IInvoice, IInvoiceDocument, IInvoiceDocumentWithId } from "@/utils/types";
import invoiceTemplate from "@/components/invoiceTemplates";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { useInvoice } from '@/contexts/InvoiceContext';

const invoiceTypes = ["Invoice 1", "Invoice 2", "Company Invoice 1", "Company Invoice 2"];
registerTranslation("en", en);
export default function TabLayout() {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.surface,
    },
    header: {
      height: "auto",
      backgroundColor: theme.colors.surfaceVariant,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
    },
    buttonGroup: {
      flexDirection: "row",
      alignItems: "center",
    },
    authModal: {
      display: "flex",
      width: "80%",
      gap: 20,
      padding: 40,
      backgroundColor: theme.colors.background,
      margin: "auto",
      borderRadius: 20,
    },
    authModalButtonGroup: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      gap: 20,
    },
    authModalButton: {
      flex: 1,
    },
    invoiceListItem: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      backgroundColor: theme.colors.surfaceVariant,
      paddingHorizontal: 20,
      gap: 20,
      borderRadius: 10,
    },
  });

  const [settingsMenuVisible, setSettingsMenuVisible] = useState(false);
  const [fileMenuVisible, setFileMenuVisible] = useState(false);
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [invoiceListModalVisible, setInvoiceListModalVisible] = useState(false);
  const [invoiceType, setInvoiceType] = useState(0);
  const [authData, setAuthData] = useState({ username: "", password: "" });
  const [invoiceList, setInvoiceList] = useState<IInvoiceDocumentWithId[]>([]);
  const { user, setUser } = useUser();

  useRender(() => {
    router.setParams({ invoiceType: invoiceType });
  }, [invoiceType]);

  // const [invoice, setInvoice] = useState<IInvoice>(defaultInvoice);
  const { invoice, setInvoice } = useInvoice();
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
  const [selectedPrinter, setSelectedPrinter] = useState();

  const print = async () => {
    await Print.printAsync({
      html: html,
      printerUrl: selectedPrinter?.url,
    });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync();
    setSelectedPrinter(printer);
  };

  const printToFile = async () => {
    try {
      const { uri } = await Print.printToFileAsync({ html });
      console.log("File has been saved to:", uri);
      await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
    } catch {
      console.log("failed to print");
    }
  };
  const pathname = usePathname();
  useEffect(() => {
    async function fetch() {
      setInvoiceList(await fetchInvoiceDocuments(user?.uid as string));
    }
    fetch();
  }, [user, invoiceListModalVisible]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button icon="account" mode="elevated" onPress={() => setAuthModalVisible(true)}>
          {user ? user.email : "Login"}
        </Button>
        <View style={styles.buttonGroup}>
          {pathname === "/edit" && (
            <Menu
              visible={settingsMenuVisible}
              mode="elevated"
              onDismiss={() => setSettingsMenuVisible(false)}
              anchorPosition="bottom"
              contentStyle={{ padding: 0 }}
              anchor={<IconButton mode="contained-tonal" icon="cog" onPress={() => setSettingsMenuVisible(!settingsMenuVisible)} />}>
              {invoiceTypes.map((invoiceType, index) => {
                return (
                  <Fragment key={index}>
                    {index !== 0 && <Divider />}
                    <Menu.Item
                      title={invoiceType}
                      onPress={() => {
                        setInvoiceType(index);
                        setSettingsMenuVisible(false);
                      }}
                    />
                  </Fragment>
                );
              })}
            </Menu>
          )}
          <IconButton mode="contained-tonal" icon="folder" onPress={() => setInvoiceListModalVisible(true)} />
          <IconButton mode="contained-tonal" icon="cloud-download" />
          <IconButton mode="contained-tonal" icon="file-plus" />
        </View>
      </View>
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />} initialRouteName="edit">
        <Tabs.Screen
          name="edit"
          options={{
            title: "edit",
          }}
          initialParams={{ invoiceType: invoiceType }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "index",
          }}
          initialParams={{ invoiceType: invoiceType }}
        />
      </Tabs>
      <Portal>
        <Modal
          visible={authModalVisible}
          contentContainerStyle={styles.authModal}
          onDismiss={() => {
            setAuthModalVisible(false);
          }}>
          <TextInput
            label="Username"
            value={authData.username}
            mode="outlined"
            onChangeText={(value) => {
              setAuthData({ ...authData, username: value });
            }}
          />
          <TextInput
            label="Password"
            value={authData.password}
            mode="outlined"
            onChangeText={(value) => {
              setAuthData({ ...authData, password: value });
            }}
            secureTextEntry
          />
          <View style={styles.authModalButtonGroup}>
            <Button
              mode="contained"
              style={styles.authModalButton}
              onPress={async () => {
                if (user) {
                  await signOut(auth);
                  setUser(null);
                  setAuthModalVisible(false);
                  return;
                }
                try {
                  const userSignedIn = await signInUser(authData.username, authData.password);
                  setUser(userSignedIn);
                  setAuthData({ username: "", password: "" });
                  setAuthModalVisible(false);
                } catch (error) {
                  console.error(error);
                }
              }}>
              {user ? "Logout" : "Login"}
            </Button>
            {!user && (
              <Button
                mode="contained-tonal"
                style={styles.authModalButton}
                onPress={async () => {
                  try {
                    await signUpUser(authData.username, authData.password, "admin");
                  } catch (error) {
                    console.error(error);
                  }
                }}>
                Sign Up
              </Button>
            )}
          </View>
        </Modal>
      </Portal>
      <Portal>
        <Modal
          visible={invoiceListModalVisible}
          contentContainerStyle={styles.authModal}
          onDismiss={() => {
            setInvoiceListModalVisible(false);
          }}>
          {invoiceList.map((invoiceDoc, index) => {
            return (
              <View style={styles.invoiceListItem} key={index}>
                <Text variant="headlineMedium" onPress={() => {
                  const loadInvoice = async () => {
                    setInvoiceListModalVisible(false);
                    // await saveInvoiceLocally(invoiceDoc);
                    // console.log(invoiceDoc);
                    setInvoice(invoiceDoc);
                  }
                  loadInvoice();
                }}>
                  {invoiceDoc.invoiceTitle} #{invoiceDoc.invoiceNumber}
                </Text>
                <IconButton
                  icon={"delete"}
                  iconColor={theme.colors.error}
                  mode="contained"
                  onPress={() => {
                    const deleteInvoice = async () => {
                      if (!user) {
                        console.error("No user is logged in");
                        return;
                      }
                      await deleteInvoiceDocument(user.uid, invoiceDoc.id);
                      setInvoiceList(await fetchInvoiceDocuments(user.uid));
                    };
                    deleteInvoice();
                  }}
                />
              </View>
            );
          })}
        </Modal>
      </Portal>
      <Portal>
        <FAB.Group
          open={fileMenuVisible}
          icon={fileMenuVisible ? "window-close" : "menu"}
          visible
          actions={[
            {
              icon: "floppy",
              label: "Save",
              onPress: async (e) => {
                const save = async () => {
                  const invoice = await loadInvoiceFromLocalStorage();
                  const baseDocument = new Document();
                  const invoiceDocument: IInvoiceDocument = {
                    ...baseDocument,
                    ...invoice,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                  };
                  if (!user) {
                    console.error("No user is logged in");
                    return;
                  }
                  await storeIInvoiceDocument(user.uid, invoiceDocument);
                };
                save();
              },
            },
            { icon: "content-save-edit-outline", label: "Save As", onPress: (e) => { } },
            {
              icon: "printer",
              label: "print",
              onPress: (e) => {
                setFileMenuVisible(false);
                Platform.OS === "web" ? setTimeout(print, 200) : print();
              },
            },
            {
              icon: "share-variant",
              label: "share",
              onPress: (e) => {
                setFileMenuVisible(false);
                Platform.OS === "web" ? setTimeout(printToFile, 200) : printToFile();
              },
            },
          ]}
          onStateChange={() => setFileMenuVisible(!fileMenuVisible)}
        />
      </Portal>
    </SafeAreaView>
  );
}
