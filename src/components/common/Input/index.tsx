import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, errorMessage, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col p-1">
        <div className="relative flex w-full items-center rounded-md">
          <input
            className={cn(
              "w-full rounded-md border border-light-gray px-2.5 py-1  text-base font-semibold text-gunmetal-gray outline-0 placeholder:text-sm placeholder:font-normal placeholder:text-slate-gray",
              error && "border-red-400"
            )}
            {...props}
            ref={ref}
          />
        </div>

        {!!error && (
          <span className="text-sm text-red-400">{errorMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
