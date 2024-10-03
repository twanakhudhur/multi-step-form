import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
  { variant, className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
});
export default Button;

const buttonVariants = cva(
  "border px-3 py-2 rounded-md border-primary transition-colors active:scale-[98%] ",
  {
    variants: {
      variant: {
        primary: `bg-primary text-white hover:bg-opacity-90`,
        secondary:
          "text-primary bg-transparent hover:bg-gray-100 hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
