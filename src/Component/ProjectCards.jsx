import ProjectCard from "./ProjectCard";

function ProjectCards() {
  // UI DATA
  const projectArray = [
    {
      id: 1,
      title: "BES",
      subTitle: ["Responsive Web", ""],
      bgColor: "#f4fdf5",
      cardColor: "#00703C",
      bottomBgColor: "#f4fdf5",
      bottomColor: "#00703C",
      hoverColor: "#e5fbe8",
      text: "BES  is a website that provides range of engineering services with professionalism and expertise. BES  is a web app that provides range of engineering services with professionalism and expertise ",
      cardImg: [
        "../bespro1.png",
        "../bespro2.png",
        "../bespro3.png",
        "../bespro4.png",
      ],
      logoImg: "../BESLOGO.svg",
      url: "https://bes-beta.vercel.app/",
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
      id: 2,
      title: "Flaapcop ",
      subTitle: ["Web ", " Mobile App"],
      text: "Flapcoop is a web app that employs a profitable and sustainable business model. Through cooperative engagement in Real Estate, Consumer Financing, and Agricultural Value Chain sectors, it strives to make food, shelter, and asset acquisition affordable for all its members.",
      bgColor: "#FAFBFC",
      cardColor: "#8C98A1",
      bottomBgColor: "#FAFBFC",
      // bottomBgColor: "#F2F4F6",
      bottomColor: "#8C98A1",
      hoverColor: "#f7f7f7",
      cardImg: [
        "../flapro1.png",
        "../flappro2.png",
        "../flapro3.png",
        "../flapro4.png",
      ],
      logoImg: "../flapcoop.png",
      url: "https://bes-beta.vercel.app/",
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
    {
      id: 3,
      title: "GADA APP",
      subTitle: ["Mobile App", ""],
      text: "Gada App is a web app that employs a profitable and sustainable business model. Through cooperative engagement in Real Estate, Consumer Financing, and Agricultural Value Chain sectors, it strives to make food, shelter, and asset acquisition affordable for all its members.",
      bgColor: "#EEF9FE",
      // cardColor: "#005CB7",
      cardColor: "#348CD3",
      bottomBgColor: "#EEF9FE",
      // bottomBgColor: "#C9ECFB",
      bottomColor: "#818B94",
      hoverColor: "#f7f7f7",
      cardImg: [
        "../gadaImage01.png",
        "../gadaImage02.png",
        "../gadaImage03.png",
        "../gadaImage04.png",
      ],
      logoImg: "../gadaLogo.png",
      url: "",
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
              stroke="#818B94"
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

  return (
    <div className="w-full flex flex-col pt-5 pb-0  lg:pb-5 border-t lg:mt-[30px] lg:pt-[40px] ">
      {projectArray.map((each, _) => (
        <ProjectCard each={each} key={each.title} />
      ))}
    </div>
  );
}

export default ProjectCards;
