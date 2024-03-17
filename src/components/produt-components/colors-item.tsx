import { FC } from "react";
import { Button } from "../ui/button";
import { CircleIcon } from "lucide-react";

interface ColorItemProps {
  value: string;
}

const ColorItem: FC<ColorItemProps> = ({ value }) => {
  return (
    <>
      <Button variant={"outline"} size={"icon"}>
        <CircleIcon className="w-7 h-7 " style={{ fill: value }} />
      </Button>
    </>
  );
};

export default ColorItem;
