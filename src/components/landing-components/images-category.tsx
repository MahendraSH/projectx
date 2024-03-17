import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FC } from "react";

interface ImageCategoryProps {}

const ImageCategory: FC<ImageCategoryProps> = ({}) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[95%] mx-auto "
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="max-w-fit">
            <div className="p-1">
              <Card className="w-48 aspect-square">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default ImageCategory;
