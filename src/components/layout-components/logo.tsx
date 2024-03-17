import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/utils/site-config";
import { Box } from "lucide-react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link to={"/"}>
      <Button variant={"navbar"} className=" text-xl font-semibold ml-0 pl-0">
        <Box className=" w-6 h-6 mr-3 " /> {siteConfig.name}
      </Button>
    </Link>
  );
};

export default Logo;
