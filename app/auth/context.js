import React, { createContext, useState } from "react";

const AuthContext = createContext({
  user: "",
  setUser: () => {},
});

export const AuthContextProvider = ({ children, value }) => (
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
);

export default AuthContext;
