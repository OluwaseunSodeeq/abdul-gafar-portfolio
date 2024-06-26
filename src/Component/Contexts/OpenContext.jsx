import { createContext, useState } from "react";

const OpenContextData = createContext(null);

function OpenContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hamburgerHandler = () => setOpen(!open);

  const closeHamburger = () => {
    // e.preventDefault();
    setOpen(false);
  };

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
