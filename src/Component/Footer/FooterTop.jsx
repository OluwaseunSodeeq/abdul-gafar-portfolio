import FooterTopCard from "./FooterTopCard";

const footerTopArray = [
  { heading: "ABOUT", text: ["About Jimoh", "Linkdeln", "Behance", "Twitter"] },
  { heading: "WORK", text: ["Ux Design", "Ui Design"] },
];
const connectData = {
  heading: "LET’S CONNECT",
  text: [
    "Im skilled at creating user-friendly UI/UX designs that are both visually appealing and easy to use.im passionate about creating products that not only look great but also provide a seamless user experience. ",
    "Hire me to bring my beautiful and seamless design to your team!",
  ],
};
function FooterTop() {
  return (
    <div className="bg-user-color lg:w-full">
      <div className="pb-6  pt-8 px-6 lg:px-[104px] md:flex gap-6 flex-col lg:py-[72px] lg:w-[1440px] lg:h-auto lg:mx-auto  lg:justify-between lg:flex-row ">
        <div className="flex gap-6 lg:gap-[56px]">
          {footerTopArray.map((each) => (
            //   <div key={each.heading} className="border border-second-logo-text">
            <FooterTopCard each={each} key={each.heading} />
          ))}
        </div>
        <div className="mt-[25px]">
          <FooterTopCard each={connectData} />
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
