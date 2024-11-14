import React from "react";
import { StyleSheet, View } from "react-native";

function ListContainer({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 90,
  },
});

export default ListContainer;
