import { useMediaQuery } from "react-responsive";
import Header from "../Component/Header";
import HeroContent from "../Component/HeroContent";
import HomepageHeroSection from "../Component/HomepageHeroSection";
import ProjectCards from "../Component/ProjectCards";
import Skills from "../Component/SKills";
import useOpenContext from "../Component/Contexts/useOpenContext";
import FooterBottom from "../Component/Footer/FooterBottom";
// import useOpenContext from "../Component/Contexts/useOpenContext";

function Homepage() {
  const breakPoint = useMediaQuery({ minWidth: 1024 });
  const { closeHamburger } = useOpenContext();
  console.log(breakPoint, closeHamburger);
  return (
    <div className="relative lg:w-full lg:max-w-[1440px]  bg-plain-white pt-0">
      <Header />
      <div onClick={closeHamburger}>
        <HomepageHeroSection />

        <div className="lg-full lg:flex lg:justify-between lg:gap-x-[24px]   py-5  lg:px-[104px] ">
          <Skills breakPoint={breakPoint} />
          <HeroContent breakPoint={breakPoint} />
        </div>
        <ProjectCards />
      </div>
      <FooterBottom />
    </div>
  );
}

export default Homepage;
