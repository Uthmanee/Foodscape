import React, { useContext, useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import AppText from "./AppText";
import ButtonText from "./ButtonText";
import cards from "../dataStructure/cards";
import { CardContext } from "../context/CardContext";
import colors from "../config/colors";
import hiddenCardDetailsPlaceholder from "../dataStructure/hiddenCardDetailsPlaceholder";
import PaymentCard from "./PaymentCard";
import RowContainer from "./RowContainer";
import Cancel from "./Icons/Cancel";

function CardPicker({ cardTypeData }) {
  const cardDetailsCtx = useContext(CardContext);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [card, setCard] = useState(cardTypeData ? cardTypeData : cards[0]);

  const [cardDetailsIsVisible, setCardDetailsIsVisible] = useState(true);

  const handleCloseModal = (card) => {
    setCard(card);
    cardDetailsCtx.handleCardType(card.cardType);
    cardDetailsCtx.handleLogo(card.logo);
    setModalIsVisible(false);
  };
  return (
    <>
      <>
        <AppText color={colors.ash} style={styles.field}>
          Tap the card below to select preffered card type
        </AppText>
        <TouchableOpacity onPress={() => setModalIsVisible(true)}>
          <PaymentCard
            card={{
              expiryDate: cardDetailsIsVisible
                ? cardDetailsCtx.expiryDate
                : hiddenCardDetailsPlaceholder.expiryDate,
              name: cardDetailsIsVisible
                ? cardDetailsCtx.cardName
                : hiddenCardDetailsPlaceholder.cardName,
              number: cardDetailsIsVisible
                ? cardDetailsCtx.cardNumber
                : hiddenCardDetailsPlaceholder.cardNumber,
            }}
            logo={card.logo}
            style={{ marginBottom: 15 }}
          />
        </TouchableOpacity>
        {(cardDetailsCtx.cardName ||
          cardDetailsCtx.cardNumber ||
          cardDetailsCtx.expiryDate) && (
          <RowContainer style={styles.buttonTextContainer}>
            <AppText color={colors.ash}>Click</AppText>
            <ButtonText
              color={colors.primary}
              onPress={() => setCardDetailsIsVisible(!cardDetailsIsVisible)}
              textStyle={styles.buttonText}
              text=" Here "
            />
            <AppText color={colors.ash}>{`To ${
              cardDetailsIsVisible
                ? `Hide Details On Card`
                : `Show Details On Card`
            }`}</AppText>
          </RowContainer>
        )}
      </>
      <Modal visible={modalIsVisible}>
        <View style={styles.modalContainer}>
          <RowContainer style={{ justifyContent: "flex-end" }}>
            <Cancel onPress={() => setModalIsVisible(false)} />
          </RowContainer>
          <AppText color={colors.ash} style={[styles.field, styles.modalText]}>
            Pick a card
          </AppText>
          <FlatList
            contentContainerStyle={{}}
            data={cards}
            keyExtractor={(card) => card.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCloseModal(item)}>
                <PaymentCard style={styles.card} card={item} logo={item.logo} />
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: "right",
  },
  buttonTextContainer: {
    justifyContent: "flex-end",
  },
  card: { marginBottom: 25 },
  container: {},
  field: {
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    height: 220,
    resizeMode: "cover",
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  // The View (modalContainer) made the height of the flatlist predictable without setting maxheight property. This made it possible to center the list in the overlay.

  modalText: {
    fontSize: 25,
  },
});

export default CardPicker;
