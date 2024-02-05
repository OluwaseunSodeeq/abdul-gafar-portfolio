function Logo({ type }) {
  return (
    <div className="p-0 flex items-center gap-x-1">
      <div
        className={
          type === "main"
            ? "flex items-center justify-center border-4 md:border-6 lg:border-8  rounded-full border-content-color w-12 h-12 md:w-16 md:h-16  lg:w-20 lg:h-20 text-center"
            : "flex items-center justify-center border-4 md:border-6 lg:border-8  rounded-full border-second-logo-color w-12 h-12 md:w-16 md:h-16  lg:w-20 lg:h-20 text-center"
        }
      >
        <h4
          className={
            type === "main"
              ? "text-2xl md:text-3xl lg:text-4xl font-bold leading-9  font-roboto text-user-color"
              : "text-2xl md:text-3xl lg:text-4xl font-bold leading-9  font-roboto text-second-logo-text"
          }
        >
          AJ
        </h4>
      </div>
      <div className="p-0 font-Helvetica">
        <h4
          className={
            type === "main"
              ? "font-bold text-lg md:text-3xl lg:text-4xl md:leading-7 lg:leading-10  leading-7 text-content-color "
              : "font-bold text-lg md:text-3xl lg:text-4xl md:leading-7 lg:leading-10  leading-7 text-second-logo-color"
          }
        >
          Abdul-Gafar Jimoh
        </h4>
        <p
          className={
            type === "main"
              ? "text-sm md:text-2xl lg:text-3xl leading-5 text-logo-text font-normal  "
              : "text-sm md:text-2xl lg:text-3xl leading-5 text-second-logo-text font-normal  "
          }
        >
          Ux & Product Designer
        </p>
      </div>
    </div>
  );
}

export default Logo;
