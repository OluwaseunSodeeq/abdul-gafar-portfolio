function HomepageHeroSection() {
  return (
    <div className="  relative flex justify-center items-center flex-col mt-2">
      <img src="../geezy.png" alt="Abdul-Gafar's" />
      <div className="bg-plain-white pt-2 relative z-20 bottom-10 md:bottom-7 lg:bottom-5">
        <h3 className="text-xl md:text-4xl font-bold font-Helvetica leading-7 lg:leading-10 lg:text-6xl text-user-color">
          Abdul-Gafar Jimoh
        </h3>
        <p className="font-normal text-sm md:text-lg lg:text-2xl leading-4 text-user-color text-center ">
          Available for <span className="font-bold">Hire</span> and{" "}
          <span className="font-bold">Freelance</span>
        </p>
      </div>

      <div className="flex h-20 absolute bottom-5 md:bottom-9 lg:bottom-12 z-10">
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            className="w-7 h-20 md:w-10  lg:h-28 bg-plain-white  rounded-full "
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HomepageHeroSection;
