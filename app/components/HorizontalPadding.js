import React from "react";
import { StyleSheet, View } from "react-native";

function HorizontalPadding({ children, paddingHorizontal = 25, style }) {
  return (
    <View style={[styles.container, { paddingHorizontal }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HorizontalPadding;
