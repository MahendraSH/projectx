import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { siteConfig } from "@/utils/site-config";
import AiPrompt from "./prompt";

interface HeadingProps {}

const Heading: FC<HeadingProps> = ({}) => {
  return (
    <Card className=" bg-grad border-none shadow-none w-full my-0 py-0 flex justify-center items-center flex-col ">
      <CardHeader className="mx-auto ">
        <CardTitle className=" lg:px-8  mx-auto lg:mx-10 text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-primary via-secondary-foreground to-blue-500 ">
          {siteConfig.description}
          <br />
          <span className="underline dark:text-stone-200 text-stone-800 ">
            {siteConfig.name}
          </span>
          <CardDescription className=" mt-3 text-xl text-primary text-pretty font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, aliquam.
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent className=" lg:p-0 m-0 mx-16 lg:w-[60%]  w-full  px-8 ">
        <AiPrompt />
      </CardContent>
    </Card>
  );
};

export default Heading;
