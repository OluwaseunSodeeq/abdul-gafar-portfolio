import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// import Footer from "./Component/Footer/Footer";

import { OpenContextProvider } from "./Component/Contexts/OpenContext";
import { Toaster } from "react-hot-toast";
// import { LoaderIcon, Toaster } from "react-hot-toast";
import Loader from "./Component/Loader";

const Homepage = lazy(() => import("./Pages/Homepage"));
const AboutMe = lazy(() => import("./Pages/AboutMe"));
const Contact = lazy(() => import("./Pages/Contact"));

function App() {
  return (
    <div className="w-full  p-0 m-0 lg:w-full lg:max-w-[1440px] lg:mx-auto lg:overflow-x-hidden">
      <OpenContextProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster
          position="bottom-center"
          gutter={12}
          containerStyle={{ margin: "30px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "8px 12px",
              backgroundColor: "#ffffff",
              color: "#333437",
              // color:"#67696E"
            },
          }}
        />
        {/* <Footer /> */}
      </OpenContextProvider>
    </div>
  );
}

export default App;
