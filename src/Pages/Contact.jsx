import Header from "../Component/Header";
import ContactHeroSection from "../Component/Contact/ContactHeroSection";
import useOpenContext from "../Component/Contexts/useOpenContext";

function Contact() {
  const { closeHamburger } = useOpenContext();
  return (
    <div onClick={closeHamburger}>
      <Header />
      <ContactHeroSection />
    </div>
  );
}

export default Contact;
