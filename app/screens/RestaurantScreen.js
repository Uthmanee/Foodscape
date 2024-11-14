import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import restaurantApi from "../api/restaurant";
import RestaurantCard from "../components/Restaurant/RestaurantCard";
import Screen from "../components/Screen";
import ScreenName from "../components/ScreenName";
import useApi from "../api/useApi";
import UtilityComponent from "../components/UtilityComponent";
import routes from "../navigation/routes";
import ListContainer from "../components/ListContainer";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

export default function RestaurantScreen({ navigation }) {
  const {
    data: restaurants,
    error,
    loading,
    request: fetchRestaurants,
  } = useApi(restaurantApi.getRestaurant);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      {loading && <ActivityIndicator loading={loading} />}
      <Screen style={styles.screen}>
        {error && <ErrorIndicator error={error} />}
        {!error && (
          <>
            <UtilityComponent />
            <ScreenName style={styles.ScreenName} name="Restaurants" />
            <ListContainer>
              <FlatList
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id.toString()}
                renderItem={({ item }) => (
                  <RestaurantCard
                    onPress={() =>
                      navigation.navigate(routes.RESTAURANT_DISHES, item)
                    }
                    restaurantData={item}
                  />
                )}
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
