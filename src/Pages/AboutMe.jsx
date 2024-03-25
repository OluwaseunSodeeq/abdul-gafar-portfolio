import AboutHeroSection from "../Component/About/AboutHeroSection";
// import FooterBottom from "../Component/Footer/FooterBottom";
import FooterBottom from "../Component/Footer/FooterBottomWhite";

import Header from "../Component/Header";

function AboutMe() {
  return (
    <div className="pt-0">
      <Header />
      <AboutHeroSection />
      {/* <FooterBottom /> */}
      <FooterBottom />
    </div>
  );
}

export default AboutMe;
