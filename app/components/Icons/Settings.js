import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

function Settings({ onPress, style }) {
  return (
    <Icon
      style={style}
      color={colors.primary}
      IconComponent={AntDesign}
      name="setting"
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Settings;
