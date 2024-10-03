import { ComponentProps, forwardRef } from "react";

type RadioProps = { label: string } & ComponentProps<"input">;

const Radio = forwardRef<HTMLInputElement, RadioProps>(function (
  { label, id, ...props },
  ref
) {
  return (
    <div className="text-sm">
      <label
        className="flex py-2.5 cursor-pointer select-none items-center gap-4 rounded-[10px] border-2 border-gray-200 px-4 font-medium  hover:bg-gray-100 active:bg-gray-100 has-[:checked]:border-primary"
        htmlFor={id}
      >
        <input
          type="radio"
          value={label}
          id={id}
          className="absolute appearance-none"
          ref={ref}
          {...props}
        />
        <span>{label}</span>
      </label>
    </div>
  );
});

export default Radio;
