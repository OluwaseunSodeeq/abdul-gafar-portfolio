function Hamburger({ text, svg, handler }) {
  return (
    <div onClick={handler} className="lg:w-26 flex items-center justify-end ">
      <h4 className="hidden text-content-color font-bold font-Helvetica leading-10 text-lg lg:block">
        {text}
      </h4>
      <span className="text-content-color">{svg}</span>
    </div>
  );
}

export default Hamburger;
