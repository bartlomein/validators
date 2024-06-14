import React from "react";
import { Input } from "@/components/ui/input";

type TextInputP = {
  onChange: (s: string) => void;
  placeholder?: string;
};

const TextInput = ({ onChange, placeholder }: TextInputP) => {
  return (
    <div>
      <Input
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
