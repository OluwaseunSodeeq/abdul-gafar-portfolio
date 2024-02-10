import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Component/Footer/Footer";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import { OpenContextProvider } from "./Component/Contexts/OpenContext";
// import OpenContextProvider from "./Component/Contexts/OpenContext";

function App() {
  return (
    <div className="p-0 m-0 lg:w-full lg:overflow-x-hidden">
      <OpenContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage text="CLOSE" />} />
            <Route path="/about" element={<AboutMe text="CLOSE" />} />
            <Route path="/contact" element={<Contact text="CLOSE" />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </OpenContextProvider>
    </div>
  );
}

export default App;
