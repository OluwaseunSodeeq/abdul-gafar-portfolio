// import { forwardRef } from "react";
import useOpenContext from "./Contexts/useOpenContext";

const Hamburger = function () {
  const { open, hamburgerHandler } = useOpenContext();
  return (
    <div
      onClick={hamburgerHandler}
      className={`lg:w-26 flex items-center justify-end cursor-pointer lg:border lg:border-content-color lg:rounded-[8px] lg:py-1 lg:px-3 ${
        open
          ? "lg:border-second-logo-color cursor-pointer"
          : "lg:border-content-color"
      } `}
    >
      <h4
        className={`hidden  font-bold font-Helvetica leading-10 text-lg lg:block ${
          open ? "text-second-logo-color" : "text-content-color"
        }`}
      >
        {open ? "Close" : "Menu"}
      </h4>
      <span className={open ? "text-second-logo-color" : "text-content-color"}>
        {open ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#F2F4F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#67696E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Hamburger;
