import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";
import Cancel from "./Icons/Cancel";
import colors from "../config/colors";
import Delete from "./Icons/Delete";
import RowContainer from "./RowContainer";

function SelectionAction({ onCancelSelection, onHandleDelete, selectedItems }) {
  return (
    <RowContainer style={styles.actionContainer}>
      <Cancel onPress={onCancelSelection} />
      <AppText style={styles.selectionText} color={colors.ash}>
        {selectedItems.length} item selected
      </AppText>
      <Delete onPress={onHandleDelete} />
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  actionContainer: {
    alignItems: "center",
  },
});

export default SelectionAction;
