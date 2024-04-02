import { Button } from "@/components/ui/button";
import { DashIcon } from "@radix-ui/react-icons";
import { BotMessageSquareIcon, Loader } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface PageNotFoundProps {}

const PageNotFound: FC<PageNotFoundProps> = ({}) => {
  return (
    <div className=" w-full h-screen flex justify-center items-center ">
      <BotMessageSquareIcon className=" w-12 h-12 " />
      <DashIcon className="w-4 h-4" />
      <DashIcon className="w-4 h-4" />
      <Link to={"/"}>
        <Button variant={"secondary"} size={"lg"} className=" text-xl">
          <Loader className="animate-spin mr-4 w-7 h-7 " /> Page Not Found
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
