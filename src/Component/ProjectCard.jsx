import "../styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
          className={`flex justify-center items-center absolute w-[80px] px-[10px] h-[15px] md:w-[88px] md:h-[26px]  gap-x-2 rounded-[12px] bottom-[10px] md:bottom-[-40px] lg:bottom-[-33px] inset-x-0 mx-auto left-0 right-0 cursor-not-allowed `}
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
          ? "w-full h-auto px-6  md:px-12 lg:px-6 py-4 bg-bes-bg lg:flex lg:flex-row-reverse lg:justify-center gap-9  md:py-[34px] lg:py-[48px]  "
          : "w-full h-auto px-6  md:px-12 lg:px-6 py-4 bg-second-logo-text lg:flex lg:flex-row lg:justify-center gap-9 md:py-[34px] lg:py-[48px]"
      }
    >
      <div>
        {/* <div className="font-roboto md:w-[596px] md:h-[500px] "> */}
        <div
          className={`font-roboto md:w-[596px] ${
            projectType === 0 ? "lg:h-[450px]" : "lg:h-[500px]"
          }`}
        >
          <div className="lg:pt-[24px]">
            <img
              src={each.logoImg}
              className={` ${projectType === 0 ? " w-[70px] h-[70px]" : ""}`}
              alt=" site logo"
            />
          </div>
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
        <Link to={each.url}>
          <div
            className={`hidden lg:flex  gap-1 items-center justify-start lg:-mt-20 lg:w-[135px]  lg:text-base lg:cursor-pointer  p-2 lg:py-2 lg:px-4  rounded-md lg:rounded-[8px]
            ${
              projectType === 0
                ? "bg-bes-bg hover:bg-[#e5fbe8]"
                : "bg-second-logo-text hover:bg-[#f7f7f7]"
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
        </Link>
      </div>
      {/* <div className="mt-5 w-full  md:w-[596px] md:h-[524px] md:mt-0  relative  "> */}
      <div className="mt-5 w-full  md:w-[596px]  md:mt-10  lg:mt-0 relative  ">
        <div
          className={` relative px-6  md:px-10 md:py-16  lg:px-12 lg:pt-[72px] lg:pb-[48px] rounded-[24px] 
            ${projectType === 0 ? " bg-card2-color" : " bg-[#8C98A1]"}`}
        >
          <div className="relative">
            <div className="w-[98px] h-[18px] md:w-auto md:h-auto absolute left-1/2 transform -translate-x-1/2 top-[8px] md:top-[-47px] lg:top-[-52px]">
              <img
                className={` ${
                  projectType === 0
                    ? "  w-[40px] h-[40px]  lg:w-[60px] lg:h-[60px] mx-auto mt-[8px] md:mt-[-4px] lg:mt-[-13px]"
                    : "mt-[20px] md:mt-[0px]"
                }`}
                src={each.logoImg}
                alt=" site logo"
              />
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
                      // className="w-full h-[280px] py-[30px] md:py-0 md:w-full md:h-full cursor-grab rounded-xl"
                      className="w-full h-[330px] pt-[70px] pb-[30px] md:py-0 md:w-full md:h-full cursor-grab rounded-xl"
                      src={each}
                      alt="projects"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <Link to={each.url}>
          <div
            className={`cursor-pointer flex gap-2 items-center justify-end mt-8 max-w-[135px]  text-nowrap lg:hidden  "
            ${
              projectType === 0
                ? "bg-bes-bg hover:bg-[#e5fbe8]"
                : "bg-second-logo-text hover:bg-[#f7f7f7]"
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
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
