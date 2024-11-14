import React from "react";
import { StyleSheet, View } from "react-native";

function ComponentPadding({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
});

export default ComponentPadding;
