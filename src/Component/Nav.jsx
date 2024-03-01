import { NavLink } from "react-router-dom";
import useOpenContext from "./Contexts/useOpenContext";
import DownlaodCv from "./DownlaodCv";
import { useMediaQuery } from "react-responsive";
// import { useState } from "react";

function Nav() {
  const { closeHamburger, setCurrentIndex, currentIndex } = useOpenContext();
  const breakpoints = useMediaQuery({ maxWidth: 1024 });

  const closeHandler = function (index) {
    // setOpen(false);
    // closeHamburger();
    setCurrentIndex(index);
  };

  const navsLinks = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "Resume", link: "/" },
    { id: 2, title: "About me", link: "/about" },
    { id: 3, title: "Contact", link: "/contact" },
    { id: 4, title: "Dribble", link: "/" },
    { id: 5, title: "Twitter", link: "/" },
    { id: 6, title: "Behance", link: "/" },
    // {id:0,title:"Home",}
  ];
  return (
    // <Container>
    <div className=" w-full mx-auto  bg-user-color absolute z-30  ">
      <ul
        className=" h-[95vh] flex md:h-auto lg:h-auto flex-col justify-center gap-y-2 items-center -mt-[50px]  pb-5 pt-16"
        onClick={closeHamburger}
      >
        {/* {navsLinks.map((curLink) => {
          const { id, title, link } = curLink;
          return ( */}
        <li
          // key={id[0]}
          className={`font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color hover:text-second-logo-text ${
            navsLinks[0].id === currentIndex ? "text-second-logo-text" : ""
          }`}
        >
          <NavLink
            onClick={() => closeHandler(navsLinks[0].id)}
            to={navsLinks[0].link}
          >
            <h3
              className={`flex gap-x-1 items-center ${
                navsLinks[0].id === currentIndex
                  ? "ml-[-80px] lg:ml-[-120px]"
                  : ""
              }`}
            >
              {navsLinks[0].id === currentIndex && (
                <div className="w-[40px] h-[4px]  md:w-[60px] lg:w-[80px] lg:h-[8px] bg-second-logo-color"></div>
              )}
              <span className="transition duration-300 ease-out hover:text-second-logo-text tracking-wide hover:tracking-widest">
                {navsLinks[0].title}
              </span>
            </h3>
          </NavLink>
        </li>
        {/* <li
          // key={id[0]}
          className={`font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color ${
            navsLinks[1].id === currentIndex ? "text-second-logo-text" : ""
          }`}
        >
          <NavLink
            onClick={() => closeHandler(navsLinks[1].id)}
            to={navsLinks[1].link}
          >
            <h3
              className={`flex gap-x-1 items-center ${
                navsLinks[1].id === currentIndex
                  ? "ml-[-80px] lg:ml-[-120px]"
                  : ""
              }`}
            >
              {navsLinks[1].id === currentIndex && (
                <div className="w-[40px] h-[4px] md:w-[60px] lg:w-[80px] lg:h-[8px] bg-second-logo-color"></div>
              )}
              <span className="transition duration-300 ease-out hover:text-second-logo-text tracking-wide hover:tracking-widest">
                {navsLinks[1].title}
              </span>
            </h3>
          </NavLink>
        </li> */}
        <li
          // key={id[0]}
          className={`font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color ${
            navsLinks[2].id === currentIndex ? "text-second-logo-text" : ""
          }`}
        >
          <NavLink
            onClick={() => closeHandler(navsLinks[2].id)}
            to={navsLinks[2].link}
          >
            <h3
              className={`flex gap-x-1 items-center ${
                navsLinks[2].id === currentIndex
                  ? "ml-[-80px] lg:ml-[-120px]"
                  : ""
              }`}
            >
              {navsLinks[2].id === currentIndex && (
                <div className="w-[40px] h-[4px] md:w-[60px] lg:w-[80px] lg:h-[8px] bg-second-logo-color"></div>
              )}
              <span className="transition duration-300 ease-out hover:text-second-logo-text tracking-wide hover:tracking-widest">
                {navsLinks[2].title}
              </span>
            </h3>
          </NavLink>
        </li>
        <li
          // key={id[0]}
          className={`font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color ${
            navsLinks[3].id === currentIndex ? "text-second-logo-text" : ""
          }`}
        >
          <NavLink
            onClick={() => closeHandler(navsLinks[3].id)}
            to={navsLinks[3].link}
          >
            <h3
              className={`flex gap-x-1 items-center ${
                navsLinks[3].id === currentIndex
                  ? "ml-[-80px] lg:ml-[-120px]"
                  : ""
              }`}
            >
              {navsLinks[3].id === currentIndex && (
                <div className="w-[40px] h-[4px] md:w-[60px] lg:w-[80px] lg:h-[8px] bg-second-logo-color"></div>
              )}
              <span className="transition duration-300 ease-out hover:text-second-logo-text tracking-wide hover:tracking-widest">
                {navsLinks[3].title}
              </span>
            </h3>
          </NavLink>
        </li>
        <li
          // key={id[0]}
          className={`font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color ${
            navsLinks[4].id === currentIndex ? "text-second-logo-text" : ""
          }`}
        >
          <NavLink
            onClick={() => closeHandler(navsLinks[4].id)}
            to={navsLinks[4].link}
          >
            <h3
              className={`flex gap-x-1 items-center ${
                navsLinks[4].id === currentIndex
                  ? "ml-[-80px] lg:ml-[-120px]"
                  : ""
              }`}
            >
              {navsLinks[4].id === currentIndex && (
                <div className="w-[40px] h-[4px] md:w-[60px] lg:w-[80px] lg:h-[8px] bg-second-logo-color"></div>
              )}
              <span className="transition duration-300 ease-out hover:text-second-logo-text tracking-wide hover:tracking-widest">
                {navsLinks[4].title}
              </span>
            </h3>
          </NavLink>
        </li>
        <li
          // key={id[0]}
          className={`font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color ${
            navsLinks[5].id === currentIndex ? "text-second-logo-text" : ""
          }`}
        >
          <NavLink
            onClick={() => closeHandler(navsLinks[5].id)}
            to={navsLinks[5].link}
          >
            <h3
              className={`flex gap-x-1 items-center ${
                navsLinks[5].id === currentIndex
                  ? "ml-[-80px] lg:ml-[-120px]"
                  : ""
              }`}
            >
              {navsLinks[5].id === currentIndex && (
                <div className="w-[60px] h-[4px] md:w-[60px] lg:w-[80px] lg:h-[8px] bg-second-logo-color"></div>
              )}
              <span className="transition duration-300 ease-out hover:text-second-logo-text tracking-wide hover:tracking-widest">
                {navsLinks[5].title}
              </span>
            </h3>
          </NavLink>
        </li>
        <li
          // key={id[0]}
          className={`font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color ${
            navsLinks[6].id === currentIndex ? "text-second-logo-text" : ""
          }`}
        >
          <NavLink
            onClick={() => closeHandler(navsLinks[6].id)}
            to={navsLinks[6].link}
          >
            <h3
              className={`flex gap-x-1 items-center ${
                navsLinks[6].id === currentIndex
                  ? "ml-[-80px] lg:ml-[-120px]"
                  : ""
              }`}
            >
              {navsLinks[6].id === currentIndex && (
                <div className="w-[40px] h-[4px] md:w-[60px] lg:w-[80px] lg:h-[8px] bg-second-logo-color"></div>
              )}
              <span className="transition duration-300 ease-out hover:text-second-logo-text tracking-wide hover:tracking-widest">
                {navsLinks[6].title}
              </span>
            </h3>
          </NavLink>
        </li>
        <li>{breakpoints && <DownlaodCv />}</li>
        {/* );
        })} */}
      </ul>
    </div>
    // </Container>
  );
}

export default Nav;
