export default cardNumberFormatter = (number) => {
  const formattedNumber = number.trim();
  return `**** **** **** ${formattedNumber.slice(formattedNumber.length - 4)}`;
};
