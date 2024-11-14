import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import StarIcon from "./Icons/StarIcon";
import TextObject from "./TextObject";

export default function Badge({ iconSize, margin, style, text, textStyle }) {
  return (
    <TextObject
      style={[styles.badge, style]}
      color={colors.white}
      iconcolor={colors.white}
      iconSize={iconSize}
      IconComponent={StarIcon}
      margin={margin}
      text={text}
      textStyle={textStyle}
    />
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 17,
    width: "auto",
  },
  icon: {
    marginRight: 5,
  },
});
