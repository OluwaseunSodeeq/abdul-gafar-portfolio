const footerTopArray = [
  { heading: "ABOUT", text: ["About Jimoh", "Linkdeln", "Behance", "Twitter"] },
  { heading: "WORK", text: ["Ux Design", "Ui Design"] },
  {
    heading: "LET’S CONNECT",
    text: [
      "Im skilled at creating user-friendly UI/UX designs that are both visually appealing and easy to use.im passionate about creating products that not only look great but also provide a seamless user experience. ",
      "Hire me to bring my beautiful and seamless design to your team!",
    ],
  },
];

function FooterTop() {
  return (
    <div className="pb-6 bg-user-color pt-8 px-6">
      <div className="flex justify-between flex-wrap gap-6">
        {footerTopArray.map((each) => (
          //   <div key={each.heading} className="border border-second-logo-text">
          <div key={each.heading} className="px-4">
            <h4 className="font-bold text-lg leading-8 font-Helvetica text-second-logo-color tracking-widest">
              {each.heading}
            </h4>
            <div className="mt-2">
              {each.text.map((each, i) => (
                <p
                  key={i}
                  className="text-base leading-6 font-Helvetica font-normal text-second-logo-color mt-1 tracking-widest"
                >
                  {each}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-between"></div> */}
    </div>
  );
}

export default FooterTop;
