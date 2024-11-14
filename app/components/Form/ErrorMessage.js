import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../AppText";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return (
    <AppText style={styles.text} color="red">
      {error}
    </AppText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    marginBottom: 5,
  },
});

export default ErrorMessage;
