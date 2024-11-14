import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import AppText from "../AppText";
import RowContainer from "../RowContainer";
import colors from "../../config/colors";
import Badge from "../Badge";
import HeartIcon from "../Icons/HeartIcon";
import LocationIcon from "../Icons/LocationIcon";
import TimeIcon from "../Icons/TimeIcon";
import TextObject from "../TextObject";
import useFavourites from "../../hooks/useFavourites";
import useFavouriteData from "../../hooks/useFavouriteData";
import CachedImageBackground from "../CachedImageBackground";

export default function RestaurantCard({
  previewUrl,
  onPress,
  restaurantData,
}) {
  const isFavourite = useFavouriteData(restaurantData.id, "restaurants");

  const ToggleFavouritesFunction = useFavourites(restaurantData);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CachedImageBackground
        style={styles.cardBackground}
        previewUrl={restaurantData.thumbnail}
        uri={restaurantData.imageUrl}
        justifyContent="space-between"
      >
        <RowContainer style={styles.header}>
          <Badge text={restaurantData.rating} />
          <HeartIcon
            toggleFavourite={() => ToggleFavouritesFunction(restaurantData)}
            isFavourite={isFavourite}
          />
        </RowContainer>
        <View style={{ width: "100%" }}>
          <AppText style={styles.restaurantName} color={colors.white}>
            {restaurantData.name}
          </AppText>
          <RowContainer style={styles.detailsContainer}>
            <TextObject
              style={styles.gap}
              color={colors.white}
              iconcolor={colors.white}
              IconComponent={LocationIcon}
              text={restaurantData.location}
            />
            <TextObject
              color={colors.white}
              iconcolor={colors.white}
              IconComponent={TimeIcon}
              text={restaurantData.minutesAway}
            />
          </RowContainer>
        </View>
      </CachedImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardBackground: {
    borderRadius: 15,
    height: 204,
    marginVertical: 10,
    overflow: "hidden",
    padding: 13,
  },
  container: {},
  detailsContainer: {
    justifyContent: "center",
    marginBottom: 12,
  },
  gap: {
    marginRight: 13,
  },
  header: {
    width: "100%",
  },
  restaurantName: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",
    marginBottom: 3,
  },
});
