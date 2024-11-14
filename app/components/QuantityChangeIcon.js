import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

export default function QuantityChangeIcon({ change, size, onPress }) {
  let name;
  if (change === "increase") {
    name = "plus";
  } else name = "minus";
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name={name} color={colors.primary} size={size} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 7,
    height: 30,
    justifyContent: "center",
    width: 30,
  },
});
