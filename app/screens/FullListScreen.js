import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import FoodListItem from "../components/Food/FoodListItem";
import Screen from "../components/Screen";
import UtilityComponent from "../components/UtilityComponent";
import ScreenName from "../components/ScreenName";
import ListContainer from "../components/ListContainer";

export default function FoodsScreen({ route }) {
  const data = route.params;

  return (
    <Screen style={styles.screen}>
      <UtilityComponent />
      <ScreenName style={styles.ScreenName} name={data.screenName} />
      <ListContainer>
        <FlatList
          data={data.list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FoodListItem food={item} />}
          showsVerticalScrollIndicator={false}
        />
      </ListContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  ScreenName: {
    marginBottom: 10,
    marginTop: 20,
  },
});
