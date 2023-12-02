import React, { createContext, useContext, useState } from "react";

const AuthProvider = createContext(undefined);

const ContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const [account, setAccount] = useState(
    typeof window !== "undefined" ? JSON.parse(localStorage.getItem("account")) : null
  );

  const storeAccount = (account) => {
    if (typeof window !== "undefined") {
      setAccount(account);
      if (account === null) localStorage.removeItem("account");
      else localStorage.setItem("account", JSON.stringify(account));
    }
  };

  return (
    <AuthProvider.Provider
      value={{
        isLogged,
        setIsLogged,
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
