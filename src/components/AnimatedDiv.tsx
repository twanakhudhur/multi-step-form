import { motion, Variants } from "framer-motion";
import { ComponentProps } from "react";

type PropsT = {
  children: React.ReactNode;
  direction: number;
} & ComponentProps<"div">;

export default function AnimatedDiv({
  children,
  className,
  direction,
}: PropsT) {
  const anim = (variants: Variants, custom: number) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const nextStep: Variants = {
    initial: (direction) => ({
      x: `${100 * direction}%`,
    }),

    enter: {
      scale: 1,
      x: "0%",
      transition: {
        duration: 0.15,
      },
    },

    exit: (direction) => ({
      x: `${-100 * direction}%`,
      transition: {
        duration: 0.15,
      },
    }),
  };

  return (
    <motion.div {...anim(nextStep, direction)} className={className}>
      {children}
    </motion.div>
  );
}
