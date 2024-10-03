import AnimatedDiv from "@/components/AnimatedDiv";
import CongratsIcon from "@assets/congrats.svg";
import { motion } from "framer-motion";

export default function StepFour() {
  return (
    <AnimatedDiv
      className="flex flex-col items-center justify-center text-center"
      direction={1}
    >
      <motion.div
        className="box"
        transition={{ delay: 0.1 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <img src={CongratsIcon} alt="" />
      </motion.div>
      <h2 className="mb-7 mt-4 text-2xl font-semibold">Congratulations! 🎉</h2>
    </AnimatedDiv>
  );
}
