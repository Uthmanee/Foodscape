import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import HeartIcon from "../Icons/HeartIcon";
import RowContainer from "../RowContainer";
import AppText from "../AppText";
import Badge from "../Badge";
import colors from "../../config/colors";
import useFavouriteData from "../../hooks/useFavouriteData";
import useFavourites from "../../hooks/useFavourites";

function HorizontalListCard({ onPress, popularFood }) {
  const isFavourite = useFavouriteData(popularFood.id, "foods");
  const ToggleFavouritesFunction = useFavourites();
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground
        style={styles.cardBackground}
        source={{ uri: popularFood.imageUrl }}
      >
        <RowContainer style={styles.iconConatiner}>
          <HeartIcon
            color={colors.white}
            isFavourite={isFavourite}
            toggleFavourite={() => ToggleFavouritesFunction(popularFood)}
            size={20}
          />
        </RowContainer>
        <View>
          <AppText style={styles.text} color={colors.white}>
            {popularFood.name}
          </AppText>
          <RowContainer>
            <AppText style={styles.text} color={colors.white}>
              N {popularFood.price}.00
            </AppText>
            <Badge
              iconSize={10}
              margin={2}
              textStyle={styles.badgeText}
              style={styles.badge}
              text={popularFood.rating}
            />
          </RowContainer>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 10,
  },
  card: {
    marginRight: 8,
  },
  cardBackground: {
    borderRadius: 12,
    height: 150,
    justifyContent: "space-between",
    objectFit: "contain",
    overflow: "hidden",
    padding: 10,
    paddingTop: 15,
    width: 158,
  },
  iconConatiner: {
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default HorizontalListCard;
