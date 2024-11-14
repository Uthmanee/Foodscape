import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import RowContainer from "./RowContainer";

export default function TransactionSummary({ field, subtotal, total, value }) {
  return (
    <>
      <RowContainer style={styles.fieldContainer}>
        <AppText color={colors.ash}>Subtotal:</AppText>
        <AppText style={styles.amount}>N {subtotal}</AppText>
      </RowContainer>
      <RowContainer style={styles.fieldContainer}>
        <AppText color={colors.ash}>{field}:</AppText>
        <AppText style={styles.amount}>{value}</AppText>
      </RowContainer>
      <View style={styles.line} />
      <RowContainer style={styles.fieldContainer}>
        <AppText>Total:</AppText>
        <AppText style={styles.amount}>N {total}</AppText>
      </RowContainer>
    </>
  );
}

const styles = StyleSheet.create({
  amount: {
    fontWeight: 600,
  },
  fieldContainer: {
    marginVertical: 5,
  },
  line: {
    backgroundColor: "#E0E0E0",
    height: 1,
    marginVertical: 2,
  },
});
