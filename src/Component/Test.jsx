import Skills from "../Component/SKills";

function Test() {
  let investmentData, onClose, formattedTenure;
  function roundAmount(asd) {
    console.log("Hello!", asd);
  }
  function getStatusStyle(asd) {
    console.log("Hello!", asd);
  }
  const numberOfCircles = 12;
  const arrayOfCircles = Array.from(
    { length: numberOfCircles },
    (_, eachCircle) => (
      <span
        key={eachCircle}
        className="w-[16px] h-[16px] md:w-[27px] md:h-[27px]  rounded-full bg-black border border-transparent"
      ></span>
    )
  );
  return (
    <div>
      <Skills />
      <div className="w-[300px] md:w-[500px] md:max-w-[520px] relative px-5 z-20 mx-auto">
        <div className="bg-black w-full relative rounded-2xl shadow-lg pb-6 pt-10 px-6 h-auto  z-50 m-2 border-2 border-none">
          <div className="relative w-full ">
            <div className="w-full absolute top-[-12px] md:top-[-17px] flex justify-center items-center gap-x-[2px] md:gap-x-1 border-3 border-red-500 px-3">
              {arrayOfCircles}
            </div>
          </div>

          <div className="w-full bg-white rounded-b-lg border">
            <div className="flex justify-center items-center pt-10 md:pt-20 pb-5">
              <h2 className="text-xl font-semibold text-center">
                Maturity Receipt
              </h2>
            </div>
            <div className="w-full border border-1 border-gray-200 mb-3"></div>
            <div className="flex justify-between items-center py-3">
              <p className="text-base font-medium leading-6">Maturity Date</p>
              <p className="text-base font-medium leading-6">
                {" "}
                {new Date(investmentData?.maturityDate).toLocaleString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </p>
            </div>

            <div className="w-full border border-1 border-gray-200 my-3"></div>

            <div className="flex justify-between items-center py-3">
              <p className="text-base font-medium leading-6">Principal</p>
              <p className="text-base font-medium leading-6">
                ${roundAmount(investmentData?.initialAmount?.$numberDecimal)}
              </p>
            </div>

            <div className="flex justify-between items-center py-3">
              <p className="text-base font-medium leading-6">Interest Rate</p>
              <p className="text-base font-medium leading-6">
                {investmentData?.roi}%
              </p>
            </div>

            <div className="flex justify-between items-center py-3">
              <p className="text-base font-medium leading-6">Fee</p>
              <p className="text-base font-medium leading-6">$0.00</p>
            </div>

            <div className="w-full border border-1 border-gray-200 my-3"></div>

            <div className="flex justify-between items-center py-3">
              <p className="text-base font-medium leading-6">Status</p>
              <span
                className={`inline-block px-4 py-0.5 font-medium rounded-full ${getStatusStyle(
                  investmentData?.status
                )}`}
              >
                {investmentData?.status}
              </span>
            </div>

            <div className="flex justify-between items-center py-3">
              <p className="text-base font-medium leading-6">Tenur</p>
              <p className="text-base font-medium leading-6">
                {formattedTenure}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mb-6 md:mb-12">
          <button
            onClick={onClose}
            className="w-full border border-gray-800 rounded-lg px-4 py-2"
          >
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
