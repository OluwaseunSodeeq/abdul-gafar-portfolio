import { NavLink } from "react-router-dom";
import useOpenContext from "./Contexts/useOpenContext";

function Nav() {
  const { setOpen } = useOpenContext();
  const closeHandler = function () {
    setOpen(false);
  };
  return (
    // <Container>
    <div className=" w-full mx-auto  bg-user-color absolute z-30 ">
      <ul className=" h-[90vh] flex lg:h-auto flex-col justify-center items-center -mt-[20px]  pb-5 pt-10 ">
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color  ">
          <NavLink onClick={closeHandler} to="/">
            Home
          </NavLink>
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color  ">
          <NavLink onClick={closeHandler} to="/">
            Resume
          </NavLink>
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color  ">
          <NavLink onClick={closeHandler} to="/about">
            About me
          </NavLink>
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color  ">
          <NavLink onClick={closeHandler} to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color  ">
          <NavLink onClick={closeHandler} to="/">
            Dribble
          </NavLink>
          Dribble
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color ">
          <NavLink onClick={closeHandler} to="/">
            Twitter
          </NavLink>
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color ">
          <NavLink onClick={closeHandler} to="/">
            Behance
          </NavLink>
        </li>
      </ul>
    </div>
    // </Container>
  );
}

export default Nav;
