// import "../styles.css";
function Loader() {
  return (
    // <div className="h-screen flex items-center justify-center">
    //   <div className="w-24 h-24 rounded-full bg-gray-800">

    //     <div className="w-full h-full rounded-full bg-blue-400 animate-ping" />
    //   </div>
    // </div>
    <div className="h-screen flex items-center justify-center">
      <div className="w-20 h-20 rounded-full bg-content-color">
        <div className="w-full h-full rounded-full bg-content-color animate-ping" />
      </div>
    </div>

    // Rotate Loader
    // <div className="h-screen flex items-center justify-center">
    //   <div className="w-16 h-16 rounded-full bg-transparent">
    //     <div className="w-full h-full border-4 border-dashed rounded-full border-blue-400 animate-spin duration-5s linear delay-100">
    //       {/* <div className="w-full h-full border-4 border-dashed rounded-full border-white animate-spin duration-3s delay-200" /> */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Loader;
