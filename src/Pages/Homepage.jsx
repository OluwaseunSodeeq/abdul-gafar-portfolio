import Header from "../Component/Header";
import HeroContent from "../Component/HeroContent";
import HomepageHeroSection from "../Component/HomepageHeroSection";
import ProjectCards from "../Component/ProjectCards";
import Skills from "../Component/Skills";

function Homepage() {
  return (
    <div className="relative  ">
      <Header />
      <HomepageHeroSection />
      <div className="lg:w-full lg:max-w-[1440px] lg:flex lg:justify-between  py-5  lg:px-16 lg:gap-x-9  ">
        <Skills />
        <HeroContent />
      </div>
      <ProjectCards />
    </div>
  );
}

export default Homepage;
