import React from "react";
import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { Control, FieldPath } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";

interface CustomInputProps {
  name: FieldPath<z.infer<typeof authFormSchema>>;
  label: string;
  placeholder: string;
  type: string;
  control: Control<z.infer<typeof authFormSchema>>;
}

export const CustomInput: React.FC<CustomInputProps> = ({ name, label, placeholder, type, control }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input id={type} placeholder={placeholder} className="input-class" {...field} type={type}></Input>
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};
