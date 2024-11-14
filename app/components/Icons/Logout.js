import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

function Logout({ onPress, style }) {
  return (
    <Icon
      style={style}
      color={colors.primary}
      IconComponent={MaterialCommunityIcons}
      name="logout"
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Logout;
