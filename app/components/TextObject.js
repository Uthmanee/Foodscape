import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";

export default function TextObject({
  color,
  iconcolor,
  IconComponent,
  iconSize,
  margin = 5,
  name,
  style,
  text,
  textStyle,
}) {
  return (
    <View style={[style, styles.textObjectContainer]}>
      <IconComponent
        name={name}
        color={iconcolor}
        size={iconSize}
        style={{ marginRight: margin }}
      />
      <AppText style={textStyle} color={color}>
        {text}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  textObjectContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});
