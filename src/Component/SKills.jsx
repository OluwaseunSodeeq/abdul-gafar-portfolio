function Skills() {
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
    <div className="py-3 lg:py-0 px-4">
      <div className="lg:w-80 relative  py-4 px-6  bg-second-logo-text shadow-2xl rounded-[12px]">
        <p className="font-normal font-Helvetica lg:text-3xl text-xl text-user-color leading-8 ">
          Skills
        </p>

        <div className=" mt-2 px-2 lg:mt-6">
          {skillsArray.map((each) => (
            <div key={each} className=" flex gap-2  items-center lg:mt-1.5">
              <div className="bg-content-color md:w-2 md:h-2  w-1.5 h-1.5 border rounded-full"></div>
              <p className="font-bold font-Helvetica text-sm md:text-base text-content-color leading-7 px-2">
                {each}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
