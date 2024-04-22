import { siteConfig } from "@/utils/site-config";

import { motion } from "framer-motion";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Spotlight } from "../ui/Spotlight";
import AiPrompt from "./prompt";
interface HeadingProps {}

const Heading: FC<HeadingProps> = ({}) => {
  return (
    <Card className=" bg-grad border-none shadow-none w-full my-0 py-0 flex justify-center items-center flex-col ">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <CardHeader className="mx-auto p-0 m-0 ">
        <CardTitle className=" lg:px-8  mx-auto lg:mx-10 text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-primary via-secondary-foreground to-blue-500 ">
          {siteConfig.description}
          <br />
          <div className=" underline underline-offset-4 lg:no-underline relative dark:text-stone-200 text-stone-800 ">
            <motion.div
              initial={{ width: "20rem" }}
              whileInView={{ width: "35rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className=" absolute hidden lg:flex  bottom-0 z-50 h-0.5 translate-y-2  bg-primary "
            ></motion.div>
            {siteConfig.name}
          </div>
          <div className=" mt-3 text-xl text-primary text-pretty font-normal pt-5">
            {siteConfig.subtitle}
          </div>
        </CardTitle>
        <CardContent className=" lg:p-0 m-0 lg:mx-16 lg:w-[60%]  w-full  px-8 ">
          <AiPrompt />
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default Heading;
