import { createStackNavigator } from "@react-navigation/stack";

import FoodsScreen from "../screens/FoodsScreen";
import FullListScreen from "../screens/FullListScreen";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import RestaurantDishCategory from "../screens/RestaurantDishCategory";
import RestaurantDishesScreen from "../screens/RestaurantDishesScreen";
import routes from "./routes";
import SnacksScreen from "../screens/SnacksScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.HOME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.HOME} component={HomeScreen} />
      <Stack.Screen name={routes.RESTAURANT} component={RestaurantScreen} />
      <Stack.Screen
        name={routes.RESTAURANT_DISHES}
        component={RestaurantDishesScreen}
      />
      <Stack.Screen
        name={routes.RESTAURANT_DISH_CATEGORY}
        component={RestaurantDishCategory}
      />
      <Stack.Screen name={routes.FOOD} component={FoodsScreen} />
      <Stack.Screen name={routes.SNACKS} component={SnacksScreen} />
      <Stack.Screen name={routes.FULLLIST} component={FullListScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
