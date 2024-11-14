export default expiryDateValidator = function (value) {
  if (!value) return false;
  const currentDate = new Date();
  const [month, year] = value.split("/");
  const expiryDate = new Date(`20${year}`, month - 1, 1);
  return expiryDate > currentDate;
};
