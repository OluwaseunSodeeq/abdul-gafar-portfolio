import useOpenContext from "./Contexts/useOpenContext";
import { useMediaQuery } from "react-responsive";

function DownlaodCv() {
  const { open, closeHamburger } = useOpenContext();
  const breakpoints = useMediaQuery({ minWidth: 1024 });

  const downloadHandler = () => {
    closeHamburger();
  };
  return (
    <div
      onClick={downloadHandler}
      className={`lg:w-[166px] lg:py-1 lg:px-3 lg:gap-x-2 flex items-center justify-center cursor-pointer lg:border-b-2   lg:rounded-[8px] ${
        open ? "lg:border-second-logo-color" : "lg:border-content-color"
      } `}
    >
      <h4
        className={` ${
          breakpoints
            ? "font-normal font-Helvetica leading-7 text-lg"
            : "transition duration-300 ease-out font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color hover:text-second-logo-text tracking-wide hover:tracking-widest"
        }text-nowrap ${open ? "text-second-logo-color" : "text-content-color"}`}
      >
        {" "}
        <a
          href="..abdulGafar_jimoh-CV.pdf"
          download="abdulGafar_jimoh-CV.pdf"
          className=""
        >
          Download CV
        </a>
      </h4>
      <span
        className={`${
          open ? "stroke-second-logo-color" : "stroke-content-color"
        } ${
          breakpoints ? "w-[24px] h-[24px]" : "w-7 h-7 stroke-content-color"
        }`}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3"
            stroke="stroke-inherit"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

export default DownlaodCv;
