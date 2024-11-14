import { createStackNavigator } from "@react-navigation/stack";

import EditPaymentCardScreen from "../screens/EditPaymentCardScreen";
import NewCardScreen from "../screens/NewCardScreen";
import PaymentCardScreen from "../screens/PaymentCardsScreen";
import PersonalInfoScreen from "../screens/PersonalInfoScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const PaymentCardsNavigator = () => (
  <Stack.Navigator
    initialRouteName={routes.PAYMENTCARDS}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={routes.PAYMENTCARDS} component={PaymentCardScreen} />
    <Stack.Screen name={routes.PERSONALINFO} component={PersonalInfoScreen} />
    <Stack.Screen name={routes.NEWCARD} component={NewCardScreen} />
    <Stack.Screen name={routes.EDITCARD} component={EditPaymentCardScreen} />
  </Stack.Navigator>
);

export default PaymentCardsNavigator;
