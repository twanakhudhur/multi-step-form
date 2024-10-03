import { cn } from "@/utils/cn";
import { ComponentProps, forwardRef } from "react";

type InputProps = {
  label: string;
  errorMessage?: string;
} & ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { label, errorMessage, id, ...props },
  ref
) {
  return (
    <div className="relative flex w-full flex-col gap-1 text-sm">
      <label className="font-medium text-slate-600" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "rounded-[10px] border border-gray-200 px-3 py-2.5 text-base outline-none focus:border-primary",
          errorMessage ? "border-red-500" : ""
        )}
        ref={ref}
        {...props}
      />
      {errorMessage ? (
        <p className="px-3 text-xs text-red-500">{errorMessage}</p>
      ) : null}
    </div>
  );
});
export default Input;
