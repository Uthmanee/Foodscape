import React from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";

function ActivityIndicator({ loading = false }) {
  if (!loading) return null;
  return (
    <View style={styles.overlay}>
      <Progress.Circle
        size={60}
        indeterminate={true}
        color={colors.primary}
        borderWidth={2}
        thickness={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    opacity: 0.7,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
