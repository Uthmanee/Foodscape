import React from "react";
import { StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import Icon from "./Icon";

export default function LocationIcon({ color, size = 14, style }) {
  return (
    <Icon
      style={style}
      IconComponent={EvilIcons}
      name="location"
      color={color}
      size={size}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
