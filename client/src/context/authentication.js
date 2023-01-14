import React, { useState, useEffect, createContext, useContext } from "react";
import { verify } from "../services/authentication";

export const AuthContext = createContext();

export const AuthProviderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [authToken, setAuthToken] = useState(
    window.localStorage.getItem("AUTH_TOKEN")
  );

  useEffect(() => {
    window.localStorage.setItem("AUTH_TOKEN", authToken);
  }, [authToken]);

  useEffect(() => {
    if (authToken) {
      verify(authToken).then((data) => {
        const { user } = data;
        setUser(user);
      });
    }
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        setIsLoading,
        setUser,
        authToken,
        setAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
