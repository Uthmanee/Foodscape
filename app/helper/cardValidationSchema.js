import * as Yup from "yup";

import expiryDateValidator from "./expiryDateValidator";

export default validationSchema = Yup.object({
  cardName: Yup.string()
    .required()
    .max(18, "Card Name must be at most 18 characters")
    .label("Card Name"),
  cvv: Yup.string().required().min(3).max(3).label("CVV"),
  cardNumber: Yup.string()
    .required()
    .min(19, "Card Number must be at least 16 digits")
    .max(19, "Card Number cannot be more than 16 digits")
    .label("Card Number"),
  expiryDate: Yup.string()
    .required()
    .test("expiryDate", "Invalid month", (value) => {
      if (!value) return false;

      const [month] = value.split("/").map(Number);
      return month >= 1 && month <= 12;
    })
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      "Expiry date format must be MM/YY"
    )
    .test("expiryDate", "You can't add an expired card", expiryDateValidator),
});
