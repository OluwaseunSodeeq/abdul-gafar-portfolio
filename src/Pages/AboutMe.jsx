import AboutHeroSection from "../Component/About/AboutHeroSection";
import useOpenContext from "../Component/Contexts/useOpenContext";
import Header from "../Component/Header";

function AboutMe() {
  const { closeHamburger } = useOpenContext();
  return (
    <div onClick={closeHamburger}>
      <Header />
      <AboutHeroSection />
    </div>
  );
}

export default AboutMe;
