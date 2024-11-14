import { useContext } from "react";
import { jwtDecode } from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
    return user.sub;
  };

  const logout = async () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { login, logout, setUser, user };
};
