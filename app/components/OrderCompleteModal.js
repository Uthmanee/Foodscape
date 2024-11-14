import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppText from "./AppText";
import colors from "../config/colors";
import routes from "../navigation/routes";
import CustomModal from "./CustomModal";

function OrderCompleteModal({ modalIsVisible, setModalIsVisible }) {
  const navigation = useNavigation();

  const handleCloseModal = () => {
    navigation.navigate("Cart", { screen: routes.CART });
  };

  if (!modalIsVisible) return null;
  return (
    <CustomModal
      action="continue"
      image={require("../assets/rafiki.png")}
      modalIsVisible={modalIsVisible}
      setModalIsVisible={setModalIsVisible}
      onCloseModal={handleCloseModal}
    >
      <AppText style={styles.gratitude}>Thank you</AppText>
      <AppText color={colors.ash}>Your order has been placed</AppText>
      <AppText color={colors.ash}>succesfully.</AppText>
      <AppText style={styles.deliveryTime}>
        Estimated delivery in 45 min
      </AppText>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    paddingHorizontal: 35,
    paddingVertical: 7,
    width: "auto",
  },
  gratitude: {
    fontWeight: "600",
    fontSize: 24,
  },
  deliveryTime: {
    fontSize: 15,
    marginVertical: 30,
  },
});

export default OrderCompleteModal;
