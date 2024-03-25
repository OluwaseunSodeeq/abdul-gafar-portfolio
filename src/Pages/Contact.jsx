import Header from "../Component/Header";
import ContactHeroSection from "../Component/Contact/ContactHeroSection";
// import FooterBottom from "../Component/Footer/FooterBottom";
import FooterBottom from "../Component/Footer/FooterBottomWhite";

function Contact() {
  return (
    <div className="pt-0">
      <Header />
      <ContactHeroSection />
      {/* <FooterBottom /> */}
      <FooterBottom />
    </div>
  );
}

export default Contact;
