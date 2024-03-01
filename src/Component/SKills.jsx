import { useState } from "react";

function Skills({ breakPoint }) {
  const [ui, setUi] = useState(null);
  const trueFunction = () => {
    setUi(true);
  };

  const falseFunction = () => {
    setUi(null);
  };

  const skillsArray = [
    "Mobile App Design",
    "Web Design",
    "User Research",
    "Information Architecture",
    "Wireframing",
    "Prototyping",
    "Typography",
    "Collaboration",
    "Responsive Design",
    "User Flow",
    "Problem Solving",
    "Design Thinking",
    "Iconography",
    "Color Theory",
  ];
  return (
    <div className="py-3 lg:py-0 lg:px-0 px-4 md:px-12 ">
      <div
        className={`lg:w-80 relative lg:cursor-pointer  py-2 px-6  lg:shadow-custom rounded-[12px] text-content-color ${
          breakPoint ? "hover:bg-content-color hover:text-plain-white" : ""
        }`}
        onMouseEnter={trueFunction}
        onMouseLeave={falseFunction}
      >
        <p
          className={` font-Helvetica font-[400] text-[20px] leading-8 md:text-[25px] lg:leading-[44px] lg:text-[30px]${
            ui && breakPoint ? "text-plain-white" : "text-user-color"
          }`}
        >
          Skills
        </p>

        <div className=" mt-2 px-2 lg:mt-6 pb-3">
          {skillsArray.map((each) => (
            <div key={each} className=" flex gap-2  items-center lg:mt-1.5 ">
              <div
                className={` md:w-2 md:h-2  w-1.5 h-1.5 border rounded-full ${
                  breakPoint && ui ? "bg-plain-white" : "bg-content-color"
                }`}
              ></div>
              <p className="font-bold font-Helvetica text-sm md:text-base text-inherit leading-9 px-2">
                {each}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
