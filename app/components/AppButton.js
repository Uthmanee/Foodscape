import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function AppButton({
  children,
  color = colors.primary,
  disabled = false,
  image,
  onPress,
  shape = "box",
  style,
  textColor = "#fff",
}) {
  return (
    <TouchableOpacity
      style={[
        shape === "box" ? styles.box : null,
        shape === "round" ? styles.round : null,
        styles.button,
        disabled && styles.disabledButton,
        style,
        { backgroundColor: color },
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      {image && <Image style={styles.image} source={image} />}
      <Text style={[styles.buttonText, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    paddingVertical: 8,
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  buttonText: {
    fontWeight: "600",
  },
  disabledButton: {
    opacity: 0.4,
  },
  image: {
    height: 22,
    marginRight: 10,
    width: 22,
  },
  round: {
    borderRadius: 35,
    paddingVertical: 15,
    width: "100%",
  },
});
