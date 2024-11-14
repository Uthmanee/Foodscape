import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

function Account({ onPress, style }) {
  return (
    <Icon
      IconComponent={MaterialCommunityIcons}
      color={colors.primary}
      name="account-circle-outline"
      onPress={onPress}
      style={style}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Account;
