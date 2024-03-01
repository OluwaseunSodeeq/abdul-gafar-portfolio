import { useState } from "react";

function InputType({ each }) {
  const [input, setInput] = useState("");

  function handler(e) {
    e.preventDefault();
    const inputValue = e.target.value.trim();
    // const minTexts = inputValue.split(/\s+/).length;

    // if (minTexts < 3) return;
    setInput(inputValue);
  }
  return (
    <div className="px-0 py-4  md:w-[280px] lg:max-w-[500px] lg:w-[570px] lg:h-36 ">
      <label
        htmlFor={each.forText}
        className="font-bold font-Helvetica leading-8 text-xl tracking-widest"
      >
        {each.label}
      </label>
      <input
        id={each.forText}
        type={each.inputType}
        value={input}
        onChange={handler}
        className=" bg-transparent border-b border-[#CECFD1] w-full mt-6 pb-1 pt-2 outline-none"
        placeholder={each.placeholdertext}
        style={{
          fontFamily: "Helvetica",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "26px",
          letterSpacing: "0.08em",
          textAlign: "left",
        }}
      />
    </div>
  );
}

export default InputType;
