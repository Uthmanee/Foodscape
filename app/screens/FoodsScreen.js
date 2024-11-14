import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import foodApi from "../api/food";
import FoodListItem from "../components/Food/FoodListItem";
import Screen from "../components/Screen";
import UtilityComponent from "../components/UtilityComponent";
import ScreenName from "../components/ScreenName";
import ListContainer from "../components/ListContainer";
import useApi from "../api/useApi";

export default function FoodsScreen({ navigation }) {
  const {
    data: food,
    error,
    loading,
    request: fetchfood,
  } = useApi(foodApi.getFood);

  useEffect(() => {
    fetchfood();
  }, []);

  return (
    <>
      {loading && <ActivityIndicator loading={loading} />}
      <Screen style={styles.screen}>
        {error && <ErrorIndicator error={error} />}
        {!error && (
          <>
            <UtilityComponent />
            <ScreenName style={styles.ScreenName} name="Foods" />
            <ListContainer>
              <FlatList
                data={food}
                keyExtractor={(food) => food.id.toString()}
                renderItem={({ item }) => <FoodListItem food={item} />}
                showsVerticalScrollIndicator={false}
              />
            </ListContainer>
          </>
        )}
      </Screen>
    </>
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
