function FooterTopCard({ each }) {
  return (
    <div>
      <div className="px-4">
        <h4 className="font-bold text-lg leading-8 font-Helvetica text-second-logo-color tracking-widest">
          {each.heading}
        </h4>
        <div className="mt-2">
          {each.text.map((each, i) => (
            <p
              key={i}
              className="text-base leading-6 font-Helvetica font-normal text-second-logo-color mt-1 tracking-widest lg:max-w-[550px]"
            >
              {each}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterTopCard;
