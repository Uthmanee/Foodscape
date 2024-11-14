import baseClient from "./baseClient";

const endPoint = "/cart.json";

const getCart = (userId) => baseClient.get(`/${userId}/${endPoint}`);

const postCart = (userId, cart) =>
  baseClient.put(`/${userId}/${endPoint}`, cart);
export default {
  getCart,
  postCart,
};
