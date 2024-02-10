import Logo from "./Logo";
import Hamburger from "./Hamburger";
import useOpenContext from "./Contexts/useOpenContext";
import Nav from "./Nav";

function Header() {
  const { open, HamburgerHandler } = useOpenContext();
  console.log(open);

  //   return (
  //     <div>
  //       {open ? (
  //         <div
  //           className={`duration-300 ease-in-out  ${
  //             open
  //               ? "  relative z-20 translate-x-0 "
  //               : " relative z-30 translate-x-full "
  //           }`}
  //         >
  //           <div
  //             className={`w-full lg:max-w-[1440px] lg:w-full lg:mx-auto lg:overflow-x-hidden
  //       h-20 md:h-28 lg:h-32 flex justify-between items-center
  //       py-6 px-4 md:py-6 md:px-12 lg:py-6 lg:px-16  fixed top-0  bg-user-color
  //       `}
  //           >
  //             <Logo />
  //             <Hamburger handler={HamburgerHandler} />
  //           </div>
  //           <div
  //             className="w-full lg:max-w-[1440px] lg:w-full lg:mx-auto lg:overflow-x-hidden
  //       "
  //             // py-6 px-4 md:py-6 md:px-12 lg:py-6 lg:px-16 "
  //           >
  //             <Nav />
  //           </div>
  //         </div>
  //       ) : (
  //         <div
  //           className={`duration-300 ease-in-out ${
  //             open ? "  relative z-20 " : " relative z-30 "
  //           }`}
  //         >
  //           <div
  //             className={`w-full lg:max-w-[1440px] lg:w-full lg:mx-auto lg:overflow-x-hidden
  //       h-20 md:h-28 lg:h-32 flex justify-between items-center
  //       py-6 px-4 md:py-6 md:px-12 lg:py-6 lg:px-16  fixed top-0
  //           : "bg-plain-white shadow-lg shadow-[#7FB5E61F]-400"
  //       `}
  //           >
  //             <Logo />
  //             <Hamburger handler={HamburgerHandler} />
  //           </div>
  //           {/* <div
  //             className="w-full lg:max-w-[1440px] lg:w-full lg:mx-auto lg:overflow-x-hidden
  //       "
  //             // py-6 px-4 md:py-6 md:px-12 lg:py-6 lg:px-16 "
  //           >
  //             {children}
  //           </div> */}
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  return (
    <div
      className="w-full h-20 md:h-28 lg:h-32 flex justify-between items-center  shadow-lg shadow-[#7FB5E61F]-400 bg-opacity-10
      py-6 px-4"
    >
      <Logo type="main" />
      <Hamburger text="MENU" svg={menu} handler={handler} />
    </div>
  );
}

export default Header;