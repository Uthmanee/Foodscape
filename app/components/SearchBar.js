import React from "react";
import { StyleSheet, TextInput } from "react-native";
import RowContainer from "./RowContainer";
import FilterIcon from "./Icons/FilterIcon";
import colors from "../config/colors";

export default function SearchBar({
  backgroundColor = colors.white,
  ...otherProps
}) {
  return (
    <RowContainer style={[styles.container, { backgroundColor }]}>
      <TextInput style={styles.input} {...otherProps} />
      <FilterIcon style={styles.filter} />
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 35,
    paddingHorizontal: 13,
    paddingVertical: 7,
    width: "80%",
  },
  filter: {
    marginLeft: 8,
  },
  input: {
    flexGrow: 1,
    width: 0,
  },
  search: {
    marginRight: 8,
  },
});
