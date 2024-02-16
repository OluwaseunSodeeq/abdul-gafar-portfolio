// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//   const {
//     carouselState: { currentSlide },
//   } = rest;
//   return (
//     <div className="absolute">
//       <ButtonOne
//         className={currentSlide === 0 ? "disable" : ""}
//         onClick={() => previous()}
//       />
//       <ButtonTwo onClick={() => next()} />
//       <ButtonThree onClick={() => goToSlide(currentSlide + 1)}>
//         Go to any slide
//       </ButtonThree>
//     </div>
//   );
// };
// CustomDot component to highlight current slide
const CustomDot = ({ currentSlide, onClick, index, className }) => (
  <button
    className={`inline-block w-4 h-4 mr-2 rounded-full ${
      currentSlide === index ? "bg-blue-500" : "bg-gray-300"
    }`}
    onClick={(e) => {
      onClick();
    }}
  />
);
// export default ButtonGroup;
export default CustomDot;
