import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, Text, View } from "react-native";
import { TabBar } from "@/components/navigation/TabBar";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Modal, TextField } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, IconButton, useTheme } from "react-native-paper";

const colorScheme = useColorScheme();
const Color = colorScheme === "dark" ? Colors.dark : Colors.light;

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
      padding: 20,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      height: "100%",
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button icon="account" mode="contained">
          Login
        </Button>
        <View style={styles.buttonGroup}>
          <IconButton mode="contained-tonal" icon="cog" />
          <IconButton mode="contained-tonal" icon="folder" />
          <IconButton mode="contained-tonal" icon="cloud-download" />
          <IconButton mode="contained-tonal" icon="file-plus" />
        </View>
      </View>
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            title: "home",
          }}
        />
        <Tabs.Screen
          name="edit"
          options={{
            title: "edit",
          }}
        />
      </Tabs>
      <Modal visible={false}>
        <View style={styles.authModal}>
          <TextField placeholder="Username" floatOnFocus floatingPlaceholder showClearButton />
          <TextField placeholder="Password" floatOnFocus floatingPlaceholder showClearButton />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
