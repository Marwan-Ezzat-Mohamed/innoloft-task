"use client";

import React from "react";
import { Button } from "@/components/common/Button";
import Input from "@/components/common/Input";
import {
  useFieldArray,
  UseFormRegister,
  FieldValues,
  Path,
  Control,
  ArrayPath,
  FieldArray,
} from "react-hook-form";
import TrashIcon from "@/icons/Trash";

interface MultiInputFieldProps<T extends FieldValues> {
  name: ArrayPath<T>;
  label: string;
  icon: React.ReactNode;
  register: UseFormRegister<T>;
  control: Control<T>;
}

export default function MultiValueField<T extends FieldValues>({
  name,
  label,
  icon,
  register,
  control,
}: MultiInputFieldProps<T>) {
  const { fields, append, remove } = useFieldArray<T>({
    name,
    control,
  });

  return (
    <div className="text-cadet-grey flex flex-grow flex-col items-start gap-2.5">
      <div className="flex gap-1 text-slate-gray">
        <div className="h-6 w-6">{icon}</div>
        <label>{label}</label>
      </div>

      <div className="flex flex-grow flex-col gap-2.5">
        <div className="flex flex-wrap gap-2.5">
          {fields.map((field, index) => (
            <div key={field.id} className="flex  items-center gap-1">
              <Input {...register(`${name}.${index}.name` as Path<T>)} />

              <Button
                type="button"
                variant="secondary"
                onClick={() => remove(index)}
                className="p-0 text-red-600"
              >
                <TrashIcon width={25} height={"auto"} fill="red" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={() =>
          append({ id: fields.length + 1, name: "" } as FieldArray<
            T,
            ArrayPath<T>
          >)
        }
        type="button"
      >
        Add
      </Button>
    </div>
  );
}
