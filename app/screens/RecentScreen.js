// import React, { useEffect, useState } from "react";
// import { FlatList, StyleSheet, View } from "react-native";
// import { useDispatch, useSelector } from "react-redux";

// import ActivityIndicator from "../components/ActivityIndicator";
// import colors from "../config/colors";
// import Empty from "../components/Empty";
// import ErrorIndicator from "../components/ErrorIndicator";
// import { fetchRecent } from "../store/recent-async-actions";
// import FoodListItem from "../components/Food/FoodListItem";
// import HorizontalPadding from "../components/HorizontalPadding";
// import { postRecent } from "../store/recent-async-actions";
// import Notification from "../components/Notification";
// import { recentActions } from "../store/recent-slice";
// import Screen from "../components/Screen";
// import SelectionAction from "../components/SelectionAction";
// import ScreenNavBar from "../components/ScreenNavBar";
// import useAuth from "../auth/useAuth";
// import useSelection from "../hooks/useSelection";
// import useNotification from "../hooks/useNotification";

// let isInitial = true;

// function RecentScreen(props) {
//   const dispatch = useDispatch();

//   const { user } = useAuth();
//   // const userId = user.user_id;
//   const userId = user.sub;

//   const { changed: recentChanged, items: recentData } = useSelector(
//     (state) => state.recent
//   );
//   const recentIsEmpty = recentData.length === 0;

//   const { error, loading, uploading } = useSelector((state) => state.recent.ui);

//   useEffect(() => {
//     dispatch(fetchRecent(userId));
//   }, []);

//   useEffect(() => {
//     if (isInitial) {
//       isInitial = false;
//       return;
//     }
//     if (recentChanged)
//       dispatch(postRecent({ user: userId, items: recentData }));
//   }, [recentData]);

//   const { notification, notificationVisible, setNotificationVisible } =
//     useNotification("recent", "deleted");

//   const showNotification = !uploading && notificationVisible;

//   const {
//     handleLongPress,
//     handlePress,
//     handleDelete,
//     handleCancelSelection,
//     isSelectionMode,
//     selectedItems,
//   } = useSelection(recentActions.removeFromRecent);

//   return (
//     <>
//       {loading && <ActivityIndicator loading={loading} />}
//       <Screen style={styles.screen}>
//         <View style={{ alignItems: "center" }}>
//           <Notification
//             visible={showNotification}
//             message={notification}
//             onHide={() => {
//               setNotificationVisible(false);
//               dispatch(recentActions.resetNotification());
//             }}
//           />
//         </View>
//         {error && <ErrorIndicator error={error} />}
//         {!isSelectionMode && (
//           <HorizontalPadding paddingHorizontal={20}>
//             <ScreenNavBar style={styles.appNavBar} screenName="Recent" />
//           </HorizontalPadding>
//         )}
//         {isSelectionMode && (
//           <HorizontalPadding paddingHorizontal={20}>
//             <SelectionAction
//               onCancelSelection={handleCancelSelection}
//               onHandleDelete={handleDelete}
//               selectedItems={selectedItems}
//             />
//           </HorizontalPadding>
//         )}
//         {!recentIsEmpty && (
//           <View style={styles.screenContent}>
//             <FlatList
//               data={recentData}
//               keyExtractor={(recentItem) => recentItem.id.toString()}
//               renderItem={({ item }) => {
//                 return (
//                   <HorizontalPadding
//                     paddingHorizontal={20}
//                     style={[
//                       styles.horizontalPadding,
//                       selectedItems.includes(item.id) && styles.selectedItem,
//                     ]}
//                   >
//                     <FoodListItem
//                       buttonText="Reorder"
//                       deactivateQuantityChange={true}
//                       food={item}
//                       onLongPress={() => handleLongPress(item.id)}
//                       onPress={() => handlePress(item.id)}
//                     />
//                   </HorizontalPadding>
//                 );
//               }}
//             />
//           </View>
//         )}
//         {recentIsEmpty && !loading && (
//           <View style={styles.screenContent}>
//             <HorizontalPadding style={{ flex: 1 }}>
//               <Empty
//                 image={require("../assets/noOrder.png")}
//                 text1="No recent orders"
//                 text2="click on the button below to make your first order"
//               />
//             </HorizontalPadding>
//           </View>
//         )}
//       </Screen>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   appNavBar: {},
//   horizontalPadding: {
//     marginBottom: 2,
//   },
//   screen: {
//     paddingVertical: 20,
//   },
//   screenContent: {
//     flex: 1,
//     marginTop: 20,
//   },
//   selectedItem: {
//     backgroundColor: colors.altBackgroundColor,
//     opacity: 0.7,
//   },
// });

// export default RecentScreen;

import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import colors from "../config/colors";
import Empty from "../components/Empty";
import FoodListItem from "../components/Food/FoodListItem";
import HorizontalPadding from "../components/HorizontalPadding";
import Notification from "../components/Notification";
import { recentActions } from "../store/recent-slice";
import Screen from "../components/Screen";
import SelectionAction from "../components/SelectionAction";
import ScreenNavBar from "../components/ScreenNavBar";
import useSelection from "../hooks/useSelection";
import useNotification from "../hooks/useNotification";

function RecentScreen(props) {
  const dispatch = useDispatch();

  const { items: recentData } = useSelector((state) => state.recent);
  const recentIsEmpty = recentData.length === 0;

  const { notification, notificationVisible, setNotificationVisible } =
    useNotification("recent", "deleted");

  const showNotification = notificationVisible;

  const {
    handleLongPress,
    handlePress,
    handleDelete,
    handleCancelSelection,
    isSelectionMode,
    selectedItems,
  } = useSelection(recentActions.removeFromRecent);

  return (
    <Screen style={styles.screen}>
      <View style={{ alignItems: "center" }}>
        <Notification
          visible={showNotification}
          message={notification}
          onHide={() => {
            setNotificationVisible(false);
            dispatch(recentActions.resetNotification());
          }}
        />
      </View>
      {!isSelectionMode && (
        <HorizontalPadding paddingHorizontal={20}>
          <ScreenNavBar style={styles.appNavBar} screenName="Recent" />
        </HorizontalPadding>
      )}
      {isSelectionMode && (
        <HorizontalPadding paddingHorizontal={20}>
          <SelectionAction
            onCancelSelection={handleCancelSelection}
            onHandleDelete={handleDelete}
            selectedItems={selectedItems}
          />
        </HorizontalPadding>
      )}
      {!recentIsEmpty && (
        <View style={styles.screenContent}>
          <FlatList
            data={recentData}
            keyExtractor={(recentItem) => recentItem.id.toString()}
            renderItem={({ item }) => {
              return (
                <HorizontalPadding
                  paddingHorizontal={20}
                  style={[
                    styles.horizontalPadding,
                    selectedItems.includes(item.id) && styles.selectedItem,
                  ]}
                >
                  <FoodListItem
                    buttonText="Reorder"
                    deactivateQuantityChange={true}
                    food={item}
                    onLongPress={() => handleLongPress(item.id)}
                    onPress={() => handlePress(item.id)}
                    removeButton={true}
                    ui="recent"
                  />
                </HorizontalPadding>
              );
            }}
          />
        </View>
      )}
      {recentIsEmpty && (
        <View style={styles.screenContent}>
          <HorizontalPadding style={{ flex: 1 }}>
            <Empty
              image={require("../assets/noOrder.png")}
              text1="No recent orders"
              text2="click on the button below to make your first order"
            />
          </HorizontalPadding>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  appNavBar: {},
  horizontalPadding: {
    marginBottom: 2,
  },
  screen: {
    paddingVertical: 20,
  },
  screenContent: {
    flex: 1,
    marginTop: 20,
  },
  selectedItem: {
    backgroundColor: colors.altBackgroundColor,
    opacity: 0.7,
  },
});

export default RecentScreen;
