import { useFormContext } from "react-hook-form";
import { Input } from "@components/formElements";
import { FormInputsT } from "@/formSchema";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function StepOne({
  direction,
  nextBtnRef,
}: {
  direction: number;
  nextBtnRef: React.RefObject<HTMLButtonElement>;
}) {
  const {
    register,
    formState: { errors },
    clearErrors,
  } = useFormContext<FormInputsT>();
  const handleChange = (
    field: keyof FormInputsT,
    originalOnChange?: (...args: any) => void
  ) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      clearErrors(field);
      if (originalOnChange) {
        originalOnChange(e);
      }
    };
  };
  return (
    <AnimatedDiv direction={direction}>
      <h2 className="mb-2 text-xl font-medium">Personal Information</h2>
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-2 ">
        <Input
          label="Full Name"
          placeholder="Twana Khudhur"
          id="fullName"
          errorMessage={errors.fullName?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("fullName")}
          onChange={handleChange("fullName", register("fullName").onChange)}
        />
        <Input
          type="email"
          label="Email Address"
          placeholder="name@example.com"
          id="emailAddress"
          errorMessage={errors.email?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("email")}
          onChange={handleChange("email", register("email").onChange)}
        />
        <Input
          type="tel"
          label="Phone Number"
          placeholder="+49 1234567890"
          id="phoneNumber"
          errorMessage={errors.phoneNumber?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("phoneNumber")}
          onChange={handleChange(
            "phoneNumber",
            register("phoneNumber").onChange
          )}
        />
      </div>
    </AnimatedDiv>
  );
}
