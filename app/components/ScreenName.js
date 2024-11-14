import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

export default function ScreenName({ color, name, style }) {
  return (
    <AppText style={[styles.screenName, style]} color={color}>
      {name}
    </AppText>
  );
}

const styles = StyleSheet.create({
  screenName: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});
