import { useAppSelector } from "@/app/hooks";
import BotLoading from "@/components/bot-loading";
import Animation from "@/components/landing-components/animation";
import Category from "@/components/landing-components/categor";
import Heading from "@/components/landing-components/heading";
import { FC } from "react";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  const loading = useAppSelector((state) => state.loading.isLoading);
  if (loading) {
    return <BotLoading />;
  }
  return (
    <>
      <div className="w-full min-h-[calc(85vh)] lg:container flex justify-center items-center lg:items-start  lg:justify-stretch py-16 gap-7">
        <div className=" md:w-2/3  w-full ">
          <Heading />
        </div>
        <div className="w-1/3 hidden lg:flex ">
          {/* <Animation /> */}
          {/* <Animation isReverse={true} /> */}
          <div className=" w-96 border-primary bg-primary overflow-hidden rounded-full border-2 border-dashed wavy-border flex items-center justify-center animate-spin  ">
            <img
              src="/landing/AI_MakingShirt_bg_remove.png"
              alt="AI_MakingShirt"
              className="w-96 p-5 aspect-square ease-in-out duration-&lsqb;4000&rsqb; repeat-infinite"
            />
          </div>
        </div>
      </div>
      <Category />
    </>
  );
};

export default LandingPage;
