import { useState } from "react";

function Skills() {
  const [ui, setUi] = useState(false);

  const trueFunction = () => {
    console.log("hello");
    setUi(true);
  };
  const falseFunction = () => {
    console.log("hello");
    setUi(false);
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
    <div
      className="py-3 lg:py-0 px-4 cursor-pointer"
      onMouseEnter={trueFunction}
      onMouseLeave={falseFunction}
    >
      <div
        className={`lg:w-80 relative  py-2 px-6  shadow-custom rounded-[12px] text-content-color hover:bg-content-color hover:text-plain-white`}
      >
        <p
          className={`font-normal font-Helvetica lg:text-3xl text-xl  leading-8 ${
            ui === true ? "text-plain-white" : "text-user-color"
          }`}
        >
          Skills
        </p>

        <div className=" mt-2 px-2 lg:mt-6">
          {skillsArray.map((each) => (
            <div key={each} className=" flex gap-2  items-center lg:mt-1.5">
              <div
                className={` md:w-2 md:h-2  w-1.5 h-1.5 border rounded-full ${
                  ui === true ? "bg-plain-white" : "bg-content-color"
                }`}
              ></div>
              <p className="font-bold font-Helvetica text-sm md:text-base text-inherit leading-7 px-2">
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
