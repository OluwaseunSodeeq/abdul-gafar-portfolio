import { Link } from "react-router-dom";
import useOpenContext from "./Contexts/useOpenContext";

function Logo() {
  const { open, closeHamburger } = useOpenContext();
  return (
    <Link to="/">
      <div className="p-0 flex items-center gap-x-4" onClick={closeHamburger}>
        {/* <div
          className={`flex items-center justify-center border-4 md:border-6 lg:border-8  rounded-full border-content-color w-12 h-12 md:w-16 md:h-16  lg:w-20 lg:h-20 text-center ${
            open ? "border-second-logo-color" : "border-content-color"
          }`}
        >
          <h4
            className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-9  font-roboto ${
              open ? " text-second-logo-text " : " text-content-color "
            }`}
          >
            AJ
          </h4>
        </div> */}

        <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]  ">
          <img src="../tryLogo.svg" alt="logo" className="w-full h-full" />
        </div>
        <div className="p-0 font-Helvetica">
          <h4
            className={`font-bold text-lg md:text-3xl lg:text-4xl md:leading-7 lg:leading-10  leading-7 ${
              open ? "text-second-logo-color" : "text-content-color"
            }`}
          >
            Abdul-Gafar Jimoh
          </h4>
          <p
            className={`text-sm md:text-2xl lg:text-[20px] leading-5 ${
              open ? "text-second-logo-text" : "text-logo-text"
            }`}
          >
            Ux & Product Designer
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
