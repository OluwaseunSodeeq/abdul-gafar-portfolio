import { createContext, useState } from "react";

const OpenContextData = createContext();

function OpenContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const hamburgerHandler = () => setOpen(!open);
  const hamburgerHandler = () => setOpen(true);
  const closeHamburger = () => setOpen(false);

  return (
    <OpenContextData.Provider
      value={{
        open,
        setOpen,
        hamburgerHandler,
        closeHamburger,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {children}
    </OpenContextData.Provider>
  );
}

export { OpenContextProvider, OpenContextData };
