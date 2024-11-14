import React, { useState } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import AppText from "../components/AppText";
import FoodListItem from "../components/Food/FoodListItem";
import EmptyFavouritesIcon from "../components/EmptyFavouritesIcon";
import RestaurantCard from "../components/Restaurant/RestaurantCard";
import RowContainer from "../components/RowContainer";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import ScreenNavBar from "../components/ScreenNavBar";
import colors from "../config/colors";
import ListContainer from "../components/ListContainer";
import Empty from "../components/Empty";

export default function FavouritesScreen({ navigation }) {
  const { foods: favouriteFoods, restaurants: favouriteRestaurants } =
    useSelector((state) => state.favourite.favourites);

  const favouriteFoodsIsEmpty = favouriteFoods.length === 0;
  const favouriteRestaurantsIsEmpty = favouriteRestaurants.length === 0;

  const [activeTab, setActiveTab] = useState(1); // Initial active tab is 2

  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <Screen style={styles.screen}>
      <ScreenNavBar screenName="Favourties" />
      {/* Tab Buttons */}
      <RowContainer style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            styles.tab1,
            activeTab === 1 && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress(1)}
        >
          <AppText style={styles.tabButtonText}>Dishes</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            styles.tab2,
            activeTab === 2 && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress(2)}
        >
          <AppText style={styles.tabButtonText}>Restaurants</AppText>
        </TouchableOpacity>
      </RowContainer>
      {/* Data Display */}
      {activeTab === 1 && !favouriteFoodsIsEmpty && (
        <ListContainer style={styles.listContainer}>
          <FlatList
            data={favouriteFoods}
            keyExtractor={(food) => food.id.toString()}
            renderItem={({ item }) => <FoodListItem food={item} />}
            showsVerticalScrollIndicator={false}
          />
        </ListContainer>
      )}
      {activeTab === 1 && favouriteFoodsIsEmpty && (
        <Empty
          Icon={<EmptyFavouritesIcon />}
          text1="No food in favourites"
          text2="You have not added a food to favourites"
        />
      )}
      {activeTab === 2 && !favouriteRestaurantsIsEmpty && (
        <ListContainer style={styles.listContainer}>
          <FlatList
            data={favouriteRestaurants}
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
      )}
      {activeTab === 2 && favouriteRestaurantsIsEmpty && (
        <Empty
          Icon={<EmptyFavouritesIcon />}
          text1="No restaurants in favourites"
          text2="You have not added a restaurant to favourites"
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  activeTabButton: {
    backgroundColor: colors.altBackgroundColor,
  },
  listContainer: {
    paddingBottom: 70,
  },
  screen: {
    alignItems: "center",
    padding: 20,
  },
  ScreenName: {
    marginBottom: 10,
    marginTop: 20,
  },
  tab1: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  tab2: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  tabButton: {
    alignItems: "center",
    backgroundColor: colors.white,
    justifyContent: "center",
    paddingVertical: 10,
    width: 160,
  },
  tabButtonText: {
    fontSize: 15,
    fontWeight: "600",
  },
  tabContainer: {
    justifyContent: "center",
    marginVertical: 20,
  },
});
