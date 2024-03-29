import { BotIcon, DotIcon } from "lucide-react";
import { FC } from "react";

interface BotLoadingProps {}

const BotLoading: FC<BotLoadingProps> = ({}) => {
  return (
    <div className=" flex justify-center flex-col md:flex-row min-h-screen gap-10  w-full items-center ">
      <div>
        <BotIcon className="w-16 h-16 " />
        <div className=" flex ">
          <DotIcon className="w-4 h-4 animate-ping" />
          <DotIcon className="w-4 h-4 animate-ping" />
          <DotIcon className="w-4 h-4 animate-ping" />
          <DotIcon className="w-4 h-4 animate-ping" />
          <DotIcon className="w-4 h-4 animate-ping" />
        </div>
      </div>
      <div className="w-80">
        <p className="text-xl typed-text ">
          We are Making your Shirt ....
          <span className="cursor">|</span>
        </p>{" "}
      </div>
    </div>
  );
};

export default BotLoading;
