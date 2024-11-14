import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

function Tracker({ onPress, style }) {
  return (
    <Icon
      style={style}
      color={colors.primary}
      IconComponent={MaterialIcons}
      name="track-changes"
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Tracker;
