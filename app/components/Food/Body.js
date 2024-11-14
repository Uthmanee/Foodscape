import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../AppText";
import FoodDetailText from "./FoodDetailText";

export default function Body({ foodDetail, price }) {
  return (
    <View>
      <FoodDetailText>{foodDetail}</FoodDetailText>
      <AppText style={styles.price}>N {price}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  price: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

// import React from "react";
// import { View, StyleSheet } from "react-native";

// import AppText from "../AppText";
// import FoodDetailText from "./FoodDetailText";

// export default function Body({ foodDetail, price }) {
//   return (
//     <View style={{ width: 191 }}>
//       <FoodDetailText>{foodDetail}</FoodDetailText>
//       <AppText style={styles.price}>N {price}</AppText>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   price: {
//     fontSize: 13,
//     fontWeight: "bold",
//   },
// });
