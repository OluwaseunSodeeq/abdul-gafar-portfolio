// import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import useOpenContext from "./Contexts/useOpenContext";

function HomepageHeroSection() {
  const { closeHamburger } = useOpenContext();
  // const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div onClick={closeHamburger}>
      <div className=" relative mt-[126px] h-auto flex justify-center items-center flex-col  overflow-x-hidden md:mt-36  lg:mt-36 lg:pb-[60px] bg-plain-white">
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-[740px] border-red-600 rounded-sm"
        >
          <img
            className=" pt-2 pb-10 px-6 h-auto  md:py-3 md:px-8  lg:py-3 lg:px-8  text-center "
            src="../big-geezy.png"
            alt="Abdul-Gafar's"
          />
        </motion.div>

        <div className="bg-plain-white  w-full h-[65px] pb-3  md:pb-7 pt-2 md:mt-3  md:pt-1 absolute z-20  bottom-1  lg:bottom-[0px] text-center lg:pt-6  md:h-[85px]  lg:h-[140px] border-none  ">
          <div className="">
            <TypeAnimation
              sequence={[
                "Abdul-Gafar Jimoh",
                2000,
                "Product Designer",
                2000,
                "Ui Designer",
                2000,
                "Ux Designer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
              wrapper="h3"
              className="text-xl md:text-4xl font-bold font-Helvetica leading-6 lg:leading-10 lg:text-6xl text-user-color -mt-2"
            />
          </div>
          <p className=" bg-plain-white font-normal text-sm md:text-lg lg:text-2xl leading-4 text-user-color text-center mt-1 md:mt-2">
            Available for <span className="font-bold">Hire</span> and
            <span className="font-bold">Freelance</span>
          </p>
          <div className="w-full h-[30px] bg-plain-white"></div>
        </div>

        <div
          className="w-full flex  
            flex-col justify-center items-center h-auto absolute bottom-1 md:bottom-6 lg:bottom-[28px] z-10  "
        >
          <div className="flex justify-center items-center lg:justify-between  lg:w-full  ">
            {Array.from({ length: 75 }, (_, i) => (
              <span
                key={i}
                className="w-8 h-8 -mx-6 inline blur rounded-sm lg:rounded-[8px] lg:w-12 lg:h-12 bg-plain-white  "
              ></span>
            ))}
          </div>
          <div className="flex justify-center items-center lg:justify-between  lg:w-full  -mt-2  ">
            {Array.from({ length: 75 }, (_, i) => (
              <span
                key={i}
                className="w-8 h-8 -mx-6   inline blur rounded-sm lg:rounded-[8px] lg:w-12 lg:h-12 bg-plain-white  "
              ></span>
            ))}
          </div>
          <div className="flex justify-center items-center lg:justify-between  lg:w-full  -mt-2 bg-plain-white  ">
            {Array.from({ length: 75 }, (_, i) => (
              <span
                key={i}
                className="w-8 h-8 -mx-6   inline blur rounded-sm lg:rounded-[8px] lg:w-12 lg:h-12 bg-plain-white  "
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageHeroSection;
