import { useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

const menu = (
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
);
const closeText = (
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
);

function Header() {
  const [open, setOpen] = useState(false);
  const handler = (open) => setOpen(!open);
  console.log(open, setOpen, handler);
  console.log(menu, closeText);

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
