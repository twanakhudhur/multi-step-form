import { FormInputsT } from "@/formSchema";
import AnimatedDiv from "@/components/AnimatedDiv";
import { useFormContext } from "react-hook-form";

export default function StepThree({ direction }: { direction: number }) {
  const { getValues } = useFormContext<FormInputsT>();
  const allValues = getValues();
  return (
    <AnimatedDiv direction={direction}>
      <h2 className="mb-2 text-xl font-medium">Review and Confirm</h2>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3 ">
        <ReviewCard title="Full Name" details={allValues.fullName} />
        <ReviewCard title="Email Address" details={allValues.email} />
        <ReviewCard title="Phone Number" details={allValues.phoneNumber} />
        <ReviewCard title="Salary" details={allValues.salary} />
      </div>
    </AnimatedDiv>
  );
}

function ReviewCard({
  title,
  details,
  children,
}: {
  title: string;
  details?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center gap-1 text-xs">
      <div className="text-gray-600">{title}</div>
      {details ? <div className="font-medium">{details}</div> : null}
      {children ? children : null}
    </div>
  );
}
