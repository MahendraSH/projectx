import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface PageNotFoundProps {}

const PageNotFound: FC<PageNotFoundProps> = ({}) => {
  return (
    <div className=" w-full h-screen flex justify-center items-center ">
      <Link to={"/"}>
        <Button variant={"secondary"} size={"lg"} className=" text-xl">
          <Loader className="animate-spin mr-4 w-7 h-7 " /> Page Not Found
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
