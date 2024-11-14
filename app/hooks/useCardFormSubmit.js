import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cardActions } from "../store/paymentCard-slice";
import { postCard } from "../store/paymentCard-async-actions";

function useCardFormSubmit(props) {
  const dispatch = useDispatch();
  const { items: cardData, changed: cardChanged } = useSelector(
    (state) => state.card
  );

  useEffect(() => {
    if (cardChanged) {
      dispatch(postCard(cardData));
      dispatch(cardActions.resetChanged());
    }
  }, [cardData]);

  const { uploading } = useSelector((state) => state.card.ui);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  useEffect(() => {
    if (uploading) {
      setModalIsVisible(true);
    }
  }, [uploading]);

  const showModal = !uploading && modalIsVisible;

  return { uploading, setModalIsVisible, showModal };
}

export default useCardFormSubmit;
