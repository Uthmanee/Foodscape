import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

export default function Delete({ onPress, style }) {
  return (
    <Icon
      color={colors.ash}
      IconComponent={AntDesign}
      name="delete"
      onPress={onPress}
      size={30}
      style={style}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
