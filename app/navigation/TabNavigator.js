import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import BottomTabIcon from "./BottomTabIcon";
import colors from "../config/colors";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import FavouritesNavigator from "./FavoritesNavigator";
import FeedNavigator from "./FeedNavigator";
import RecentScreen from "../screens/RecentScreen";
import SearchScreen from "../screens/SearchScreen";
import useUserData from "../hooks/useUserData";

import routes from "./routes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { totalCartQuantity, favouritesLength } = useUserData();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BottomTabIcon
              size={size}
              color={color}
              image={require("../assets/icons/home.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recent"
        component={RecentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BottomTabIcon
              size={size}
              color={color}
              image={require("../assets/icons/recent.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <>
              <AntDesign name="hearto" color={color} size={size} />
              {favouritesLength > 0 && (
                <View
                  style={{
                    position: "absolute",
                    right: 18,
                    top: -3,
                  }}
                >
                  <Text style={{ color: colors.primary }}>
                    {favouritesLength}
                  </Text>
                </View>
              )}
            </>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <>
              <BottomTabIcon
                size={size}
                color={color}
                image={require("../assets/icons/cart.png")}
              />
              {totalCartQuantity > 0 && (
                <View
                  style={{
                    position: "absolute",
                    right: 18,
                    top: -3,
                  }}
                >
                  <Text style={{ color: colors.primary }}>
                    {totalCartQuantity}
                  </Text>
                </View>
              )}
            </>
          ),
        }}
        tab
      />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Bottom Tab"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Bottom Tab" component={TabNavigator} />
      <Stack.Screen name={routes.CHECKOUT} component={CheckoutScreen} />
      <Stack.Screen name={routes.DISH_DETAILS} component={DishDetailsScreen} />
      <Stack.Screen name={routes.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
