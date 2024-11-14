import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../../config/colors";

export default function FoodDetailText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 5,
  },
});
