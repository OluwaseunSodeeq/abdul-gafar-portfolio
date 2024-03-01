import "../styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectCard({ each, projectType }) {
  const startIcon = (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0.520142L7.62054 4.8996L12 6.52014L7.62054 8.14069L6 12.5201L4.37946 8.14069L0 6.52014L4.37946 4.8996L6 0.520142Z"
        fill="#005CB7"
      />
    </svg>
  );
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <></>,
    nextArrow: <></>,
    appendDots: (dots) => (
      <>
        <ul className="slick-dots"></ul>
        <ul
          className={`flex justify-center items-center absolute w-[80px] px-[10px] h-[15px] md:w-[88px] md:h-[26px]  gap-x-2 rounded-[12px] bottom-[10px] md:bottom-[-40px] lg:bottom-[-50px] inset-x-0 mx-auto left-0 right-0 cursor-not-allowed ${
            projectType === 0 ? "bg-user-color" : "bg-[#67696E]"
          }`}
        >
          {dots.map((dot, index) => (
            <li
              key={index}
              className={`inline-block w-[7px] h-[7px] md:w-[10px] md:h-[10px] rounded-full ${
                dot.props.className.includes("slick-active")
                  ? "bg-[#FFFFFF]"
                  : "bg-[#9A9EA5]"
              }`}
            >
              {/* {dot} */}
            </li>
          ))}
        </ul>
      </>
    ),
  };

  return (
    <div
      className={
        projectType === 0
          ? "w-full px-6  md:px-12 lg:px-6 py-4 bg-bes-bg lg:flex lg:flex-row-reverse lg:justify-center gap-9"
          : "w-full px-6  md:px-12 lg:px-6 py-4 bg-second-logo-text lg:flex lg:flex-row lg:justify-center gap-9"
      }
    >
      <div>
        <div className="font-roboto lg:w-[590px] lg:h-[550px] lg:pt-5">
          {/* <h3
            className={
              projectType === 0
                ? "font-bold font-roboto text-2xl leading-7 text-card2-color lg:text-5xl"
                : "font-bold font-roboto text-2xl leading-7 text-content-color lg:text-5xl"
            }
          >
            {each.title}
          </h3> */}
          <img src="../flapcoop.png" alt=" site logo" />
          <div className=" flex items-center gap-2 mt-2 md:mt-1 lg:mt-4">
            <span className="text-sm leading-6 text-sub-text font-outfit font-normal lg:text-base">
              {each.subTitle[0]}
            </span>
            <span className="text-xl">{startIcon}</span>
            <span className="text-sm leading-6 text-sub-text font-outfit font-normal lg:text-base">
              {each.subTitle[1]}
            </span>
          </div>
          <p className="font-roboto font-normal text-sm leading-6 text-content-color mt-3 lg:mt-4">
            {each.text}
          </p>
        </div>
        <div
          className={`hidden lg:flex  gap-2 items-center justify-start lg:-mt-20  lg:text-base lg:cursor-pointer hover:bg-plain-white p-2 max-w-[140px] md:max-w-[153px] lg:py-4 lg:px-5  rounded-md lg:rounded-[8px] ${
            projectType === 0 ? "bg-bes-bg" : "bg-second-logo-text"
          }  `}
        >
          <span
            className={
              projectType === 0
                ? "text-card2-color font-bold text-sm leading-6 font-Helvetica "
                : "text-[#8C98A1] font-bold text-sm leading-6 font-Helvetica"
            }
          >
            Vist Website
          </span>
          <span>{each.link}</span>
        </div>
      </div>
      <div className="mt-5 w-full h-[350px] md:w-[590px] md:h-[550px]  relative ">
        <div
          className={` relative px-6  md:px-10 md:py-16  lg:px-12 lg:py-20 rounded-[24px]
            ${projectType === 0 ? " bg-card2-color" : " bg-[#8C98A1]"}`}
        >
          <div className="relative">
            <div className="w-[98px] h-[18px] md:w-auto md:h-auto absolute left-1/2 transform -translate-x-1/2 top-[8px] md:top-[-47px] lg:top-[-52px]">
              <img src={each.logoImg} alt=" site logo" />
            </div>
            <Slider {...settings}>
              {each.cardImg.map((each, i) => {
                return (
                  <div
                    className="flex justify-center items-center flex-col "
                    key={i}
                  >
                    <img
                      key={i}
                      className="w-full h-[280px] py-[30px] md:py-0 md:w-full md:h-full cursor-grab rounded-xl"
                      src={each}
                      alt="projects"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="cursor-pointer flex gap-2 items-center justify-end mt-8 lg:hidden  ">
          <span
            className={
              projectType === 0
                ? "text-card2-color font-bold text-sm leading-6 font-Helvetica"
                : "text-[#8C98A1] font-bold text-sm leading-6 font-Helvetica"
            }
          >
            Vist Website
          </span>
          <span>{each.link}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
