import React from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import Icon from "./Icon";

export default function SearchIcon({ color, onPress, size, style }) {
  return (
    <Icon
      style={style}
      color={color}
      onPress={onPress}
      size={size}
      IconComponent={Feather}
      name="search"
    />
  );
}

const styles = StyleSheet.create({
  icon: {},
});
