import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import AppText from "../components/AppText";
import ChevronLeft from "../components/Icons/ChevronLeft";
import foodData from "../dataStructure/foodData";
import restaurantData from "../dataStructure/restaurantData";
import FoodListItem from "../components/Food/FoodListItem";
import RestaurantCard from "../components/Restaurant/RestaurantCard";
import routes from "../navigation/routes";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import snacks from "../dataStructure/snacksData";

const dummyData = [...foodData, ...restaurantData, ...snacks];

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [previousSearches, setPreviousSearches] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredResults = dummyData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const updatePreviousSearches = (query) => {
    if (!previousSearches.includes(query)) {
      const updatedSearches = [query, ...previousSearches.slice(0, 4)];
      setPreviousSearches(updatedSearches);
    }
  };

  const renderItem = ({ item }) => {
    if (item.type === "food")
      return (
        <FoodListItem
          deactivateQuantityChange
          food={item}
          onPress={() => handleSearchResultPress(item.name)}
          ui="searchResult"
        />
      );
    if (item.type === "restaurant")
      return (
        <RestaurantCard
          onPress={() => {
            handleSearchResultPress(item.name);
            navigation.navigate(routes.RESTAURANT_DISHES, item);
          }}
          restaurantData={item}
        />
      );
  };

  const renderPreviousSearch = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePreviousSearch(item)}
      style={styles.previousSearchItem}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const handlePreviousSearch = (query) => {
    Keyboard.dismiss();
    setSearchQuery(query);
    const filteredResults = dummyData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSearchResultPress = (result) => {
    Keyboard.dismiss();
    updatePreviousSearches(result);
    setTimeout(() => Keyboard.dismiss(), 100);
  };

  return (
    <Screen style={styles.screen}>
      <RowContainer style={styles.container}>
        <ChevronLeft />
        <SearchBar
          backgroundColor="#ECECEC"
          onChangeText={handleSearch}
          onSubmitEditing={() => updatePreviousSearches(searchQuery)}
          placeholder="Search..."
          value={searchQuery}
        />
      </RowContainer>
      {!searchQuery && (
        <>
          <FlatList
            data={previousSearches}
            renderItem={renderPreviousSearch}
            keyExtractor={(item, index) => index.toString()}
            keyboardShouldPersistTaps="handled"
          />
        </>
      )}
      {searchQuery && (
        <>
          {searchResults.length !== 0 && (
            <AppText style={styles.results}>Results</AppText>
          )}
          {searchResults.length === 0 && (
            <AppText>{searchQuery} not available</AppText>
          )}
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            keyboardShouldPersistTaps="handled"
          />
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  previousSearchItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  results: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 5,
    textDecorationLine: "underline",
  },
  screen: {
    padding: 20,
  },
});

export default SearchScreen;
