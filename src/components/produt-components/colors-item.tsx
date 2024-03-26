import { FC } from "react";

interface ColorItemProps {
  value: string;
}

const ColorItem: FC<ColorItemProps> = ({ value }) => {
  const imageUrl = `/images/shirt/${value}`;
  return (
    <>
      <div
        className="w-7 h-7 rounded-full ring-2"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
        }}
      />
    </>
  );
};

export default ColorItem;
