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

      {/* <div className="flex flex-col justify-center items-center h-auto absolute bottom-0 md:bottom-9 lg:bottom-12 z-10"> */}
      <div className="flex flex-col justify-center items-center h-auto absolute bottom-10 md:bottom-9 lg:bottom-12 z-10 ">
        <div className="flex justify-center items-center ">
          {Array.from({ length: 55 }, (_, i) => (
            <span
              key={i}
              className="w-12 h-12 -mx-4  md:w-10 md:h-10 lg:w-12 lg:h-12 inline bg-plain-white blur rounded-full   "
            ></span>
          ))}
        </div>
        <div className="flex justify-center items-center -mt-2  ">
          {Array.from({ length: 55 }, (_, i) => (
            <span
              key={i}
              className="inline w-7 h-7  md:w-10 md:h-10 lg:w-12 lg:h-12 bg-plain-white blur  rounded-full  "
            ></span>
          ))}
        </div>
        <div className="flex justify-center items-center -mt-2 ">
          {Array.from({ length: 55 }, (_, i) => (
            <span
              key={i}
              className="inline w-7 h-7  md:w-10 md:h-10 lg:w-12 lg:h-12 bg-plain-white blur rounded-full  "
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomepageHeroSection;
