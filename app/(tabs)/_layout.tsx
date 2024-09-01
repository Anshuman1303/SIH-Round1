import { router, Tabs } from "expo-router";
import React, { Fragment, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { TabBar } from "@/components/navigation/TabBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Divider, FAB, IconButton, Menu, Modal, Portal, TextInput, useTheme } from "react-native-paper";
import useRender from "@/hooks/useRender";
import { en, registerTranslation } from "react-native-paper-dates";
import { signInUser, signUpUser } from "@/utils/authenticationUtils";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useUser } from "@/contexts/UserContext";


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
  });

  const [settingsMenuVisible, setSettingsMenuVisible] = useState(false);
  const [fileMenuVisible, setFileMenuVisible] = useState(false);
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [invoiceType, setInvoiceType] = useState(0);
  const [authData, setAuthData] = useState({ username: "", password: "" });
  const { user, setUser } = useUser();
  useRender(() => {
    router.setParams({ invoiceType: invoiceType });
  }, [invoiceType]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button icon="account" mode="elevated" onPress={() => setAuthModalVisible(true)}>
          {user ? user.email : "Login"}
        </Button>
        <View style={styles.buttonGroup}>
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
          <IconButton mode="contained-tonal" icon="folder" />
          <IconButton mode="contained-tonal" icon="cloud-download" />
          <IconButton mode="contained-tonal" icon="file-plus" />
        </View>
      </View>
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            title: "index",
          }}
          initialParams={{ invoiceType: invoiceType }}
        />
        <Tabs.Screen
          name="edit"
          options={{
            title: "edit",
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
            <Button mode="contained" style={styles.authModalButton} onPress={async () => {
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
              }
              catch (error) {
                console.error(error);
              }
            }}>
              {user ? "Logout" : "Login"}
            </Button>
            <Button mode="contained-tonal" style={styles.authModalButton} onPress={async () => {
              try {
                await signUpUser(authData.username, authData.password, "admin");
              }
              catch (error) {
                console.error(error);
              }
            }}>
              Sign Up
            </Button>
          </View>
        </Modal>
      </Portal>
      <Portal>
        <FAB.Group
          open={fileMenuVisible}
          icon={fileMenuVisible ? "window-close" : "menu"}
          visible
          actions={[
            { icon: "floppy", label: "Save", onPress: (e) => {} },
            { icon: "content-save-edit-outline", label: "Save As", onPress: (e) => {} },
            { icon: "printer", label: "print", onPress: (e) => {} },
            { icon: "share-variant", label: "share", onPress: (e) => {} },
          ]}
          onStateChange={() => setFileMenuVisible(!fileMenuVisible)}
        />
      </Portal>
    </SafeAreaView>
  );
}
