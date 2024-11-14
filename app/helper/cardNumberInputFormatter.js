export default cardNumberFormatter = (numbers) => {
  const numericOnly = numbers.replace(/[^\d]/g, "");

  const groups = numericOnly.match(/.{1,4}/g);

  const formatted = groups ? groups.join(" ") : "";
  return formatted;
};
