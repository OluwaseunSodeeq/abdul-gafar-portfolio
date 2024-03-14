import "../styles.css";

import React from "react";

function Loader() {
  return (
    // <div className="spinnerFullpage">
    <div className="spinnerContainer">
      <div className="spinner"></div>
      {/* </div> */}
    </div>
  );
}

export default Loader;

//Pulsate
// function Loader() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="loader-container">
//         <div className="loader-circle"></div>
//       </div>
//     </div>
//   );
// }

// export default Loader;

// function Loader() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className=" rounded-full border-8 border-t-8 border-plain-white h-24 w-24">
//         <div className="spin ease-linear border-unactive-color w-12"></div>
//       </div>
//     </div>
//   );
// }

// export default Loader;
