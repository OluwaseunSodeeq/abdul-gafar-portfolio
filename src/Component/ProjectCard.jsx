import "../styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function ProjectCard({ each }) {
  const breakpoints = useMediaQuery({ maxWidth: 1024 });
  const breakpoints1 = useMediaQuery({ minWidth: 950 });
  console.log(breakpoints);

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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
  // const visitWebsiteContent = (
  //   <div
  //     className={`cursor-pointer flex gap-2 items-center justify-end mt-8 p-2 rounded-[8px]  text-nowrap lg:hidden  "
  //   `}
  //     style={{ backgroundColor: each.bottomBgColor }}
  //   >
  //     <span
  //       className={"font-bold text-sm leading-6 font-Helvetica"}
  //       style={{ color: each.bottomColor }}
  //     >
  //       Vist Website
  //     </span>
  //     <span>{each.link}</span>
  //   </div>
  // );
  return (
    <div
      className={`w-full h-auto px-6  md:px-12 lg:px-6 py-6  lg:flex lg:justify-center gap-9  md:py-[48px] lg:py-[72px] ${
        each.id % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
      style={{ backgroundColor: each.bgColor }}
    >
      {/* Content Card */}
      <div>
        <div
          className={`font-roboto  lg:w-[100%-596px-32px] lg:h-[500px]  ${
            breakpoints1 && breakpoints ? "md:w-[300px]" : "md:w-[596px]"
          }  `}
        >
          <div className="lg:pt-[24px]">
            <p className="font-poppins text-2xl md:text-4xl lg:text-[48px] lg:leading-[56px] text-content-color font-bold">
              {each.title}
            </p>
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
        {each.title !== "store" ? (
          <Link to={each.url} target="_blank" rel="noopener noreferrer">
            <div
              className={`hidden lg:flex  gap-1 items-center justify-start lg:-mt-20 lg:w-[135px]  lg:text-base lg:cursor-pointer  p-2 lg:py-2 lg:px-4  rounded-md lg:rounded-[8px]
           `}
              style={{
                backgroundColor: each.bottomBgColor,
              }}
            >
              <span
                className={`font-bold text-sm leading-6 font-Helvetica`}
                style={{ color: each.bottomColor }}
              >
                Vist Website
              </span>
              <span>{each.link}</span>
            </div>
          </Link>
        ) : (
          <div
            onClick={() =>
              each.url(each.title.trim().toLowerCase().replace(/ /g, "+"))
            }
            className={"cursor-pointer"}
          >
            <div
              className={`hidden lg:flex  gap-1 items-center justify-start lg:-mt-20 lg:w-[135px]  lg:text-base lg:cursor-pointer  p-2 lg:py-2 lg:px-4  rounded-md lg:rounded-[8px]
           `}
              style={{
                backgroundColor: each.bottomBgColor,
              }}
            >
              <span
                className={`font-bold text-sm leading-6 font-Helvetica`}
                style={{ color: each.bottomColor }}
              >
                Vist Website
              </span>
              <span>{each.link}</span>
            </div>
          </div>
        )}
      </div>
      {/* Slider Card */}
      <div className="mt-7 md:mt-8 w-full  md:w-[596px] md:h-auto lg:h-[524px] lg:mt-0  relative ">
        <div
          className={`relative px-6  md:px-10 md:py-16  lg:px-12 lg:pt-[72px] lg:pb-[48px] rounded-[24px] 
           `}
          style={{ backgroundColor: each.cardColor }}
        >
          <div className="relative">
            <div className="w-[98px] h-[18px] md:w-auto md:h-auto absolute left-1/2 transform -translate-x-1/2 top-[8px] md:top-[-47px] lg:top-[-52px]">
              <img
                className={` ${
                  each.id === 1
                    ? "  w-[40px] h-[40px]  lg:w-[60px] lg:h-[60px] mx-auto mt-[-2.5px] md:mt-[-4px] lg:mt-[-13px]"
                    : "mt-[6px] md:mt-[0px]"
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
                    <div
                      className="w-full rounded-[16px]"
                      style={{ backgroundColor: each.cardColor }}
                    >
                      <img
                        key={i}
                        className="w-full h-[330px] pt-[50px] pb-[30px] md:py-0 md:w-full md:h-full  cursor-grab rounded-[16px] "
                        // style={{ backgroundColor: each.cardColor }}
                        src={each}
                        alt="projects"
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        {each.title !== "store" ? (
          <Link to={each.url} target="_blank" rel="noopener noreferrer">
            <div
              className={`cursor-pointer flex gap-2 items-center justify-end mt-8 p-2 rounded-[8px]  text-nowrap lg:hidden  "
             `}
              style={{ backgroundColor: each.bottomBgColor }}
            >
              <span
                className={"font-bold text-sm leading-6 font-Helvetica"}
                style={{ color: each.bottomColor }}
              >
                Vist Website
              </span>
              <span>{each.link}</span>
            </div>
          </Link>
        ) : (
          <div
            onClick={() =>
              each.url(each.title.trim().toLowerCase().replace(/ /g, "+"))
            }
            className={"cursor-pointer "}
          >
            <div
              className={`cursor-pointer flex gap-2 items-center justify-end mt-8 p-2 rounded-[8px]  text-nowrap lg:hidden  "
             `}
              style={{ backgroundColor: each.bottomBgColor }}
            >
              <span
                className={"font-bold text-sm leading-6 font-Helvetica"}
                style={{ color: each.bottomColor }}
              >
                Vist Website
              </span>
              <span>{each.link}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
