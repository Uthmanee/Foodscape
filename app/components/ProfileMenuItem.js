import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppText from "./AppText";
import RowContainer from "./RowContainer";

function ProfileMenuItem({
  IconComponent,
  item,
  containerStyle,
  onPress,
  route,
}) {
  const navigation = useNavigation();
  const navigator = () => {
    if (!route) return;
    navigation.navigate(route);
  };
  return (
    <TouchableOpacity onPress={onPress ? onPress : navigator}>
      <RowContainer style={[styles.container, containerStyle]}>
        <IconComponent style={styles.icon} onPress={navigator} />
        <AppText>{item}</AppText>
      </RowContainer>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingHorizontal: 17,
    paddingVertical: 20,
  },
  icon: {
    marginRight: 36,
  },
});

export default ProfileMenuItem;
