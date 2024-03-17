import Animation from "@/components/landing-components/animation";
import Category from "@/components/landing-components/categor";
import Heading from "@/components/landing-components/heading";
import { FC } from "react";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  return (
    <>
      <div className="w-full min-h-[calc(85vh)] flex justify-center items-center lg:items-start  lg:justify-stretch py-16 gap-7">
        <div className=" md:w-2/3  w-full ">
          <Heading />
        </div>
        <div className="w-1/3 hidden lg:flex ">
          <Animation />
          <Animation isReverse={true} />
        </div>
      </div>
      <Category />
    </>
  );
};

export default LandingPage;
