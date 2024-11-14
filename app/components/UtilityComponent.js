import React from "react";
import { StyleSheet } from "react-native";

import ChevronLeft from "./Icons/ChevronLeft";
import RowContainer from "./RowContainer";
import SearchBarDummy from "./SearchBarDummy";

export default function UtilityComponent({ backgroundColor, style }) {
  return (
    <RowContainer style={[styles.container, style]}>
      <ChevronLeft />
      <SearchBarDummy backgroundColor={backgroundColor} />
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
});
