import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Icon from "./Icon";

export default function StarIcon({ color, name = "star", size = 14, style }) {
  return (
    <Icon
      IconComponent={AntDesign}
      color={color}
      name={name}
      size={size}
      style={style}
    />
  );
}

const styles = StyleSheet.create({
  icon: {},
});
