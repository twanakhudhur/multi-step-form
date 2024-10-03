import { cn } from "@/utils/cn";
import AnimatedDiv from "@/components/AnimatedDiv";
import Tick from "../Tick";
import { motion } from "framer-motion";

export default function ProgressBar({ step }: { step: number }) {
  return (
    <AnimatedDiv
      direction={1}
      className="flex select-none items-center justify-between gap-1 md:gap-4 border-b-2 border-gray-200 px-5 pb-6"
    >
      <StepCircle step={1} isCurrent={true} passed={step + 1 > 1} />

      <StepBar fill={step + 1 >= 2} />
      <StepCircle step={2} isCurrent={step + 1 == 2} passed={step + 1 > 2} />

      <StepBar fill={step + 1 >= 3} />
      <StepCircle step={3} isCurrent={step + 1 == 3} passed={step + 1 > 3} />
    </AnimatedDiv>
  );
}

function StepCircle({
  step,
  isCurrent,
  passed,
}: {
  step: number;
  isCurrent: boolean;
  passed: boolean;
}) {
  return (
    <div className="relative size-[34px] shrink-0  overflow-hidden rounded-full">
      <span className="absolute flex h-full w-full items-center justify-center bg-gray-200">
        {step}
      </span>
      <span
        className={cn(
          "absolute flex font-semibold h-full w-full items-center justify-center bg-primary text-white delay-150 duration-150",
          isCurrent || passed
            ? "clip-path-inset-[0_0_0_0]"
            : "clip-path-inset-[0_100%_0_0] delay-0"
        )}
      >
        {passed ? (
          <Tick />
        ) : isCurrent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {step}
          </motion.div>
        ) : (
          ""
        )}
      </span>
    </div>
  );
}

function StepBar({ fill }: { fill: boolean }) {
  return (
    <div
      className={cn(
        "relative  h-[6px] w-full overflow-hidden rounded-[50px] bg-gray-200 ",
        "before:absolute before:-left-full before:h-[6px] before:w-full before:bg-primary before:duration-200 before:content-['']",
        fill ? "before:left-0 " : "before:delay-150"
      )}
    ></div>
  );
}
