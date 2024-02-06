import ProjectCard from "./ProjectCard";

const projectArray = [
  {
    title: "BES",
    subTitle: ["Web App", "Mobile App"],
    text: "BES  is a web app that provides range of engineering services with professionalism and expertise. BES  is a web app that provides range of engineering services with professionalism and expertise ",
    cardImg: "../bes01.png",
    link: (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1007_2746)">
          <path
            d="M6 3.52002L11 8.52002L6 13.52"
            stroke="#00703C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1007_2746">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0 0.52002)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "flaapcop ",
    subTitle: ["Web App", "Mobile App"],
    text: "BES  is a web app that provides range of engineering services with professionalism and expertise. BES  is a web app that provides range of engineering services with professionalism and expertise ",
    cardImg: "../Flaap Corporative Landing Page01.png",
    link: (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1007_2746)">
          <path
            d="M6 3.52002L11 8.52002L6 13.52"
            stroke="#8C98A1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1007_2746">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0 0.52002)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

function ProjectCards() {
  return (
    <div className="flex flex-col py-5 lg:flex-col-reverse">
      {projectArray.map((each, i) => (
        <ProjectCard each={each} projectType={i} key={each.title} />
      ))}
    </div>
  );
}

export default ProjectCards;
