import dataClient from "./dataClient";

const endPoint = "/restaurant.json";

const getRestaurant = () => dataClient.get(endPoint);

export default {
  getRestaurant,
};
