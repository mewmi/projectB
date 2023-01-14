import React, { useState, useEffect, createContext, useContext } from "react";
import { verify } from "../services/authentication";

const AuthContext = createContext();

const AuthProviderWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviderWrapper };
