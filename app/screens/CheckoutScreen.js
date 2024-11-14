import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AddressPicker from "../components/AddressPicker";
import AppButton from "../components/AppButton";
import { cartActions } from "../store/cart-slice";
import EntityText from "../components/EntityText";
import idGenerator from "../helper/idGenerator";
import MediaObject from "../components/mediaObjects/MediaObject";
import paymentMethods from "../dataStructure/paymentMethods";
import { recentActions } from "../store/recent-slice";
import Screen from "../components/Screen";
import ScreenNavBar from "../components/ScreenNavBar";
import TransactionSummary from "../components/TransactionSummary";
import OrderCompleteModal from "../components/OrderCompleteModal";
import ActivityIndicator from "../components/ActivityIndicator";

export default function CheckoutScreen({ navigation }) {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart.items);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const total = subTotal - 250; // 250 worth of discount

  const [selectedPaymentId, setSelectedPaymentId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleOrder = () => {
    const recentOrder = cartData.map((item) => {
      return { ...item, id: idGenerator() };
    });
    dispatch(recentActions.addToRecent(recentOrder));
    dispatch(cartActions.emptyCart());

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setModalIsVisible(true);
    }, 3000);
  };

  return (
    <>
      <ActivityIndicator loading={loading} />
      <OrderCompleteModal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />
      <Screen style={styles.screen}>
        <ScreenNavBar style={styles.screenNavbar} screenName="Checkout" />
        <EntityText entity="Delivery Address" />
        <AddressPicker />
        <EntityText entity="Payment Method" />
        <FlatList
          data={paymentMethods}
          keyExtractor={(paymentItem) => paymentItem.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (selectedPaymentId === item.id) return;
                else setSelectedPaymentId(item.id);
              }}
            >
              <MediaObject
                body={item.body}
                containerStyle={styles.mediaObjectContainer2}
                image={item.image}
                itemIsSelected={selectedPaymentId === item.id}
                title={item.title}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
        <TransactionSummary
          field="Delivery"
          subtotal={total}
          total={total}
          value="free"
        />
        <AppButton style={styles.button} shape="round" onPress={handleOrder}>
          Place Order
        </AppButton>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
  },
  image: {
    height: 30,
    width: 30,
  },
  mediaObjectContainer: {
    marginBottom: 25,
  },
  mediaObjectContainer2: {
    paddingVertical: 12,
    marginBottom: 10,
  },
  screen: {
    padding: 20,
    paddingTop: 10,
  },
  screenNavbar: {
    marginBottom: 15,
  },
});
