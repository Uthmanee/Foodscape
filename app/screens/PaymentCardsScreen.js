import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ActivityIndicator from "../components/ActivityIndicator";
import Add from "../components/Icons/Add";
import { cardActions } from "../store/paymentCard-slice";
import colors from "../config/colors";
import Empty from "../components/Empty";
import EmptyCardsIcon from "../components/EmptyCardsIcon";
import ErrorIndicator from "../components/ErrorIndicator";
import HorizontalPadding from "../components/HorizontalPadding";
import PaymentCardItem from "../components/PaymentCardItem";
import routes from "../navigation/routes";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import ScreenNavBar from "../components/ScreenNavBar";
import SelectionAction from "../components/SelectionAction";
import { useNavigation } from "@react-navigation/native";
import useSelection from "../hooks/useSelection";
import { fetchCard, postCard } from "../store/paymentCard-async-actions";
import Notification from "../components/Notification";
import useAuth from "../auth/useAuth";
import useNotification from "../hooks/useNotification";

function PaymentCardsScreen(props) {
  const dispatch = useDispatch();

  const { user } = useAuth();
  // const userId = user.user_id;
  const userId = user.sub;

  useEffect(() => {
    dispatch(fetchCard(userId));
  }, []);

  const { items: cardData, changed: cardChanged } = useSelector(
    (state) => state.card
  );

  const { error, loading, uploading } = useSelector((state) => state.card.ui);

  const cardIsEmpty = cardData.length === 0;

  useEffect(() => {
    if (cardChanged) {
      dispatch(postCard({ user: userId, items: cardData }));
      dispatch(cardActions.resetChanged());
    }
  }, [cardData]);

  const {
    notification: notificationMessage,
    notificationVisible,
    setNotificationVisible,
  } = useNotification("card", "deleted");

  const showNotification = !uploading && notificationVisible;

  const navigation = useNavigation();

  const {
    handleLongPress,
    handlePress,
    handleDelete,
    handleCancelSelection,
    isSelectionMode,
    selectedItems: selectedCards,
  } = useSelection(cardActions.removeCard);

  const handleCardItemPress = (cardId, editScreenData) => {
    if (cardId) {
      handlePress(cardId);
    }
    if (editScreenData === undefined || isSelectionMode) return;
    navigation.navigate(routes.EDITCARD, editScreenData);
  };

  return (
    <>
      {loading && <ActivityIndicator loading={loading} />}
      <Screen style={styles.screen}>
        <View style={{ alignItems: "center" }}>
          <Notification
            visible={showNotification}
            message={notificationMessage}
            onHide={() => {
              setNotificationVisible(false);
              dispatch(cardActions.resetNotification());
            }}
          />
        </View>
        {error && (
          <HorizontalPadding>
            <ErrorIndicator
              onButtonPress={() => dispatch(fetchCard())}
              error={error}
            />
          </HorizontalPadding>
        )}
        {!loading && !error && (
          <>
            {!isSelectionMode && (
              <HorizontalPadding>
                <ScreenNavBar screenName="Payment Cards" />
              </HorizontalPadding>
            )}

            {isSelectionMode && (
              <HorizontalPadding>
                <SelectionAction
                  onCancelSelection={handleCancelSelection}
                  onHandleDelete={handleDelete}
                  selectedItems={selectedCards}
                />
              </HorizontalPadding>
            )}
            {!cardIsEmpty && (
              <View style={styles.cardListContainer}>
                <FlatList
                  data={cardData}
                  keyExtractor={(card) => card.id.toString()}
                  renderItem={({ item }) => (
                    <HorizontalPadding
                      style={[
                        styles.horizontalPadding,
                        selectedCards.includes(item.id) && styles.selectedCard,
                      ]}
                    >
                      <PaymentCardItem
                        cardData={item}
                        containerStyle={[styles.mediaObjectContainer]}
                        onLongPress={() => handleLongPress(item.id)}
                        onPress={() => handleCardItemPress(item.id, item)}
                      />
                    </HorizontalPadding>
                  )}
                />
                <RowContainer style={styles.iconContainer}>
                  <HorizontalPadding>
                    <Add onPress={() => navigation.navigate(routes.NEWCARD)} />
                  </HorizontalPadding>
                </RowContainer>
              </View>
            )}
            {cardIsEmpty && (
              <HorizontalPadding style={{ flex: 1 }}>
                <Empty
                  buttonText="Add Card"
                  Icon={<EmptyCardsIcon />}
                  onPress={() => navigation.navigate(routes.NEWCARD)}
                  text1="No Payments Cards"
                  text2="click on add icon below to add a card"
                />
              </HorizontalPadding>
            )}
          </>
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  cardListContainer: {
    marginTop: 30,
    marginBottom: 50,
    maxHeight: "77%",
  },
  horizontalPadding: {
    marginBottom: 2,
  },
  iconContainer: {
    justifyContent: "flex-end",
  },
  mediaObjectContainer: {
    marginVertical: 4,
    paddingVertical: 12,
  },
  selectedCard: {
    backgroundColor: colors.altBackgroundColor,
    opacity: 0.7,
  },
  selectionText: {
    fontSize: 20,
  },
  screen: {
    paddingVertical: 20,
  },
});

export default PaymentCardsScreen;
// import React, { useState, useEffect } from "react";
// import { FlatList, StyleSheet, View } from "react-native";
// import { useDispatch, useSelector } from "react-redux";

// import ActivityIndicator from "../components/ActivityIndicator";
// import Add from "../components/Icons/Add";
// import { cardActions } from "../store/paymentCard-slice";
// import colors from "../config/colors";
// import Empty from "../components/Empty";
// import EmptyCardsIcon from "../components/EmptyCardsIcon";
// import ErrorIndicator from "../components/ErrorIndicator";
// import HorizontalPadding from "../components/HorizontalPadding";
// import PaymentCardItem from "../components/PaymentCardItem";
// import routes from "../navigation/routes";
// import RowContainer from "../components/RowContainer";
// import Screen from "../components/Screen";
// import ScreenNavBar from "../components/ScreenNavBar";
// import SelectionAction from "../components/SelectionAction";
// import { useNavigation } from "@react-navigation/native";
// import useSelection from "../hooks/useSelection";
// import { fetchCard, postCard } from "../store/paymentCard-async-actions";
// import Notification from "../components/Notification";
// import useAuth from "../auth/useAuth";
// import useNotification from "../hooks/useNotification";

// function PaymentCardsScreen(props) {
//   const dispatch = useDispatch();

//   const { user } = useAuth();
//   const userId = user.user_id;

//   useEffect(() => {
//     dispatch(fetchCard(userId));
//   }, []);

//   const { items: cardData, changed: cardChanged } = useSelector(
//     (state) => state.card
//   );

//   const { error, loading, uploading } = useSelector((state) => state.card.ui);

//   const cardIsEmpty = cardData.length === 0;

//   useEffect(() => {
//     if (cardChanged) {
//       dispatch(postCard({ user: userId, items: cardData }));
//       dispatch(cardActions.resetChanged());
//     }
//   }, [cardData]);

//   const {
//     notification: notificationMessage,
//     notificationVisible,
//     setNotificationVisible,
//   } = useNotification("card", "deleted");

//   const showNotification = !uploading && notificationVisible;

//   const navigation = useNavigation();

//   const {
//     handleLongPress,
//     handlePress,
//     handleDelete,
//     handleCancelSelection,
//     isSelectionMode,
//     selectedItems: selectedCards,
//   } = useSelection(cardActions.removeCard);

//   const handleCardItemPress = (cardId, editScreenData) => {
//     if (cardId) {
//       handlePress(cardId);
//     }
//     if (editScreenData === undefined || isSelectionMode) return;
//     navigation.navigate(routes.EDITCARD, editScreenData);
//   };

//   return (
//     <>
//       {loading && <ActivityIndicator loading={loading} />}
//       <Screen style={styles.screen}>
//         <View style={{ alignItems: "center" }}>
//           <Notification
//             visible={showNotification}
//             message={notificationMessage}
//             onHide={() => {
//               setNotificationVisible(false);
//               dispatch(cardActions.resetNotification());
//             }}
//           />
//         </View>
//         {error && (
//           <HorizontalPadding>
//             <ErrorIndicator
//               onButtonPress={() => dispatch(fetchCard())}
//               error={error}
//             />
//           </HorizontalPadding>
//         )}
//         {!loading && !error && (
//           <>
//             {!isSelectionMode && (
//               <HorizontalPadding>
//                 <ScreenNavBar screenName="Payment Cards" />
//               </HorizontalPadding>
//             )}

//             {isSelectionMode && (
//               <HorizontalPadding>
//                 <SelectionAction
//                   onCancelSelection={handleCancelSelection}
//                   onHandleDelete={handleDelete}
//                   selectedItems={selectedCards}
//                 />
//               </HorizontalPadding>
//             )}
//             {!cardIsEmpty && (
//               <View style={styles.cardListContainer}>
//                 <FlatList
//                   data={cardData}
//                   keyExtractor={(card) => card.id.toString()}
//                   renderItem={({ item }) => (
//                     <HorizontalPadding
//                       style={[
//                         styles.horizontalPadding,
//                         selectedCards.includes(item.id) && styles.selectedCard,
//                       ]}
//                     >
//                       <PaymentCardItem
//                         cardData={item}
//                         containerStyle={[styles.mediaObjectContainer]}
//                         onLongPress={() => handleLongPress(item.id)}
//                         onPress={() => handleCardItemPress(item.id, item)}
//                       />
//                     </HorizontalPadding>
//                   )}
//                 />
//               </View>
//             )}
//             {cardIsEmpty && (
//               <HorizontalPadding style={{ flex: 1 }}>
//                 <Empty
//                   dataType="cards"
//                   Icon={<EmptyCardsIcon />}
//                   text1="No recent orders"
//                   text2="click on add icon below to add a card"
//                 />
//               </HorizontalPadding>
//             )}
//             <RowContainer style={styles.iconContainer}>
//               <HorizontalPadding>
//                 <Add onPress={() => navigation.navigate(routes.NEWCARD)} />
//               </HorizontalPadding>
//             </RowContainer>
//           </>
//         )}
//       </Screen>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   cardListContainer: {
//     marginTop: 30,
//     marginBottom: 50,
//     maxHeight: "77%",
//   },
//   horizontalPadding: {
//     marginBottom: 2,
//   },
//   iconContainer: {
//     justifyContent: "flex-end",
//   },
//   mediaObjectContainer: {
//     marginVertical: 4,
//     paddingVertical: 12,
//   },
//   selectedCard: {
//     backgroundColor: colors.altBackgroundColor,
//     opacity: 0.7,
//   },
//   selectionText: {
//     fontSize: 20,
//   },
//   screen: {
//     paddingVertical: 20,
//   },
// });

// export default PaymentCardsScreen;
