import { useGetProductByIdQuery } from "@/app/features/productApiSlice";
import {
  useAddToCartMutation,
  useAddToFavouritesMutation,
} from "@/app/features/sessionApiSlice";
import { useAppSelector } from "@/app/hooks";
import ColorForm from "@/components/produt-components/color-form";
import ImageCard from "@/components/produt-components/image-card";
import ProductQuantity from "@/components/produt-components/product-quantity";
import ProductSize from "@/components/produt-components/product-size";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { MagicWandIcon } from "@radix-ui/react-icons";
import {
  HeartIcon,
  ShoppingCart,
  ShoppingCartIcon,
  ZoomIn,
} from "lucide-react";
import { FC } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

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
      <div className=" w-full  py-10 p-1 bggrid    lg:container   prose *:text-foreground prose-headings:text-foreground prose-strong:text-foreground min-w-full ">
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
                <Card className="w-full min-h-full lg:px-8 p-1 py-10  m-0 hidden md:flex flex-col lg:flex-row  justify-between items-start ">
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
                          imageUrl: data.images[0].imageUrl,
                          alt: data.title,
                        }}
                        // isAllOver={true}
                        color={colorValue || "shirt-1.jpg"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full  md:container">
                    <div className=" flex  flex-row flex-wrap gap-6">
                      <Card className=" p-2 rounded-sm flex-1 gap-y-5 border-none shadow-none">
                        <Label className=" text-3xl font-semibold text-pretty">
                          {" "}
                          {data.title}{" "}
                        </Label>
                        <CardDescription className=" text-xl  text-primary">
                          {" "}
                          ₹ {data.price}{" "}
                        </CardDescription>
                      </Card>
                      <Card className=" pb-2 rounded-sm flex-1 gap-y-5 border-none shadow-none">
                        <table className="table-auto  ">
                          <tbody>
                            <tr className="border-none">
                              <td>
                                {" "}
                                <Label> Gender </Label>
                              </td>
                              <td>{data.gender}</td>
                            </tr>
                            <tr className="border-none">
                              <td>
                                {" "}
                                <Label> Category </Label>
                              </td>
                              <td>{data.category}</td>
                            </tr>
                            <tr className="border-none">
                              <td>
                                {" "}
                                <Label> Prompt </Label>
                              </td>
                              <td>{data.prompt}</td>
                            </tr>
                          </tbody>
                        </table>
                      </Card>
                    </div>
                    <div className=" flex  flex-row gap-6 w-full ">
                      <Card className=" p-2 rounded-sm flex flex-col space-y-5  w-full border-none shadow-none">
                        <Label className=" "> Prompt</Label>
                        <Textarea value={data.prompt} className="resize-none" />
                        <tr className="border-none space-y-5">
                          <td>
                            <ProductQuantity />
                          </td>
                        </tr>
                      </Card>
                      <Card className=" p-2 rounded-sm flex flex-col space-y-5 w-full  border-none shadow-none">
                        <table className="table-auto  space-y-8   ">
                          <tr className="border-none">
                            <td>
                              <ColorForm colors={colors} />
                            </td>
                          </tr>

                          <tr className="border-none">
                            <td>
                              <ProductSize />
                            </td>
                          </tr>
                        </table>
                      </Card>
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
                      image={{
                        imageUrl: data.images[0].imageUrl,
                        alt: data.title,
                      }}
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
                      <table className="table-auto flex-1  ">
                        <tbody>
                          <tr className="border-none">
                            <td>
                              {" "}
                              <Label> Gender </Label>
                            </td>
                            <td>{data.gender}</td>
                          </tr>
                          <tr className="border-none">
                            <td>
                              {" "}
                              <Label> Category </Label>
                            </td>
                            <td>{data.category}</td>
                          </tr>
                        </tbody>
                      </table>
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
