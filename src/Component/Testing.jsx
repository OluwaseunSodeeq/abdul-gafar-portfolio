import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const WordsAnimation = () => {
  const words = [
    "Abdul-Gafar Jimoh",
    "User Experience",
    "User Interface",
    "Product Designer",
  ];
  const [index, setIndex] = useState(0);

  const transitions = useTransition(words[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    // leave: { opacity: 0 },
    config: { duration: 2000 }, // Adjust duration for slower transition
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000); // Adjust delay between word changes
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div>
      {transitions((style, word) => (
        <animated.span style={style}>{word}</animated.span>
      ))}
    </div>
  );
};

export default WordsAnimation;
