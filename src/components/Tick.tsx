import { motion } from "framer-motion";
export default function Tick() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={75}
      height={75}
    >
      <motion.path
        d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
        fill="transparent"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.6,
        }}
      />
    </motion.svg>
  );
}
