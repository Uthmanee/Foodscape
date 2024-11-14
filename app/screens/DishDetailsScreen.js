import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { Image } from "react-native-expo-image-cache";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { cartActions } from "../store/cart-slice";
import colors from "../config/colors";
import Crosshairs from "../components/Icons/Crosshairs";
import LocationIcon from "../components/Icons/LocationIcon";
import Notification from "../components/Notification";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import ScreenNavBar from "../components/ScreenNavBar";
import StarIcon from "../components/Icons/StarIcon";
import TabbedInterface from "../components/TabbedInterface";
import TextObject from "../components/TextObject";
import TimeIcon from "../components/Icons/TimeIcon";
import useNotification from "../hooks/useNotification";
import QuantityChange from "../components/QuantityChange";

export default function DishDetailsScreen({ route }) {
  const foodDetail = route.params;

  const [quantity, setQuantity] = useState(foodDetail.quantity);
  const basePrice = foodDetail.price / foodDetail.quantity;
  const [price, setPrice] = useState(foodDetail.price);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setPrice((prevPrice) => prevPrice + basePrice);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      price > basePrice ? setPrice((prevPrice) => prevPrice - basePrice) : null;
    }
  };

  const dispatch = useDispatch();

  const { notification, notificationVisible, setNotificationVisible } =
    useNotification("cart", "added");

  const handleAddToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        ...foodDetail,
        price,
        quantity,
      })
    );
  };

  return (
    <Screen statusBarBackgroundColor={colors.altBackgroundColor}>
      <View style={{ alignItems: "center" }}>
        <Notification
          visible={notificationVisible}
          message={notification}
          onHide={() => {
            setNotificationVisible(false);
            dispatch(cartActions.resetNotification());
          }}
        />
      </View>
      <View style={styles.screenHeader}>
        <ScreenNavBar
          style={styles.appNavBar}
          screenName={foodDetail.name.toUpperCase()}
        />
        {/* <Image style={styles.image} source={{ uri: foodDetail.imageUrl }} /> */}
        <Image
          preview={{
            uri: "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/thumbnail%2Ffoodthumbnail.jpg?alt=media&token=4e3ce545-9bb1-4c32-982f-ad1a9cd8a2a8",
          }}
          tint="light"
          style={styles.image}
          uri={foodDetail.imageUrl}
        />
      </View>
      <View style={styles.screenBody}>
        <RowContainer style={styles.textObjectsContainer}>
          <TextObject
            iconcolor={colors.primary}
            IconComponent={LocationIcon}
            text={foodDetail.restaurantName}
          />
          <TextObject
            iconcolor={colors.primary}
            IconComponent={TimeIcon}
            text={foodDetail.minutesAway}
          />
          <TextObject
            iconcolor={colors.primary}
            IconComponent={Crosshairs}
            text="1.5 km"
          />
        </RowContainer>
        <TabbedInterface
          tab1="Details"
          tab2="Ingredients"
          tab3="Reviews"
          content1="Crafted with seasoned ground beef, melted cheese, crisp lettuce, ripe tomato, and a secret sauce, all nestled between a toasted sesame seed bun, the Kubie Burger offers a perfect balance of savory, tangy, and creamy flavors."
          content2="Rolls, beef steak mince, olive oil, ketchup, egg, sliced tomato, beetroot, horseradish sauce, mayonnaise and ketchup."
          content3="Properly prepared and delicious"
        />
        <RowContainer style={styles.ratingContainer}>
          <AppText>250g | 125 cal</AppText>
          <TextObject
            name="staro"
            iconcolor={colors.primary}
            IconComponent={StarIcon}
            text="4.3(147)"
          />
        </RowContainer>
        <RowContainer style={styles.priceContainer}>
          <QuantityChange
            size={15}
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
          <AppText style={styles.price} color={colors.altTextColor}>
            {`N ${price}`}
          </AppText>
        </RowContainer>
        <AppButton
          style={styles.button}
          shape="round"
          onPress={handleAddToCart}
        >
          Add to Cart
        </AppButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  appNavBar: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
  image: {
    borderRadius: 131.5,
    height: 263,
    objectFit: "cover",
    top: 55,
    width: 263,
  },
  price: {
    fontWeight: 700,
    fontSize: 20,
  },
  priceContainer: {
    marginTop: 20,
  },
  ratingContainer: {
    marginTop: 10,
  },
  screenBody: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
  },
  screenHeader: {
    alignItems: "center",
    backgroundColor: colors.altBackgroundColor,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
  textObjectsContainer: {
    marginBottom: 20,
  },
});
