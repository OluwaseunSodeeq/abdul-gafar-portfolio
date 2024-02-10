function Container({ children }) {
  return (
    <div className="w-full lg:max-w-[1440px] lg:w-full mx-auto lg:overflow-x-hidden py-6 px-4 md:py-6 md:px-12 lg:py-6 lg:px-16 ">
      {children}
    </div>
  );
}

export default Container;
