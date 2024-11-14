import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import routes from "../navigation/routes";

function HorizontalList({ Component, data }) {
  const navigation = useNavigation();

  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={data}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Component
          onPress={() => navigation.navigate(routes.DISH_DETAILS, item)}
          popularFood={item}
        />
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    maxHeight: 200,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});

export default HorizontalList;
