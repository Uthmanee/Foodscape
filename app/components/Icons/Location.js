import React from "react";
import { StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

export default function Location({ onPress, style }) {
  return (
    <Icon
      color={colors.primary}
      IconComponent={SimpleLineIcons}
      name="location-pin"
      onPress={onPress}
      style={style}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
