import { Product } from "@/app/features/collectionsApiSlice";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FC } from "react";
import { Link } from "react-router-dom";

interface ImageCategoryProps {
  products: Product[];
}

const ImageCategory: FC<ImageCategoryProps> = ({ products }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[95%] mx-auto "
    >
      <CarouselContent>
        {products.map((item, index) => (
          <CarouselItem key={index} className="max-w-fit">
            <div className="p-1">
              <Link to={`/product/${item.productId}`}>
                <Card className="w-48 aspect-square">
                  <img
                    src={item.images[0].imageUrl}
                    alt={item.title}
                    className="w-48 aspect-square"
                  />
                </Card>
              </Link>
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
