import authClient from "./authClient";

const endPoint =
  "/v1/accounts:signInWithPassword?key=AIzaSyD4jIWFQojBTuYv3J4wOX_NPAS33bCYqi0";

const login = (email, password) =>
  authClient.post(endPoint, {
    email,
    password,
    returnSecureToken: true,
  });

export default login;
