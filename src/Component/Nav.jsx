// import Container from "./Container";

function Nav() {
  return (
    // <Container>
    <div className=" w-full mx-auto  bg-user-color absolute z-30 ">
      <ul className=" h-[90vh] flex lg:h-auto flex-col justify-center items-center -mt-[20px]  pb-10 ">
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color  ">
          Projects
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color  ">
          Resume
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color  ">
          About me
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color  ">
          Contact
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color  ">
          Dribble
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color ">
          Instagram
        </li>
        <li className="font-bold font-Helvetica text-[32px] leading-[48px] text-unactive-color ">
          Behance
        </li>
      </ul>
    </div>
    // </Container>
  );
}

export default Nav;
