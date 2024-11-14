export default expiryDateFormatter = (text) => {
  // Allow only numbers and "/"
  const formattedText = text.replace(/[^\d/]/g, "");
  let expiryDate = "";

  if (formattedText.length === 4 && !formattedText.includes("/")) {
    expiryDate = formattedText.slice(0, 2) + "/" + formattedText.slice(2);
  } else if (formattedText.length <= 5) {
    expiryDate = formattedText;
  }
  return expiryDate;
};
