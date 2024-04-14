import { FC } from "react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";

interface InputTextProps {
  text: string | number;
  label: string;
}

const InputText: FC<InputTextProps> = ({ text, label }) => {
  return (
    <div className=" flex items-center mb-4 gap-x-4">
      <Label className=" mr-2"> {label} : </Label>
      <Input value={text} disabled className="w-40" />
    </div>
  );
};

export default InputText;
