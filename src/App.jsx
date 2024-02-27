import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./Component/Footer/Footer";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import { OpenContextProvider } from "./Component/Contexts/OpenContext";
// import OpenContextProvider from "./Component/Contexts/OpenContext";

function App() {
  return (
    <div className="w-full  p-0 m-0 lg:w-full lg:max-w-[1440px] lg:mx-auto lg:overflow-x-hidden">
      <OpenContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </OpenContextProvider>
    </div>
  );
}

export default App;
