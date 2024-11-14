import React from "react";
import { View, StyleSheet } from "react-native";

import ChevronLeft from "./Icons/ChevronLeft";
import RowContainer from "./RowContainer";
import ScreenName from "./ScreenName";

export default function ScreenNavBar({ screenName, style }) {
  return (
    <RowContainer style={[style, styles.screenNameContainer]}>
      <ChevronLeft />
      {screenName && <ScreenName style={styles.screenName} name={screenName} />}
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  screenName: {
    flexGrow: 1,
  },
  screenNameContainer: {
    alignItems: "center",
  },
});
