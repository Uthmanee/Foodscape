import { useState } from "react";
import { useDispatch } from "react-redux";

export default useSelection = (deleteFunction) => {
  const [selectedItems, setselectedItems] = useState([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);

  const dispatch = useDispatch();

  const handleLongPress = (cardId) => {
    setIsSelectionMode(true);
    setselectedItems((prevSelected) => {
      if (prevSelected.includes(cardId)) {
        const newSelected = prevSelected.filter((id) => id !== cardId);
        if (newSelected.length === 0) {
          setIsSelectionMode(false);
        }
        return newSelected;
      } else {
        return [...prevSelected, cardId];
      }
    });
  };

  const handlePress = (cardId) => {
    if (isSelectionMode) {
      setselectedItems((prevSelected) => {
        if (prevSelected.includes(cardId)) {
          const newSelected = prevSelected.filter((id) => id !== cardId);
          if (newSelected.length === 0) {
            setIsSelectionMode(false);
          }
          return newSelected;
        } else {
          return [...prevSelected, cardId];
        }
      });
      return;
    }
  };

  const handleDelete = () => {
    // Implement your delete logic here
    dispatch(deleteFunction(selectedItems));
    // Reset selected messages and exit selection mode after delete
    setselectedItems([]);
    setIsSelectionMode(false);
  };

  const handleCancelSelection = () => {
    setselectedItems([]);
    setIsSelectionMode(false);
  };
  return {
    handleLongPress,
    handlePress,
    handleDelete,
    handleCancelSelection,
    isSelectionMode,
    selectedItems,
  };
};
