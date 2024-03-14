import useOpenContext from "./Contexts/useOpenContext";
import DownlaodCv from "./DownlaodCv";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

function MainHeader() {
  const { HamburgerHandler } = useOpenContext();
  return (
    <div
      className={`w-full relative z-10 shadow-lg shadow-[#7FB5E61F]-400 bg-plain-white `}
    >
      <div
        className={`w-full h-20 md:h-28 lg:h-32  lg:max-w-[1440px]  mx-auto flex justify-between items-center  
py-6 px-4  md:px-12 lg:py-6 lg:px-16  relative top-0  duration-500 ease-in-out 
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
    </div>
  );
}

export default MainHeader;
