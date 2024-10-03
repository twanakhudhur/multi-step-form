import { FormProvider, useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "@components/formElements";
import {
  ProgressBar,
  StepFour,
  StepThree,
  StepOne,
  StepTwo,
} from "@components/formSteps";
import formSchema, { FormInputsT } from "@/formSchema";
import AnimatedDiv from "@/components/AnimatedDiv";
import Title from "./components/Title";

function useStep(initialStep = 0) {
  const [step, setStep] = useState(initialStep);
  const [direction, setDirection] = useState(1);

  const nextStep = () => {
    setDirection(1);
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  return { step, direction, nextStep, prevStep };
}

const validateCurrentStep = async (step: number, trigger: any) => {
  switch (step) {
    case 0:
      return await trigger(["email", "fullName", "phoneNumber"]);
    case 1:
      return await trigger(["salary"]);
    default:
      return false;
  }
};

function App() {
  const { step, direction, nextStep, prevStep } = useStep();
  const [loading, setLoading] = useState(false);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const methods = useForm<FormInputsT>({ resolver: zodResolver(formSchema) });
  const { handleSubmit, trigger } = methods;

  const nextStepsHandler = async () => {
    const goNext = await validateCurrentStep(step, trigger);
    if (goNext) nextStep();
  };

  const onSubmit = (data: FormInputsT) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      nextStep();
    }, 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <StepOne direction={direction} key="one" nextBtnRef={nextBtnRef} />
        );
      case 1:
        return <StepTwo direction={direction} key="two" />;
      case 2:
        return <StepThree direction={direction} key="three" />;
      case 3:
        return <StepFour key="four" />;
      default:
        return null;
    }
  };

  const renderButtons = () => (
    <AnimatedDiv
      key="buttons"
      direction={1}
      className="flex flex-row-reverse justify-between border-t-2 border-gray-200 pt-4"
    >
      {step < 2 && (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            type="button"
            onClick={nextStepsHandler}
            ref={nextBtnRef}
            variant="primary"
          >
            Next Step
          </Button>
        </motion.div>
      )}
      {step === 2 && (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className={`${loading ? "bg-opacity-50 hover:bg-opacity-50" : ""}`}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </motion.div>
      )}
      {step !== 0 && (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button type="button" onClick={prevStep} variant="secondary">
            Go Back
          </Button>
        </motion.div>
      )}
    </AnimatedDiv>
  );

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-5 bg-[url('./assets/main-bg.png')] bg-contain bg-no-repeat  md:bg-cover bg-center">
      <div className="w-full  max-w-[640px]">
        <Title />
        <div className="w-full overflow-hidden rounded-2xl p-3 shadow-custom xs:p-5 md:p-8 backdrop-blur-md bg-white/30">
          <AnimatePresence custom={1} mode="wait">
            {step !== 3 ? <ProgressBar step={step} /> : null}
          </AnimatePresence>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="py-6">
                <AnimatePresence custom={direction} mode="wait">
                  {renderStep()}
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                {step !== 3 && renderButtons()}
              </AnimatePresence>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
}

export default App;
