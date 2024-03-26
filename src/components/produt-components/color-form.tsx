import { FC } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import ColorItem from "./colors-item";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/app/hooks";
import { changeColor } from "@/app/features/colorsSlice";
import { Button } from "../ui/button";

interface ColorFormProps {
  colors: string[];
}

const ColorForm: FC<ColorFormProps> = ({ colors }) => {
  const dispatch = useAppDispatch();
  const [selectedColor, setSelectedColor] = useState<string>(
    colors[0] || "white",
  );

  function changeColorHandler(color: string) {
    setSelectedColor(color);
    dispatch(changeColor(color));
    toast.success("Color changed to: " + color);
  }

  return (
    <div className="w-32 space-y-6">
      <Label>Color</Label>
      <div className="flex space-x-6">
        {colors.map((color) => (
          <Button
            variant={"navbar"}
            size={"icon"}
            key={color}
            onClick={() => changeColorHandler(color)}
          >
            <ColorItem value={color} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ColorForm;
