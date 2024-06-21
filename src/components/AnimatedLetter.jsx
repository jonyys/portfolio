import { motion } from "framer-motion";

const AnimatedLetter = ({ letter }) => {
  return (
    <motion.span
      whileHover={{
        scale: 1.2,
        rotate: [0, 10, -10, 10, -10, 0],
        transition: {
          type: "spring",
          stiffness: 300,
        },
      }}
      className="inline-block"
    >
      {letter}
    </motion.span>
  );
};

export default AnimatedLetter;
