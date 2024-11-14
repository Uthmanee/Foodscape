import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

import FoodListItem from "../components/Food/FoodListItem";
import Screen from "../components/Screen";
import UtilityComponent from "../components/UtilityComponent";
import ScreenName from "../components/ScreenName";
import routes from "../navigation/routes";
import ListContainer from "../components/ListContainer";

export default function RestaurantDishScreen({ navigation, route }) {
  const dish = route.params;
  const restaurantInfo = {
    restaurantName: dish.restaurantName,
    minutesAway: dish.minutesAway,
    distance: dish.distance,
  };

  const renderItemHandler = ({ item }) => {
    const foodItem = { ...item, ...restaurantInfo };
    return <FoodListItem food={foodItem} />;
  };

  return (
    <Screen style={styles.screen}>
      <UtilityComponent onPress={() => navigation.goBack()} />
      <ScreenName style={styles.ScreenName} name={dish.name} />
      <ListContainer>
        <FlatList
          data={dish.food}
          keyExtractor={(food) => food.id.toString()}
          renderItem={renderItemHandler}
          showsVerticalScrollIndicator={false}
        />
      </ListContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    padding: 20,
  },
  ScreenName: {
    marginBottom: 10,
    marginTop: 20,
  },
});
