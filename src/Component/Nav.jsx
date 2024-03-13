import { NavLink } from "react-router-dom";
import useOpenContext from "./Contexts/useOpenContext";
import DownlaodCv from "./DownlaodCv";
import { useMediaQuery } from "react-responsive";
// import Header from "./Header";

function Nav() {
  const { closeHamburger, setCurrentIndex, currentIndex } = useOpenContext();
  const breakpoints = useMediaQuery({ maxWidth: 1024 });
  // const breakpointsNav = useMediaQuery({ maxWidth: 768 });
  // console.log(breakpointsNav);
  const closeHandler = function (index) {
    setCurrentIndex(index);
  };

  const navsLinks = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "Resume", link: "/" },
    { id: 2, title: "About me", link: "/about" },
    { id: 3, title: "Contact", link: "/contact" },
    {
      id: 4,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/jimoh-gafar-63a51627a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    { id: 4, title: "Dribble", link: "https://dribbble.com/Abdulgafarr" },
    {
      id: 5,
      title: "Twitter",
      link: "https://x.com/moore__g?s=11&t=_L--Oyl2Z7pW4eps0BUNnQ",
    },
    { id: 6, title: "Behance", link: "https://www.behance.net/jimohgafar" },
    // {id:0,title:"Home",}
  ];
  return (
    // <Container>

    <div>
      {/* {breakpointsNav && <Header />} */}
      <div className=" w-full mx-auto  bg-user-color absolute z-30  ">
        <ul
          className=" h-[95vh] flex md:h-auto lg:h-auto flex-col justify-center gap-y-2 items-center -mt-[50px]  pb-5 pt-16"
          onClick={closeHamburger}
        >
          <li
            // key={id[0]}
            className={`font-bold font-Helvetica text-[32px] leading-[48px]  hover:text-second-logo-text ${
              navsLinks[0].id === currentIndex
                ? "text-second-logo-text"
                : "text-unactive-color"
            }`}
          >
            <NavLink
              onClick={() => closeHandler(navsLinks[0].id)}
              to={navsLinks[0].link}
            >
              <h3
                className={`flex gap-x-1 items-center ${
                  navsLinks[0].id === currentIndex
                    ? "ml-[-40px] md:ml-[-60px] lg:ml-[-80px]"
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

          <li
            // key={id[0]}
            className={`font-bold font-Helvetica text-[32px] leading-[48px]  ${
              navsLinks[2].id === currentIndex
                ? "text-second-logo-text"
                : "text-unactive-color"
            }`}
          >
            <NavLink
              onClick={() => closeHandler(navsLinks[2].id)}
              to={navsLinks[2].link}
            >
              <h3
                className={`flex gap-x-1 items-center ${
                  navsLinks[2].id === currentIndex
                    ? "ml-[-40px] md:ml-[-60px] lg:ml-[-80px]"
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
            className={`font-bold font-Helvetica text-[32px] leading-[48px]  ${
              navsLinks[3].id === currentIndex
                ? "text-second-logo-text"
                : "text-unactive-color"
            }`}
          >
            <NavLink
              onClick={() => closeHandler(navsLinks[3].id)}
              to={navsLinks[3].link}
            >
              <h3
                className={`flex gap-x-1 items-center ${
                  navsLinks[3].id === currentIndex
                    ? "ml-[-40px] md:ml-[-60px] lg:ml-[-80px]"
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
            className={`font-bold font-Helvetica text-[32px] leading-[48px]  ${
              navsLinks[4].id === currentIndex
                ? "text-second-logo-text"
                : "text-unactive-color"
            }`}
          >
            <NavLink
              onClick={() => closeHandler(navsLinks[4].id)}
              to={navsLinks[4].link}
            >
              <h3
                className={`flex gap-x-1 items-center ${
                  navsLinks[4].id === currentIndex
                    ? "ml-[-40px] md:ml-[-60px] lg:ml-[-80px]"
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
            className={`font-bold font-Helvetica text-[32px] leading-[48px]  ${
              navsLinks[5].id === currentIndex
                ? "text-second-logo-text"
                : "text-unactive-color"
            }`}
          >
            <NavLink
              onClick={() => closeHandler(navsLinks[5].id)}
              to={navsLinks[5].link}
            >
              <h3
                className={`flex gap-x-1 items-center ${
                  navsLinks[5].id === currentIndex
                    ? "ml-[-40px] md:ml-[-60px] lg:ml-[-80px]"
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
            className={`font-bold font-Helvetica text-[32px] leading-[48px]  ${
              navsLinks[6].id === currentIndex
                ? "text-second-logo-text"
                : "text-unactive-color"
            }`}
          >
            <NavLink
              onClick={() => closeHandler(navsLinks[6].id)}
              to={navsLinks[6].link}
            >
              <h3
                className={`flex gap-x-1 items-center ${
                  navsLinks[6].id === currentIndex
                    ? "ml-[-40px] md:ml-[-60px] lg:ml-[-80px]"
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
    </div>
  );
}

export default Nav;
