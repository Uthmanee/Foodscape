import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

export default function EntityText({ entity }) {
  return <AppText style={styles.entity}>{entity}</AppText>;
}

const styles = StyleSheet.create({
  entity: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
});
