import React, { createContext } from "react";

const CardContext = createContext({
  cardArray: [],
  cardName: "",
  cardNumber: "",
  cardType: "",
  cvv: "",
  expiryDate: "",
  logo: null,
  handleCardName: () => {},
  handleCardNumber: () => {},
  handleCardType: () => {},
  handleCvv: () => {},
  handleExpiryDate: () => {},
  handleLogo: () => {},
  handleAddCard: () => {},
});

const CardProvider = ({ children, value }) => {
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export { CardProvider, CardContext };
