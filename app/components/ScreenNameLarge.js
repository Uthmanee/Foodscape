import React from "react";
import { StyleSheet } from "react-native";

import ScreenName from "./ScreenName";

function ScreenNameLarge({ name, style }) {
  return <ScreenName style={[style, styles.screenName]} name={name} />;
}

const styles = StyleSheet.create({
  screenName: {
    fontSize: 27,
    textAlign: "left",
  },
});

export default ScreenNameLarge;
