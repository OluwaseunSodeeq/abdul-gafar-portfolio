import useOpenContext from "../Contexts/useOpenContext";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

function Footer() {
  const { closeHamburger } = useOpenContext();
  return (
    // <div className="bg-user-color w-full py-8 px-6 ">
    <div onClick={closeHamburger} className=" w-full ">
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default Footer;
