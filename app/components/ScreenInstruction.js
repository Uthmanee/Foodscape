import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function ScreenInstruction({ style, text }) {
  return (
    <AppText color={colors.ash} style={[style, styles.screenInstruction]}>
      {text}
    </AppText>
  );
}

const styles = StyleSheet.create({
  screenInstruction: {
    fontSize: 17,
  },
});

export default ScreenInstruction;
