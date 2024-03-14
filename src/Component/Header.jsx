import useOpenContext from "./Contexts/useOpenContext";
import MainHeader from "./MainHeader";
import SideHeader from "./SideHeader";

function Header() {
  const { open } = useOpenContext();

  return (
    <div className={`fixed z-50 w-full left-0 right-0 mx-auto top-0`}>
      <MainHeader />
      <div
        className={`duration-300 ease-in-out absolute top-0 left-0 w-full z-30 ${
          open ? "" : "translate-x-full"
        }`}
      >
        <SideHeader />
      </div>
    </div>
  );
}

export default Header;
