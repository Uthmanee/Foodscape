import React from "react";
import { StyleSheet } from "react-native";

import FoodHeaderText from "./FoodHeaderText";
import HeartIcon from "../Icons/HeartIcon";
import RowContainer from "../RowContainer";

export default function Header({
  toggleFavourite,
  deactivateQuantityChange,
  isFavourite,
  foodName,
}) {
  return (
    <RowContainer style={styles.headerContainer}>
      <FoodHeaderText>{foodName}</FoodHeaderText>
      {!deactivateQuantityChange && (
        <HeartIcon
          style={styles.icon}
          toggleFavourite={toggleFavourite}
          isFavourite={isFavourite}
        />
      )}
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    bottom: 10,
    left: 3,
  },
});
