function Loader() {
  return (
    // Rotate Loader
    <div className="h-screen flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-transparent">
        <div className="w-full h-full border-4 border-dashed rounded-full border-content-color animate-spin duration-5s linear delay-100"></div>
      </div>
    </div>
  );
}

export default Loader;
