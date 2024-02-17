import Container from "../Container";

function AboutHeroSection() {
  // Ui Data

  const aboutContent = [
    "I am a product designer at Eisoft, residing in Lagos. I am dedicated to human-centered design and have a fondness for straightforward elegance",
    "I have been designing experiences, studying users, and working with multidisciplinary teams on delivering elegant solutions since 2022. Prior to joining Eisoft, I led a team of interning designers at EISOFT and have helped simplified alot of designs with my UX skills building a successful user experience. With a background in computer science, I have been fortunate to understand how the web works. These experiences have awarded me opportunities to work closely with customers, engineers, stakeholders, and trained me how to approach complex problems with solutions that drive business goals while empowering users.",
    "These days, you can find me building the best experience for my users. When I'm not working, you will find me playing snooker, or enjoying my self made spaghetti. Feel free to drop me a line!",
  ];

  const greetings = ["Hello!", "i’m Gafar!"];
  return (
    <div className="mt-28 lg:mt-32">
      <Container>
        <div className="flex flex-col  md:flex-row md:gap-[50px] md:items-center md:justify-center  lg:gap-[104px] md:mt-[40px]">
          <h2 className="flex flex-col">
            {greetings.map((each) => (
              <span
                key={each}
                className=" font-normal font-risque text-[#1F2022] leading-[50px] lg:leading-[60px] text-[40px] "
              >
                {each}
              </span>
            ))}
          </h2>
          <div className="mt-3">
            <img
              className="w-full md:w-[400px]  lg:w-[500px]"
              src="../gafar.png"
              alt="Abdul-Gafar"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="shadow-custom p-3 lg:p-5 rounded-[8p">
          <div>
            {aboutContent.map((each, i) => (
              <p
                key={i}
                className="pt-4 font-normal font-Helvetica text-sm leading-6 italic lg:text-2xl md:text-xl text-user-color"
              >
                {each}
              </p>
            ))}
          </div>
          <p className="pt-4 font-normal font-Helvetica text-sm leading-6 italic lg:text-2xl md:text-xl text-user-color">
            Email: Gafarj544@gmail.com
          </p>
        </div>
      </Container>
    </div>
  );
}

export default AboutHeroSection;
