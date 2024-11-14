import React, { useContext, useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import ButtonText from "../components/ButtonText";
import Carousel from "../components/Carousel";
import colors from "../config/colors";
import ComponentPadding from "../components/ComponentPadding";
import ErrorIndicator from "../components/ErrorIndicator";
import LocationContext from "../context/LocationContext";
import LocationIcon from "../components/Icons/LocationIcon";
import popularfoods from "../dataStructure/popularfoods";
import HorizontalListCard from "../components/Food/HorizontalListCard";
import restaurantApi from "../api/restaurant";
import routes from "../navigation/routes";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import SearchBarDummy from "../components/SearchBarDummy";
import Tab from "../components/Tab";
import TextObject from "../components/TextObject";
import useApi from "../api/useApi";
import HorizonatalList from "../components/HorizontalList";
import HorizontalListHeader from "../components/HorizontalListHeader";
import specialOrders from "../dataStructure/specialOrders";
import { StatusBar } from "expo-status-bar";

function HomeScreen({ navigation }) {
  const {
    data: restaurants,
    error,
    loading,
    request: fetchRestaurants,
  } = useApi(restaurantApi.getRestaurant);

  useEffect(() => {
    fetchRestaurants();
  }, [restaurants]);

  const { error: cartFetchError, loading: cartFetchLoading } = useSelector(
    (state) => state.cart.ui
  );

  const { error: favouriteFetchError, loading: favouriteFetchLoading } =
    useSelector((state) => state.favourite.ui);

  const { location } = useContext(LocationContext);

  const screens = {
    popularFoods: "Popular Foods",
    specialOrders: "Special Orders",
  };

  return (
    <Screen screen="home" style={styles.screen}>
      {loading && (
        <ActivityIndicator
          loading={loading && cartFetchLoading && favouriteFetchLoading}
        />
      )}
      {error && (
        <ErrorIndicator error={error} onButtonPress={fetchRestaurants} />
      )}
      {!(loading && cartFetchLoading && favouriteFetchLoading) && !error && (
        <ScrollView>
          <TextObject
            style={styles.badge}
            iconSize={24}
            IconComponent={LocationIcon}
            text={
              location?.city && location?.state
                ? `${location?.city}, ${location?.state}`
                : "Fetching Location"
            }
          />
          <ComponentPadding>
            <AppText style={styles.welcomeMessage}>Welcome, Awwal</AppText>
            <AppText>What do you want to order today?</AppText>
            <RowContainer style={styles.container}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  style={styles.icon}
                  source={require("../assets/icons/Menu.png")}
                />
              </TouchableOpacity>
              <SearchBarDummy />
            </RowContainer>
          </ComponentPadding>
          <ScrollView
            contentContainerStyle={{ paddingLeft: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <Tab
              image={require("../assets/fork.png")}
              onPress={() => navigation.navigate(routes.RESTAURANT)}
              name="Restaurants"
            />
            <Tab
              image={require("../assets/servedFood.png")}
              onPress={() => navigation.navigate(routes.FOOD)}
              name="Foods"
            />
            <Tab
              image={require("../assets/snacks.png")}
              name="Snacks"
              onPress={() => navigation.navigate(routes.SNACKS)}
            />
          </ScrollView>
          <ComponentPadding>
            <HorizontalListHeader
              data={{ list: popularfoods, screenName: screens.popularFoods }}
              title={screens.popularFoods}
            />
          </ComponentPadding>
          <HorizonatalList data={popularfoods} Component={HorizontalListCard} />
          <ComponentPadding>
            <AppText style={[styles.heading, styles.restaurant]}>
              Restaurants near you
            </AppText>
            <Carousel data={restaurants?.slice(0, 3)} />
          </ComponentPadding>
          <ComponentPadding>
            <HorizontalListHeader
              data={{
                list: specialOrders,
                screenName: screens.specialOrders,
              }}
              style={styles.specialOrdersContainer}
              title={screens.specialOrders}
            />
          </ComponentPadding>
          <HorizonatalList
            data={specialOrders}
            Component={HorizontalListCard}
          />
        </ScrollView>
      )}
      <StatusBar style="auto" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  container: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  icon: {
    height: 20,
    width: 20,
  },

  restaurant: {
    marginBottom: 10,
  },
  screen: {
    paddingTop: 10,
  },
  scrollView: {
    marginBottom: 10,
    marginTop: 20,
    maxHeight: 66,
    padding: 10,
  },
  specialOrdersContainer: {
    marginTop: 20,
  },
  welcomeMessage: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
  },
});

export default HomeScreen;
