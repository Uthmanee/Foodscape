import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import RowContainer from "./RowContainer";

function PersonalInfoItem({ field, style, value }) {
  return (
    <RowContainer style={[styles.container, style]}>
      <AppText color={colors.ash}>{field}</AppText>
      <AppText style={styles.value} color={colors.secondary}>
        {value}
      </AppText>
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 1,
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
  value: {
    fontWeight: 600,
  },
});

export default PersonalInfoItem;
