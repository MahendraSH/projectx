import { useGetProductByIdQuery } from "@/app/features/productApiSlice";
import { useAppSelector } from "@/app/hooks";
import ColorForm from "@/components/produt-components/color-form";
import ImageCard from "@/components/produt-components/image-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MagicWandIcon } from "@radix-ui/react-icons";
import { ShoppingCartIcon } from "lucide-react";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface ProductByIdPageProps {}

const colors = [
  "white",
  "black",
  "blue",
  "green",
  "yellow",
  "red",
  "pink",
  "grey",
  "darkblue",
  "darkgreen",
];
const ProductByIdPage: FC<ProductByIdPageProps> = ({}) => {
  const colorValue = useAppSelector((state) => state.color.value);
  const params = useParams();
  const { id } = params;

  if (id) {
    const { data, isLoading, isSuccess } = useGetProductByIdQuery({
      productId: id,
    });

    return (
      <div className=" w-full lg:p-16 md:p-6  p-1 bggrid    prose *:text-foreground prose-headings:text-foreground prose-strong:text-foreground min-w-full ">
        {isLoading ? (
          <div>
            {" "}
            <Skeleton className=" w-full p-8 h-96 flex justify-center gap-x-5">
              <Skeleton className="w-48 aspect-square"> </Skeleton>
              <Skeleton className="w-full h-full"> </Skeleton>
            </Skeleton>{" "}
          </div>
        ) : (
          <>
            {isSuccess && (
              <>
                <Card className="w-full min-h-96 md:p-8 p-1  m-0 md:flex lg:flex-row hidden  flex-col lg:justify-stretch lg:items-start justify-start items-center  lg:gap-x-16 gap-y-8 ">
                  <div className="flex-1 items-center justify-center">
                    <ImageCard
                      image={{ imageUrl: data.image.imageUrl, alt: data.title }}
                      // isAllOver={true}
                      color={colorValue}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="w-full h-full flex md:flex-row flex-col md:justify-stretch justify-start md:items-baseline items-center gap-x-4 ">
                      <div className=" flex-1 p-0 m-0 ">
                        <h4 className="text-4xl"> {data.title}</h4>
                        <CardDescription className="text-2xl text-primary">
                          ₹ {data.price}
                        </CardDescription>
                      </div>
                      <CardContent className=" flex-1 p-0   ">
                        <div className="flex justify-start gap-x-8 items-center">
                          <label> Material </label>
                          <CardDescription> 100% Cotton </CardDescription>
                        </div>
                        <ColorForm colors={colors} />
                      </CardContent>
                      <CardContent className="p-0 flex-1 ">
                        <div className="flex justify-start gap-x-8 items-center">
                          <label> Gender </label>
                          <CardDescription> {data.gender} </CardDescription>
                        </div>
                        <div className="flex justify-start gap-x-8 items-center">
                          <label> Category </label>
                          <CardDescription> {data.category} </CardDescription>
                        </div>
                        <div className="flex justify-start gap-x-8 items-center">
                          <label> Prompt </label>
                          <CardDescription> {data.prompt} </CardDescription>
                        </div>
                      </CardContent>
                    </div>
                    <div className="w-full h-full flex md:flex-row flex-col md:justify-stretch justify-center md:items-baseline items-center gap-x-4 ">
                      <CardContent className=" flex-1 p-0 justify-center items-center   ">
                        <label> Description </label>
                        <CardDescription>
                          {" "}
                          {data.description} Lorem ipsum dolor sit amet, qui
                          minim labore adipisicing minim sint cillum sint
                          consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                          minim labore adipisicing minim sint cillum sint
                          consectetur cupidatat.
                        </CardDescription>
                      </CardContent>
                      <CardContent className="p-0  flex-1 justify-center items-center  space-y-8  mt-5">
                        <Button
                          variant={"primaryGradient"}
                          size={"lg"}
                          className=" w-full "
                        >
                          <MagicWandIcon className="w-6 h-6 mr-5 " /> Buy Now{" "}
                        </Button>
                        <Button
                          variant={"outline"}
                          size={"lg"}
                          className="w-full "
                        >
                          <ShoppingCartIcon className=" w-6 h-6 mr-5 " />
                          Add To Cart
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
                <div className="md:hidden grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                  <div className="aspect-w-3 aspect-h-4">
                    <ImageCard
                      image={{ imageUrl: data.image.imageUrl, alt: data.title }}
                      // isAllOver={
                      //   data.image.metaData.printType === "ALL_OVER_PRINT"
                      // }
                      color={colorValue}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="text-4xl mb-2">{data.title}</h4>
                      <p className="text-2xl text-primary mb-4">
                        ₹ {data.price}
                      </p>
                      <div className="flex items-center mb-4">
                        <label className="mr-2">Material:</label>
                        <p>100% Cotton</p>
                      </div>
                      <div className="mb-4">
                        <ColorForm colors={colors} />
                      </div>
                      <div className="flex items-center mb-4">
                        <label className="mr-2">Gender:</label>
                        <p>{data.gender}</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <label className="mr-2">Category:</label>
                        <p>{data.category}</p>
                      </div>
                      <div className="flex items-center mb-8">
                        <label className="mr-2">Prompt:</label>
                        <p>{data.prompt}</p>
                      </div>
                      <p className="mb-8">
                        {data.description} Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Illo odio quis reiciendis
                        autem doloremque quasi voluptatibus incidunt corporis
                        consectetur id?
                      </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:justify-between">
                      <Button
                        variant="primaryGradient"
                        size="lg"
                        className="w-full md:w-auto mb-4 md:mb-0"
                      >
                        <MagicWandIcon className="w-6 h-6 mr-2" /> Buy Now
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full md:w-auto"
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default ProductByIdPage;
