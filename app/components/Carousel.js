import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";

import colors from "../config/colors";
import RestaurantCard1 from "./Restaurant/RestaurantCard1";
import routes from "../navigation/routes";

const Carousel = ({ data }) => {
  const navigation = useNavigation();
  if (!data)
    return (
      <View style={styles.container}>
        <Text>Data Fetch Error.</Text>
      </View>
    );
  return (
    <View style={styles.swiperContainer}>
      <Swiper
        showsButtons={true}
        loop={false}
        paginationStyle={styles.paginationStyle}
        dot={<View style={styles.dot} />}
        activeDot={<View style={[styles.dot, styles.activeDot]} />}
        nextButton={
          <FontAwesome6
            name="circle-arrow-right"
            size={22}
            color={colors.white}
          />
        }
        prevButton={
          <FontAwesome6
            name="circle-arrow-left"
            size={22}
            color={colors.white}
          />
        }
      >
        {data?.map((item) => (
          <RestaurantCard1
            imageUrl={item.imageUrl}
            key={item.id}
            previewUrl={item.thumbnail}
            onPress={() => navigation.navigate(routes.RESTAURANT_DISHES, item)}
            restaurantName={item.name}
          />
        ))}
      </Swiper>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  swiperContainer: {
    height: 180,
  },
  paginationStyle: {
    bottom: 3,
  },
  dot: {
    backgroundColor: colors.white,
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: colors.primary,
  },
});

export default Carousel;
