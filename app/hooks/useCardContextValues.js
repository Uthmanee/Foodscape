import { useState } from "react";

export default useCardContextValues = (defaultValues = {}) => {
  const [cardName, setCardName] = useState(
    defaultValues.cardName ? defaultValues.cardName : ""
  );
  const [cardNumber, setCardNumber] = useState(
    defaultValues.cardNumber ? defaultValues.cardNumber : ""
  );
  const [cardType, setCardType] = useState(
    defaultValues.cardType ? defaultValues.cardType : "masterCard"
  );
  const [cvv, setCvv] = useState(defaultValues.cvv ? defaultValues.cvv : "");

  const [expiryDate, setExpiryDate] = useState(
    defaultValues.expiryDate ? defaultValues.expiryDate : ""
  );
  const [logo, setLogo] = useState(
    defaultValues.logo
      ? defaultValues.logo
      : require("../assets/pay/masterCardLogo.png")
  );
  const [cardArray, setCardArray] = useState([]);

  const handleCardName = (name) => {
    setCardName(name);
  };
  const handleCardNumber = (number) => {
    setCardNumber(number);
  };
  const handleCardType = (cardType) => {
    setCardType(cardType);
  };
  const handleCvv = (cvv) => {
    setCvv(cvv);
  };
  const handleExpiryDate = (expiryDate) => {
    setExpiryDate(expiryDate);
  };
  const handleLogo = (logo) => {
    setLogo(logo);
  };
  const handleAddCard = (cardData) => {
    setCardArray((prevState) => [...prevState, cardData]);
  };
  return {
    cardArray,
    cardName,
    cardNumber,
    cardType,
    cvv,
    expiryDate,
    logo,
    handleCardName,
    handleCardNumber,
    handleCardType,
    handleCvv,
    handleExpiryDate,
    handleLogo,
    handleAddCard,
  };
};
