import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppButton from "../components/AppButton";
import { cartActions } from "../store/cart-slice";
import CartItem from "../components/Cart/CartItem";
import colors from "../config/colors";
import Empty from "../components/Empty";
import Notification from "../components/Notification";
import routes from "../navigation/routes";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import ScreenNavBar from "../components/ScreenNavBar";
import TransactionSummary from "../components/TransactionSummary";
import useNotification from "../hooks/useNotification";

export default function CartScreen({ navigation }) {
  const {
    items: cartData,
    subTotal,
    uploading,
  } = useSelector((state) => state.cart);

  const promoDiscount = 250;

  const dispatch = useDispatch();

  const cartIsEmpty = cartData.length === 0;

  const removeItemFromCartHandler = (id, quantity) => {
    dispatch(cartActions.removeItemFromCart({ id, quantity }));
  };

  const { notification, notificationVisible, setNotificationVisible } =
    useNotification("cart", "removed");

  const showNotification = !uploading && notificationVisible;

  return (
    <Screen style={styles.screen}>
      <View style={{ alignItems: "center" }}>
        <Notification
          visible={showNotification}
          message={notification}
          onHide={() => {
            setNotificationVisible(false);
            dispatch(cartActions.resetNotification());
          }}
        />
      </View>
      <ScreenNavBar style={styles.appNavBar} screenName="Cart" />
      {!cartIsEmpty && (
        <>
          <FlatList
            data={cartData}
            keyExtractor={(cartItem) => cartItem.id.toString()}
            renderItem={({ item }) => (
              <CartItem
                food={item.name}
                price={item.price}
                quantity={item.quantity}
                restaurant={item.restaurantName}
                removeItemFromCartHandler={() =>
                  removeItemFromCartHandler(item.id, item.quantity)
                }
              />
            )}
          />
          <RowContainer style={styles.inputFieldContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter promo code"
              placeholderTextColor={colors.ash}
            />
            <AppButton style={styles.applyButton}>Apply</AppButton>
          </RowContainer>
          <TransactionSummary
            field="Promo discount"
            subtotal={subTotal}
            total={subTotal - promoDiscount}
            value={`N ${promoDiscount}`}
          />
          <View style={styles.buttonsContainer}>
            <AppButton
              shape="round"
              onPress={() => navigation.navigate(routes.CHECKOUT)}
            >
              Proceed to Checkout
            </AppButton>
            <AppButton
              style={styles.shopButton}
              color={colors.backgroundColor}
              shape="round"
              textColor={colors.primary}
              onPress={() => navigation.navigate("Home")}
            >
              Continue Shopping
            </AppButton>
          </View>
        </>
      )}
      {cartIsEmpty && (
        <Empty
          image={require("../assets/emptyCart.png")}
          text1="No items in cart"
          text2="You haven't ordered a meal yet."
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  amount: {
    fontWeight: 600,
  },
  applyButton: {
    marginLeft: 4,
  },
  appNavBar: {
    marginBottom: 15,
  },
  buttonsContainer: {
    marginTop: 30,
  },
  fieldContainer: {
    marginVertical: 5,
  },

  inputField: {
    flexGrow: 1,
    marginLeft: 10,
    width: 0,
  },
  inputFieldContainer: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginTop: 28,
    marginBottom: 10,
    padding: 8,
    width: "100%",
  },
  line: {
    backgroundColor: "#E0E0E0",
    height: 1,
    marginVertical: 2,
  },
  screen: {
    padding: 25,
  },
  shopButton: {
    borderColor: colors.primary,
    borderWidth: 1,
    marginTop: 15,
  },
});
