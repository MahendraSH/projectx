import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/utils/site-config";
import { Box, BoxIcon } from "lucide-react";

interface LogoProps {
  isFooter?: boolean;
}

const Logo: FC<LogoProps> = ({ isFooter = false }) => {
  return (
    <>
      {!isFooter ? (
        <Link to={"/"}>
          <Button variant={"navbar"} className=" text-xl font-semibold ">
            <BoxIcon className="size- mr-2" />
            {siteConfig.name}
          </Button>
        </Link>
      ) : (
        <div className=" flex gap-x-5 justify-center items-center">
          <BoxIcon className=" size-10 " />{" "}
          <span className=" text-3xl font-semibold"> {siteConfig.name} </span>
        </div>
      )}
    </>
  );
};

export default Logo;
