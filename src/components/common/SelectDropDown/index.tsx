import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";

type SelectProps = React.ComponentProps<typeof Select>;
interface Props extends SelectProps {
  items: { value: string; label: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
}

export const SelectDropDown = React.forwardRef<HTMLButtonElement, Props>(
  ({ items, value, onChange, placeholder, error, errorMessage }, ref) => {
    return (
      <div className="gap-2.5">
        <Select value={`${value}`} onValueChange={onChange}>
          <SelectTrigger
            ref={ref}
            className={cn("", {
              "ring ring-offset-0 ring-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-100 focus:ring-offset-0":
                error,
            })}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {items.map(({ value: val, label }) => (
              <SelectItem key={JSON.stringify(val)} value={val}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {error && <p className="text-sm text-red-500 mt-2.5">{errorMessage}</p>}
      </div>
    );
  }
);

SelectDropDown.displayName = "SelectDropDown";
