import dataClient from "./dataClient";

const endPoint = "/snacks.json";

const getSnacks = () => dataClient.get(endPoint);

export default {
  getSnacks,
};
