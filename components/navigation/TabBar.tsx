import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Fragment } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, IconButton } from "react-native-paper";

const colorScheme = useColorScheme();
const Color = colorScheme === "dark" ? Colors.dark : Colors.light;

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title;
        const icon = options.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Fragment key={index}>
            {!isFocused && (
              <IconButton
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                mode="contained"
                icon={options.title === "index" ? "file-eye-outline" : options.title === "edit" ? "pencil-outline" : ""}
              />
            )}
          </Fragment>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
    position: "absolute",
    right: 0,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
});
