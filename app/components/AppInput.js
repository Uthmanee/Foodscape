import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import RowContainer from "./RowContainer";

function AppInput({ Icon, label, paddingVertical = 13, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      <AppText color={colors.ash}>{label}</AppText>
      <RowContainer style={[styles.inputContainer, { paddingVertical }]}>
        <TextInput style={styles.input} {...otherProps} />
        {Icon && <Icon />}
      </RowContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    flexGrow: 1,
    width: 0,
  },
  inputContainer: {
    backgroundColor: colors.grey,
    borderRadius: 8,
    marginTop: 5,
    paddingHorizontal: 13,
  },
});

export default AppInput;
