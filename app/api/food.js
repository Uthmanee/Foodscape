import dataClient from "./dataClient";

const endPoint = "/food.json";

const getFood = () => dataClient.get(endPoint);

export default {
  getFood,
};
