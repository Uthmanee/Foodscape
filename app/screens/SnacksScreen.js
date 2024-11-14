import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import FoodListItem from "../components/Food/FoodListItem";
import ListContainer from "../components/ListContainer";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import ScreenName from "../components/ScreenName";
import snacksApi from "../api/snacks";
import useApi from "../api/useApi";
import UtilityComponent from "../components/UtilityComponent";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

export default function SnacksScreen({ navigation }) {
  const {
    data: snacks,
    error,
    loading,
    request: fetchSnacks,
  } = useApi(snacksApi.getSnacks);

  useEffect(() => {
    fetchSnacks();
  }, []);

  return (
    <>
      {loading && <ActivityIndicator loading={loading} />}
      <Screen style={styles.screen}>
        {error && <ErrorIndicator error={error} />}
        {!error && (
          <>
            <UtilityComponent />
            <ScreenName style={styles.ScreenName} name="Snacks" />
            <ListContainer>
              <FlatList
                data={snacks}
                keyExtractor={(food) => food.id.toString()}
                renderItem={({ item }) => (
                  <FoodListItem
                    food={item}
                    onPress={() =>
                      navigation.navigate(routes.DISH_DETAILS, item)
                    }
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
