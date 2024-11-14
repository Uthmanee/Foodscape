import idGenerator from "../helper/idGenerator";

export default cards = [
  {
    cardType: "masterCard",
    id: idGenerator(),
    logo: require("../assets/pay/masterCardLogo.png"),
  },
  {
    cardType: "verveCard",
    id: idGenerator(),
    logo: require("../assets/pay/verveLogo.png"),
  },
  {
    cardType: "visaCard",
    id: idGenerator(),
    logo: require("../assets/pay/visaLogo.png"),
  },
];
