import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import MediaObject from "./mediaObjects/MediaObject";

function PaymentCardItem({ cardData, containerStyle, onLongPress, onPress }) {
  return (
    <TouchableOpacity onLongPress={onLongPress} onPress={onPress}>
      <MediaObject
        body={cardData.cardNumber}
        image={cardData.logo}
        containerStyle={containerStyle}
        paymentCard
        title={cardData.cardType}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PaymentCardItem;
