import { createContext, useState } from "react";

const OpenContextData = createContext();

function OpenContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hamburgerHandler = () => setOpen(!open);

  return (
    <OpenContextData.Provider
      value={{ open, setOpen, hamburgerHandler, currentIndex, setCurrentIndex }}
    >
      {children}
    </OpenContextData.Provider>
  );
}

export { OpenContextProvider, OpenContextData };
