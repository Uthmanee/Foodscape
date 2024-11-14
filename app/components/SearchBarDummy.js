import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FilterIcon from "./Icons/FilterIcon";
import SearchIcon from "./Icons/SearchIcon";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function SearchBarDummy({ backgroundColor = colors.white }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={() => navigation.navigate(routes.SEARCH)}
    >
      <SearchIcon />
      <FilterIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    paddingVertical: 7,
    width: "80%",
  },
});
