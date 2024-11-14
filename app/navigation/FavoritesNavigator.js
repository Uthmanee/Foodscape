import { createStackNavigator } from "@react-navigation/stack";

import DishDetailsScreen from "../screens/DishDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import RestaurantDishCategory from "../screens/RestaurantDishCategory";
import RestaurantDishesScreen from "../screens/RestaurantDishesScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FavouriteNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.FAVOURITE}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.FAVOURITE} component={FavouritesScreen} />
      <Stack.Screen
        name={routes.RESTAURANT_DISHES}
        component={RestaurantDishesScreen}
      />
      <Stack.Screen
        name={routes.RESTAURANT_DISH_CATEGORY}
        component={RestaurantDishCategory}
      />
      <Stack.Screen name={routes.DISH_DETAILS} component={DishDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FavouriteNavigator;
