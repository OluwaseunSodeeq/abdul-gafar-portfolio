import Logo from "./Logo";
import Hamburger from "./Hamburger";
import useOpenContext from "./Contexts/useOpenContext";
import Nav from "./Nav";
import DownlaodCv from "./DownlaodCv";

function Header() {
  const { open, HamburgerHandler } = useOpenContext();

  return (
    <div
      className={`fixed z-50 w-full left-0 right-0  mx-auto top-[0px] ${
        open
          ? "bg-user-color"
          : "shadow-lg shadow-[#7FB5E61F]-400 bg-plain-white"
      }`}
    >
      <div
        className={`w-full h-20 md:h-28 lg:h-32 flex justify-between items-center  
py-6 px-4  md:px-12 lg:py-6 lg:px-16  relative top-0   ${
          open ? " duration-500 ease-in-out" : " duration-500 ease-in-out"
        }      
`}
      >
        <Logo />
        <div className="flex  items-center justify-center gap-x-0 lg:gap-x-8">
          <div className="hidden lg:block">
            <DownlaodCv />
          </div>
          <Hamburger handler={HamburgerHandler} />
        </div>
      </div>
      <div className="w-full  lg:w-full lg:mx-auto">
        <div
          className={`duration-300 ease-in-out  ${
            open
              ? "  relative  z-30 translate-x-0"
              : " relative  z-30 translate-x-full"
          }`}
        >
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
