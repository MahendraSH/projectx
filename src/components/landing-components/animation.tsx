import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { FC } from "react";

interface AnimationProps {
  isReverse?: boolean;
}

const Animation: FC<AnimationProps> = ({ isReverse = false }) => {
  const autoplayRef = React.useRef(
    AutoScroll({
      direction: isReverse ? "backward" : "forward",
      startDelay: 2000,
      speed: 2,
    })
  );

  return (
    <Carousel
      orientation="vertical"
      plugins={[autoplayRef.current]}
      className=" "
      opts={{
        align: "start",
        loop: true,
      }}
    >
      {" "}
      <CarouselContent className=" max-h-[80vh]   ">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card className=" h-full w-full min-w-44 aspect-[9/14] ">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Animation;
