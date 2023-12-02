"use client"

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const apiUrl = "https://musanzi-wilfried.me/auth/login";

const AuthProvider = createContext(undefined);

const ContextProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const [account, setAccount] = useState(
    typeof window !== "undefined" ? localStorage.getItem("account") : null
  );
  
  const [token, setToken] = useState(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );

  const storeToken = (token) => {
    if (typeof window !== "undefined") {
      setToken(token);
      if (token === null) localStorage.removeItem("token");
      else localStorage.setItem("token", token);
    }
  };

  const storeAccount = (account) => {
    if (typeof window !== "undefined") {
      setAccount(account);
      if (account === null) localStorage.removeItem("account");
      else localStorage.setItem("account", JSON.stringify(account));
    }
  };

  const handleClicked = () => setIsClicked(!isClicked);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/auth/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLogged(false);
      }
    };
  
    fetchData();
  }, [isLogged, token]);

  return (
    <AuthProvider.Provider
      value={{
        isLogged,
        setIsLogged,
        storeToken,
        token,
        handleClicked,
        isClicked,
        setIsClicked,
        account,
        storeAccount,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthProvider);
  return context;
};

export { ContextProvider, useAuthContext };
