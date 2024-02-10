import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage";
import { OpenContextProvider } from "./Component/Contexts/OpenContext";
// import OpenContextProvider from "./Component/Contexts/OpenContext";

function App() {
  return (
    <div className="p-0 m-0">
      <Homepage />
    </div>
  );
}

export default App;
