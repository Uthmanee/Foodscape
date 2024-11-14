import React from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Icon from "./Icon";

export default function TimeIcon({ color, style }) {
  return (
    <Icon
      style={style}
      IconComponent={MaterialIcons}
      name="access-time"
      color={color}
      size={14}
    />
  );
}

const styles = StyleSheet.create({
  icon: {},
});
