import { useMediaQuery } from "react-responsive";
import HeroContent from "../Component/HeroContent";
import HomepageHeroSection from "../Component/HomepageHeroSection";
import ProjectCards from "../Component/ProjectCards";
import Skills from "../Component/SKills";
import FooterBottom from "../Component/Footer/FooterBottomWhite";
import useOpenContext from "../Component/Contexts/useOpenContext";
// import Header from "../Component/Header";
// import useOpenContext from "../Component/Contexts/useOpenContext";

function Homepage() {
  const breakPoint = useMediaQuery({ minWidth: 1024 });
  const { closeHamburger } = useOpenContext();
  console.log(breakPoint, closeHamburger);
  return (
    // <div className="relative lg:w-full lg:max-w-[1440px]  bg-plain-white pt-0">
    <div className="border">
      <div className="relative lg:w-full bg-plain-white pt-0 ">
        <div onClick={closeHamburger}>
          <HomepageHeroSection />

          <div className="w-full lg:max-w-[1440px] lg:flex lg:justify-between lg:gap-x-[24px]   py-5  lg:px-[104px] mx-auto ">
            <Skills breakPoint={breakPoint} />
            <HeroContent breakPoint={breakPoint} />
          </div>
          <ProjectCards />
        </div>
        <FooterBottom />
      </div>
    </div>
  );
}

export default Homepage;
