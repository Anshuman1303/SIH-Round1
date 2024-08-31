import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, Text, View } from "react-native";
import { TabBar } from "@/components/navigation/TabBar";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Button } from "react-native-ui-lib";

const colorScheme = useColorScheme();
const Color = colorScheme === "dark" ? Colors.dark : Colors.light;

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button style={styles.loginButton}>
          <FontAwesome6 name="user" style={styles.icon} />
          <Text>Login</Text>
        </Button>
        <View style={styles.buttonGroup}>
          <FontAwesome6.Button name="gear" {...styles.button} />
          <FontAwesome6.Button name="folder" {...styles.button} />
          <FontAwesome6.Button name="cloud-arrow-down" {...styles.button} />
          <FontAwesome6.Button name="file-circle-plus" {...styles.button} />
        </View>
      </View>
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "home" : "home-outline"} color={color} />,
          }}
        />
        <Tabs.Screen
          name="edit"
          options={{
            title: "edit",
            tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "code-slash" : "code-slash-outline"} color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  header: {
    height: 50,
    backgroundColor: Color.background,
    color: Color.text,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: Color.buttonBackground,
    color: Color.buttonText,
    display: "flex",
    gap: 5,
    alignItems: "center",
  },
  icon: {
    color: "inherit",
  },
  button: {
    backgroundColor: "",
    color: Color.icon,
  },
});
