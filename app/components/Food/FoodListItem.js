import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-expo-image-cache";

import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import colors from "../../config/colors";
import routes from "../../navigation/routes";
import useFavourites from "../../hooks/useFavourites";
import useFavouriteData from "../../hooks/useFavouriteData";
import RowContainer from "../RowContainer";

export default function FoodListItem({
  buttonText,
  deactivateQuantityChange,
  food,
  onLongPress,
  removeButton,
  ui = "",
  onPress = () => {},
}) {
  const [quantity, setQuantity] = useState(food.quantity);
  const [price, setPrice] = useState(food.price);

  const [buttonDisabled, setButtonDisabled] = useState(
    ui === "recent" ? true : false
  );
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setPrice((prevPrice) => prevPrice + food.price);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      price > food.price
        ? setPrice((prevPrice) => prevPrice - food.price)
        : null;
    }
  };

  const isFavourite = useFavouriteData(food.id, "foods");

  const ToggleFavouritesFunction = useFavourites(food);

  const navigation = useNavigation();

  const handlePress = () => {
    if (deactivateQuantityChange && ui === "searchResult") {
      onPress();
      navigation.navigate(routes.DISH_DETAILS, {
        ...food,
        quantity,
        price,
      });
      if (deactivateQuantityChange) {
        return onPress();
      }
      return;
    }
    navigation.navigate(routes.DISH_DETAILS, {
      ...food,
      quantity,
      price,
    });
  };

  return (
    <TouchableOpacity
      disabled={buttonDisabled}
      onLongPress={onLongPress}
      onPress={handlePress}
    >
      <RowContainer style={styles.container}>
        <View style={styles.imageContainer}>
          {/* <Image style={styles.image} source={{ uri: food.imageUrl }} /> */}
          <Image
            preview={{
              uri: "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/thumbnail%2Ffoodthumbnail.jpg?alt=media&token=4e3ce545-9bb1-4c32-982f-ad1a9cd8a2a8",
            }}
            tint="light"
            style={styles.image}
            uri={food.imageUrl}
          />
        </View>
        <View style={styles.textContainer}>
          <Header
            toggleFavourite={() => {
              ToggleFavouritesFunction(food);
            }}
            deactivateQuantityChange={deactivateQuantityChange}
            isFavourite={isFavourite}
            foodName={food.name}
            // id={food.id}
          />
          <Body foodDetail={food.foodDetail} price={price} />
          <Footer
            buttonText={buttonText}
            deactivateQuantityChange={deactivateQuantityChange}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            onPress={handlePress}
            removeButton={removeButton}
            quantity={quantity}
          />
        </View>
      </RowContainer>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    marginVertical: 8,
    padding: 25,
    width: "100%",
  },

  image: {
    borderRadius: 45.5,
    height: 91,
    width: 91,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 25,
  },

  textContainer: {},
});
