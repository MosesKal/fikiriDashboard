import React, { useEffect } from "react";
import { ContextProvider } from "@/pages/contexts/authContext";

const Landingpagelayout = ({ children }) => {
  const Add = () => {
    document
      .querySelector("body")
      .classList.add(
        "app",
        "sidebar-mini",
        "ltr",
        "landing-page",
        "horizontalmenu"
      );
  };
  useEffect(() => {
    Add();
  }, []);

  return (
    <ContextProvider>
      <div>{children}</div>
    </ContextProvider>
  );
};

export default Landingpagelayout;
