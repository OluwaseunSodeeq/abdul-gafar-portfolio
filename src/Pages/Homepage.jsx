import Header from "../Component/Header";
import HeroContent from "../Component/HeroContent";
import HomepageHeroSection from "../Component/HomepageHeroSection";
import ProjectCards from "../Component/ProjectCards";
import Skills from "../Component/Skills";

function Homepage() {
  return (
    <div className="relative">
      <Header />
      <HomepageHeroSection />
      <div className=" md:-mt-8 md:flex md:flex-row md:justify-center py-5 ">
        <Skills />
        <HeroContent />
      </div>
      <ProjectCards />
    </div>
  );
}

export default Homepage;
