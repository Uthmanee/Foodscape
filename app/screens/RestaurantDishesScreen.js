import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ChevronLeft from "../components/Icons/ChevronLeft";
import colors from "../config/colors";
import Crosshairs from "../components/Icons/Crosshairs";
import LocationIcon from "../components/Icons/LocationIcon";
import RestaurantDishCard from "../components/Restaurant/RestaurantDishCard";
import routes from "../navigation/routes";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import ScreenName from "../components/ScreenName";
import SearchIcon from "../components/Icons/SearchIcon";
import TextObject from "../components/TextObject";
import TimeIcon from "../components/Icons/TimeIcon";

export default function RestaurantDishesScreen({ navigation, route }) {
  const restaurantData = route.params;
  const restaurantInfo = {
    restaurantName: restaurantData.name,
    minutesAway: restaurantData.minutesAway,
    distance: restaurantData.distance,
  };
  return (
    <Screen
      backgroundColor={colors.primary}
      statusBarStyle="light"
      statusBarBackgroundColor={colors.primary}
      style={styles.container}
    >
      <View style={styles.header}>
        <RowContainer style={styles.restaurantNameContainer}>
          <ChevronLeft color={colors.white} size={18} />
          <ScreenName
            style={styles.restaurantName}
            name={restaurantData.name.toUpperCase()}
            color={colors.white}
          />
          <SearchIcon
            color={colors.white}
            onPress={() => navigation.navigate(routes.SEARCH)}
            size={18}
          />
        </RowContainer>
        <RowContainer style={styles.restaurantDetailContainer}>
          <TextObject
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
          <TextObject
            color={colors.white}
            iconcolor={colors.white}
            IconComponent={Crosshairs}
            text={restaurantData.distance}
          />
        </RowContainer>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <FlatList
          data={restaurantData.foods}
          keyExtractor={(food) => food.id.toString()}
          renderItem={({ item }) => (
            <RestaurantDishCard
              imageUrl={item.imageUrl}
              previewUrl={item.thumbnail}
              onPress={() => {
                navigation.navigate(routes.RESTAURANT_DISH_CATEGORY, {
                  ...item,
                  ...restaurantInfo,
                });
              }}
              text={item.name}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
    marginBottom: 15,
    padding: 20,
    paddingTop: 30,
  },
  restaurantName: {
    marginBottom: 0,
    marginTop: 0,
  },
  restaurantNameContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  restaurantDetailContainer: {
    justifyContent: "space-evenly",
    paddingBottom: 30,
  },
  screen: {
    backgroundColor: colors.primary,
  },
});
// import React from "react";
// import { View, StyleSheet, FlatList } from "react-native";
// import { StatusBar } from "expo-status-bar";

// import ChevronLeft from "../components/Icons/ChevronLeft";
// import colors from "../config/colors";
// import Crosshairs from "../components/Icons/Crosshairs";
// import LocationIcon from "../components/Icons/LocationIcon";
// import RestaurantDishCard from "../components/Restaurant/RestaurantDishCard";
// import routes from "../navigation/routes";
// import RowContainer from "../components/RowContainer";
// import SearchIcon from "../components/Icons/SearchIcon";
// import ScreenName from "../components/ScreenName";
// import TextObject from "../components/TextObject";
// import TimeIcon from "../components/Icons/TimeIcon";

// export default function RestaurantDishesScreen({ navigation, route }) {
//   const restaurantData = route.params;
//   const restaurantInfo = {
//     restaurantName: restaurantData.name,
//     minutesAway: restaurantData.minutesAway,
//     distance: restaurantData.distance,
//   };
//   return (
//     <View style={styles.screen}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <RowContainer style={styles.restaurantNameContainer}>
//             <ChevronLeft color={colors.white} size={18} />
//             <ScreenName
//               style={styles.restaurantName}
//               name={restaurantData.name.toUpperCase()}
//               color={colors.white}
//             />
//             <SearchIcon
//               color={colors.white}
//               onPress={() => navigation.navigate(routes.SEARCH)}
//               size={18}
//             />
//           </RowContainer>
//           <RowContainer style={styles.restaurantDetailContainer}>
//             <TextObject
//               color={colors.white}
//               iconcolor={colors.white}
//               IconComponent={LocationIcon}
//               text={restaurantData.location}
//             />
//             <TextObject
//               color={colors.white}
//               iconcolor={colors.white}
//               IconComponent={TimeIcon}
//               text={restaurantData.minutesAway}
//             />
//             <TextObject
//               color={colors.white}
//               iconcolor={colors.white}
//               IconComponent={Crosshairs}
//               text={restaurantData.distance}
//             />
//           </RowContainer>
//           <StatusBar backgroundColor={colors.primary} style="light" />
//         </View>
//         <View style={{ flex: 1, paddingHorizontal: 20 }}>
//           <FlatList
//             data={restaurantData.foods}
//             keyExtractor={(food) => food.id.toString()}
//             renderItem={({ item }) => (
//               <RestaurantDishCard
//                 imageUrl={item.imageUrl}
//                 onPress={() => {
//                   navigation.navigate(routes.RESTAURANT_DISH_CATEGORY, {
//                     ...item,
//                     ...restaurantInfo,
//                   });
//                 }}
//                 text={item.name}
//               />
//             )}
//             showsVerticalScrollIndicator={false}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.backgroundColor,
//     flex: 1,
//   },
//   header: {
//     backgroundColor: colors.primary,
//     borderBottomRightRadius: 45,
//     borderBottomLeftRadius: 45,
//     marginBottom: 15,
//     padding: 20,
//     paddingTop: 60,
//   },
//   restaurantName: {
//     marginBottom: 0,
//     marginTop: 0,
//   },
//   restaurantNameContainer: {
//     alignItems: "center",
//     justifyContent: "space-evenly",
//     marginBottom: 20,
//   },
//   restaurantDetailContainer: {
//     justifyContent: "space-evenly",
//     paddingBottom: 30,
//   },
//   screen: {
//     backgroundColor: colors.primary,
//     flex: 1,
//   },
// });
