import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Icon from "./Icon";

export default function ChevronRight({ color, size, style }) {
  return (
    <Icon
      style={style}
      color={color}
      IconComponent={Entypo}
      name="chevron-right"
      size={size}
    />
  );
}

const styles = StyleSheet.create({
  icon: {},
});
