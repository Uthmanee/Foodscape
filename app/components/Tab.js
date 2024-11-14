import React from "react";
import { StyleSheet } from "react-native";

import AppButton from "./AppButton";
import colors from "../config/colors";

function Tab({ image, onPress, name }) {
  return (
    <AppButton
      style={styles.button}
      color={colors.altBackgroundColor}
      image={image}
      onPress={onPress}
      textColor={colors.altTextColor}
    >
      {name}
    </AppButton>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    marginRight: 10,
    paddingHorizontal: 30,
    paddingVertical: 13,
  },
});

export default Tab;
