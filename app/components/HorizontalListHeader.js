import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppText from "./AppText";
import ButtonText from "./ButtonText";
import colors from "../config/colors";
import routes from "../navigation/routes";
import RowContainer from "./RowContainer";

function HorizontalListHeader({ title, style, data }) {
  const navigation = useNavigation();

  return (
    <RowContainer style={style}>
      <AppText style={styles.heading}>{title}</AppText>
      <ButtonText
        onPress={() => navigation.navigate(routes.FULLLIST, data)}
        color={colors.ash}
        text="See all"
      />
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 17,
    fontWeight: "600",
  },
});

export default HorizontalListHeader;
