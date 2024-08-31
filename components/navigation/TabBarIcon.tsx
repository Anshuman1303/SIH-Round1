// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome6 } from "@expo/vector-icons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof FontAwesome6>["name"]>) {
  return <FontAwesome6 size={28} style={[style]} {...rest} />;
}
