import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

export default function AppText({ children, color = colors.tertiary, style }) {
  return <Text style={[style, { color: color }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {},
});
