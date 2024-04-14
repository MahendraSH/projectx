import { useGetProductByIdQuery } from "@/app/features/productApiSlice";
import ProductQuantity from "@/components/produt-components/product-quantity";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import ColorForm from "@/components/produt-components/color-form";
import ImageCard from "@/components/produt-components/image-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MagicWandIcon } from "@radix-ui/react-icons";
import { ShoppingCartIcon } from "lucide-react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import ProductSize from "@/components/produt-components/product-size";
import { HeartIcon, ShoppingCart, ZoomIn, ZoomOutIcon } from "lucide-react";
import { stat } from "fs";
import {
  useAddToCartMutation,
  useAddToFavouritesMutation,
} from "@/app/features/sessionApiSlice";
import toast from "react-hot-toast";

interface ProductByIdPageProps {}

const colors = ["shirt-1.jpg", "shirt-2.jpg", "shirt-3.jpg"];
const ProductByIdPage: FC<ProductByIdPageProps> = ({}) => {
  const colorValue = useAppSelector((state) => state.color.value);
  const idToken = useAppSelector((state) => state.user.idToken);
  const sizeValue = useAppSelector((state) => state.size.value);
  const quantityValue = useAppSelector((state) => state.quantity.value);
  const [addToFavourites] = useAddToFavouritesMutation();
  const [addToCart] = useAddToCartMutation();

  const params = useParams();
  const { id } = params;

  if (id) {
    const { data, isLoading, isSuccess } = useGetProductByIdQuery({
      productId: id,
    });

    const onClickFav = async () => {
      await addToFavourites({
        token: idToken,
        req: {
          productId: id,
          quantity: quantityValue,
          productMeta: {
            size: sizeValue,

            gender: String(data?.gender),
          },
        },
      })
        .unwrap()
        .then(() => toast.success(" added fav"))
        .catch((err) => {
          //TODO add 401 auth
          //FIX add 401 auth
          toast.error(err.error || err.message);
        });
    };
    const onClickCart = async () => {
      await addToCart({
        token: idToken,
        req: {
          productId: id,
          quantity: quantityValue,
          productMeta: {
            size: String(sizeValue),
            gender: String(data?.gender),
          },
        },
      })
        .unwrap()
        .then(() => toast.success("added to cart"))
        .catch((err) => toast.error(JSON.stringify(err)));
    };

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
                <Card className="w-full min-h-full md:px-8 p-1  m-0 md:flex lg:flex-row hidden  flex-col lg:justify-start lg:items-center justify-start items-center  lg:gap-x-16 gap-y-8 ">
                  <div className="flex-1 items-center justify-center">
                    <div className=" relative  ">
                      <div className=" absolute top-2  z-50 flex  flex-col right-0  translate-x-5   gap-y-2 ">
                        <Button
                          variant={"secondary"}
                          size={"actions"}
                          onClick={() => onClickFav()}
                        >
                          <HeartIcon className="size-5" />{" "}
                        </Button>
                        <Button
                          variant={"secondary"}
                          size={"actions"}
                          onClick={() => onClickCart()}
                        >
                          <ShoppingCart className="size-5" />{" "}
                        </Button>
                        <Button
                          variant={"secondary"}
                          size={"actions"}
                          onClick={() =>
                            console.log("open max size of Shirt 96 * 96")
                          }
                        >
                          <ZoomIn className=" size-5" />
                        </Button>
                      </div>

                      <ImageCard
                        image={{
                          imageUrl: data.image.imageUrl,
                          alt: data.title,
                        }}
                        // isAllOver={true}
                        color={colorValue || "shirt-1.jpg"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="w-full h-full flex md:flex-row flex-col md:justify-stretch justify-start md:items-baseline items-center gap-x-4 ">
                      <div className=" flex-1 p-0 m-0 ">
                        <h4 className="text-4xl"> {data.title}</h4>
                        <CardDescription className="text-2xl text-primary">
                          ₹ {data.price}
                        </CardDescription>
                      </div>
                      <CardContent className=" flex-1 p-0  space-y-6  ">
                        <div className="flex justify-start gap-x-8 items-center">
                          <label> Material </label>
                          <CardDescription> 100% Cotton </CardDescription>
                        </div>
                        <ColorForm colors={colors} />
                        <ProductQuantity />
                      </CardContent>
                      <CardContent className="p-0 flex-1 ">
                        <div className="flex justify-start gap-x-8 items-center">
                          <label> Gender </label>
                          <CardDescription className="capitalize">
                            {" "}
                            {data.gender}{" "}
                          </CardDescription>
                        </div>
                        <div className="flex justify-start gap-x-8 items-center">
                          <label> Category </label>
                          <CardDescription className="capitalize">
                            {" "}
                            {data.category}{" "}
                          </CardDescription>
                        </div>
                        <div className="flex justify-start gap-x-8 items-center">
                          <label> Prompt </label>
                          <CardDescription> {data.prompt} </CardDescription>
                        </div>
                        <ProductSize />
                      </CardContent>
                    </div>
                    <div className="w-full h-full flex md:flex-row flex-col pt-3  md:justify-stretch justify-center md:items-baseline items-center gap-x-8">
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
                        onClick={() => onClickCart()}
                      >
                        <ShoppingCartIcon className=" w-6 h-6 mr-5 " />
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </Card>
                <div className="md:hidden grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 pb-4">
                  <div className="w-full aspect-h-4 relative">
                    <div className=" absolute top-2 z-50 flex  flex-col right-2 gap-y-2 ">
                      <Button
                        variant={"secondary"}
                        size={"actions"}
                        onClick={() => onClickFav()}
                      >
                        <HeartIcon className="size-5" />{" "}
                      </Button>
                      <Button
                        variant={"secondary"}
                        size={"actions"}
                        onClick={() => onClickCart()}
                      >
                        <ShoppingCart className="size-5" />{" "}
                      </Button>
                      <Button variant={"secondary"} size={"actions"}>
                        <ZoomIn className=" size-5" />
                      </Button>
                    </div>

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
                      <div className=" mb-4">
                        <ProductQuantity />
                      </div>
                      <div className="mb-4">
                        {" "}
                        <ProductSize />{" "}
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
                        onClick={() => onClickCart()}
                      >
                        <ShoppingCartIcon className=" w-6 h-6 mr-5 " />
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
