import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Icon({
  color = "black",
  IconComponent,
  onPress,
  name,
  size = 24,
  style,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconComponent style={style} name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {},
});
