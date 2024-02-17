import { useState } from "react";

function HeroContent() {
  const [current, setCurrent] = useState(false);

  const falseFunction = () => {
    setCurrent(false);
  };
  console.log(falseFunction, current);

  function handleItemClicked(item) {
    setCurrent(item.heading);
  }
  // UI DATA
  const cardsContent = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1007_2711)">
            <path
              d="M4.5 19.5V12.75H9"
              stroke="stroke-inherit"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 19.5H3"
              stroke="stroke-inherit"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 19.5V8.25H14.25"
              stroke="stroke-inherit"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.25 19.5V3.75H19.5V19.5"
              stroke="stroke-inherit"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1007_2711">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      heading: "Experience",
      text: "In January 2023, I embarked on a transformative journey into the world of UI/UX (product design) at EISOFT. With unwavering dedication and a series of rigorous assignments, I earned my place as a paying intern by October 2023. Since then, I've channeled my skills and expertise into meaningful contributions to the company's projects, enriching my professional journey with every step",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1007_2722)">
            <path
              d="M0.75 9L12 3L23.25 9L12 15L0.75 9Z"
              stroke="stroke-inherit"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 9L17.25 11.8003V22.5"
              stroke="stroke-inherit"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.25 10.6003V15.5897C20.2504 15.773 20.1837 15.9501 20.0625 16.0875C19.0031 17.2678 16.4156 19.5 12 19.5C7.58438 19.5 4.99875 17.2678 3.9375 16.0875C3.81628 15.9501 3.74958 15.773 3.75 15.5897V10.6003"
              stroke="stroke-inherit"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1007_2722">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      heading: "Education",
      text: "i hold a national Diploma in Computer Science and am currently on the path to furthering my education with the pursuit of an HND. My commitment to learning doesnt stop there, i am dedicated to continuous self-improvement.",
    },
  ];

  return (
    <div
      className={`font-Helvetica flex flex-col items-center gap-4 py-3 lg:py-0 px-4 lg:gap-8 `}
    >
      {cardsContent.map((each) => (
        <div
          onMouseEnter={() => {
            handleItemClicked(each);
          }}
          onMouseLeave={falseFunction}
          key={each.heading}
          // className="py-4 px-6 rounded-lg bg-second-logo-text shadow-2xl lg:w-[886px] lg:h-auto lg:text-left"
          className={`py-4 px-6 rounded-lg  shadow-xl lg:w-[886px] lg:h-auto lg:text-left   cursor-pointer
            bg-plain-white text-content-color
              hover:bg-content-color hover:text-plain-white
          `}
        >
          <div className=" h-11 flex justify-start gap-2 items-center lg:items-start  lg:h-16 lg:flex-col text-inherit ">
            <div
              className={` ${
                current === each.heading
                  ? " stroke-plain-white"
                  : " stroke-content-color"
              }`}
            >
              {each.icon}
            </div>
            <h3
              className={` font-normal text-xl  leading-9 lg:leading-7  ${
                current === each.heading
                  ? " text-plain-white"
                  : " text-user-color"
              }`}
            >
              {each.heading}
            </h3>
          </div>
          <p className="font-bold text-sm md:text-base leading-9 lg:leading-10 text-inherit">
            {each.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroContent;
