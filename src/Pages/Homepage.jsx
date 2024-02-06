import Header from "../Component/Header";
import HeroContent from "../Component/HeroContent";
import HomepageHeroSection from "../Component/HomepageHeroSection";
import ProjectCards from "../Component/ProjectCards";
import Skills from "../Component/SKills";

function Homepage() {
  return (
    <div className="relative">
      <Header />
      <HomepageHeroSection />
      <div className=" md:-mt-8 lg:flex lg:gap-4 lg:items-start lg:justify-center py-5 ">
        <Skills />
        <HeroContent />
      </div>
      <ProjectCards />
    </div>
  );
}

export default Homepage;
