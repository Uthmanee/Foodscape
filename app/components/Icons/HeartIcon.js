import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

export default function HeartIcon({
  toggleFavourite,
  color = colors.primary,
  isFavourite,
  size = 22,
  style,
}) {
  return (
    <Icon
      style={style}
      color={color}
      IconComponent={AntDesign}
      onPress={toggleFavourite}
      name={isFavourite ? "heart" : "hearto"}
      size={size}
    />
  );
}

const styles = StyleSheet.create({
  icon: {},
});
