import React from "react";
import { Input } from "@/components/ui/input";

const TextInput = ({ onChange, value, placeholder }) => {
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
