// import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import WordsAnimation from "./Testing";

function HomepageHeroSection() {
  // const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div className=" relative flex justify-center items-center flex-col  overflow-x-hidden mt-28 lg:mt-36 lg:pb-[60px]">
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full md:w-[740px] border-red-600 rounded-sm"
      >
        <img
          className=" py-3 px-6 h-auto  md:py-3 md:px-8  lg:py-3 lg:px-8  text-center "
          src="../big-geezy.png"
          alt="Abdul-Gafar's"
        />
      </motion.div>

      {/* <div className=" bg-plain-white  w-full h-auto pb-3 pt-3  relative z-20 bottom-14 md:bottom-12 lg:bottom-[22px] text-center lg:pt-4 "> */}
      <div className=" bg-plain-white   w-full h-auto pb-3 pt-3  absolute z-20 bottom-14 md:bottom-12 lg:bottom-[0px] text-center lg:pt-4 lg:h-[150px] ">
        <h3 className="text-xl md:text-4xl font-bold font-Helvetica leading-7 lg:leading-10 lg:text-6xl text-user-color -mt-2 ">
          <WordsAnimation />
        </h3>
        <p className="font-normal text-sm md:text-lg lg:text-2xl leading-4 text-user-color text-center mt-4 ">
          Available for <span className="font-bold">Hire</span> and{" "}
          <span className="font-bold">Freelance</span>
        </p>
      </div>

      {/* <div className="flex flex-col justify-center items-center h-auto absolute bottom-0 md:bottom-9 lg:bottom-12 z-10"> */}
      <div
        className="flex
       flex-col justify-center items-center h-auto absolute bottom-10 md:bottom-9 lg:bottom-[28px] z-10  "
      >
        <div className="flex justify-center items-center ">
          {Array.from({ length: 75 }, (_, i) => (
            <span
              key={i}
              className="w-12 h-12 -mx-4  md:w-10 md:h-10 lg:w-12 lg:h-12 inline bg-plain-white blur rounded-sm   "
            ></span>
          ))}
        </div>
        <div className="flex justify-center items-center -mt-2  ">
          {Array.from({ length: 75 }, (_, i) => (
            <span
              key={i}
              className="w-12 h-12 -mx-4  md:w-10 md:h-10 lg:w-12 lg:h-12 inline bg-plain-white blur rounded-sm   "
            ></span>
          ))}
        </div>
        <div className="flex justify-center items-center -mt-2 ">
          {Array.from({ length: 75 }, (_, i) => (
            <span
              key={i}
              className="w-12 h-12 -mx-4  md:w-10 md:h-10 lg:w-12 lg:h-12 inline bg-plain-white blur rounded-sm   "
              // className="inline w-7 h-7  md:w-10 md:h-10 lg:w-12 lg:h-[36px] bg-plain-white blur rounded-sm  "-md  "
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomepageHeroSection;
