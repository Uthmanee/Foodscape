import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "./Icon";

export default function Crosshairs({ color, style }) {
  return (
    <Icon
      style={style}
      IconComponent={MaterialCommunityIcons}
      name="crosshairs"
      color={color}
      size={14}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
