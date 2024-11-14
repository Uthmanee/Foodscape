import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "./AppButton";
import AppText from "./AppText";

function ErrorIndicator({ error, onButtonPress }) {
  return (
    error && (
      <View style={styles.container}>
        <AppText style={styles.text}>An error occured.</AppText>
        <AppButton onPress={onButtonPress} style={styles.button} shape="round">
          Retry
        </AppButton>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ErrorIndicator;
