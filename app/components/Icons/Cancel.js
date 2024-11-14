import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

export default function Cancel({ onPress, style }) {
  return (
    <Icon
      color={colors.ash}
      IconComponent={FontAwesome}
      name="close"
      onPress={onPress}
      size={30}
      style={style}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
