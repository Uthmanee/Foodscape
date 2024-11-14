import React, { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";
import CachedImageBackground from "../CachedImageBackground";

function RestaurantCard1({ imageUrl, previewUrl, onPress, restaurantName }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <CachedImageBackground
        alignItems="center"
        style={styles.container}
        previewUrl={previewUrl}
        uri={imageUrl}
        justifyContent="flex-end"
      >
        <AppText color={colors.white} style={styles.restaurantName}>
          {restaurantName}
        </AppText>
      </CachedImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 9,
    flex: 1,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  restaurantName: {
    textAlign: "center",
    marginBottom: 20,
  },
  touchable: {
    flex: 1,
  },
});

export default memo(RestaurantCard1);

// import React from "react";
// import {
//   ImageBackground,
//   StyleSheet,
//   TouchableWithoutFeedback,
// } from "react-native";

// import AppText from "../AppText";
// import colors from "../../config/colors";

// function RestaurantCard1({ imageUrl, onPress, restaurantName }) {
//   return (
//     <TouchableWithoutFeedback onPress={onPress}>
//       <ImageBackground style={styles.container} source={{ uri: imageUrl }}>
//         <AppText color={colors.white} style={styles.restaurantName}>
//           {restaurantName}
//         </AppText>
//       </ImageBackground>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     borderRadius: 9,
//     flex: 1,
//     justifyContent: "flex-end",
//     overflow: "hidden",
//     paddingBottom: 25,
//   },
//   restaurantName: {
//     textAlign: "center",
//   },
// });

// export default RestaurantCard1;
