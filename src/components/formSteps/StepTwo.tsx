import { Radio } from "@components/formElements";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { FormInputsT } from "@/formSchema";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function StepTwo({ direction }: { direction: number }) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputsT>();

  return (
    <AnimatedDiv direction={direction}>
      <h2 className="mb-2 text-xl font-medium">Salary</h2>
      <div className="grid gap-x-10 gap-y-4 md:grid-cols-2 ">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Radio id="0-1.000" label="0 - 1.000" {...register("salary")} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Radio
            id="1.000-2.000"
            label="1.000 - 2.000"
            {...register("salary")}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Radio
            id="2.000-3.000"
            label="2.000 - 3.000"
            {...register("salary")}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Radio
            id="3.000-4.000"
            label="3.000 - 4.000"
            {...register("salary")}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Radio
            id="Mehrals4.000"
            label="Mehr als 4.000"
            {...register("salary")}
          />
        </motion.div>
      </div>
      {errors.salary?.type === "invalid_type" ? (
        <p className="text-xs text-center mt-3 text-red-500">
          Select salary range to continue.
        </p>
      ) : null}
    </AnimatedDiv>
  );
}
