import { ShoppingBagIcon } from "lucide-react";
import { useAppSelector } from "@/app/hooks";
import { HeartIcon } from "lucide-react";
import ImageCard from "@/components/produt-components/image-card"; // Import ImageCard component
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import InputText from "@/components/cart-components/input-text";
import TotalCostCard from "@/components/cart-components/total-cost-card";

const CartPage = () => {
  const data = useAppSelector((state) => state.session);

  return (
    <>
      <div className=" w-full px-2">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        <div className="">
          {!data?.cartEntries && (
            <div className=" w-full flex flex-col gap-y-10 justify-center items-center min-h-screen text-muted-foreground">
              <ShoppingBagIcon className="w-16 h-16 animate-bounce " />

              <h3 className=" text-2xl text-muted-foreground  ">
                {" "}
                The Cart Is Empty
              </h3>
            </div>
          )}
          <div className=" flex flex-col-reverse lg:flex-row-reverse lg:gap-x-4 gap-y-4">
            <div className=" lg:w-1/4 w-full">
              <TotalCostCard
                product={
                  data
                    ? data.cartEntries.entries.map((fav) => ({
                        title: fav.product.title,
                        price: fav.product.price,
                      }))
                    : []
                }
              />
            </div>
            <div className=" flex flex-col gap-y-6 lg:w-3/4 w-full">
              {data &&
                data.cartEntries.entries.map((fav) => (
                  <Card key={fav.productId} className=" py-4">
                    <CardContent className="flex flex-col md:flex-row flex-wrap  gap-6 justify-start items-start ">
                      {/* Use ImageCard component */}
                      <Link to={`/product/${fav.productId}`}>
                        <div className="max-w-80 h-full">
                          <ImageCard
                            image={{
                              imageUrl: fav.product.image.imageUrl,
                              alt: fav.product.title,
                            }}
                            isCard={true}
                          />
                        </div>
                      </Link>
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold flex gap-x-8 ">
                          {fav.product.title}{" "}
                          <HeartIcon className="w-6 h-6 text-red-500" />
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-lg">
                          {" ₹"} {fav.product.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center mb-4">
                          <label className="mr-2">Material:</label>
                          <p>100% Cotton</p>
                        </div>
                        <div className="flex items-center mb-4">
                          <label className="mr-2">Gender:</label>
                          <p>{fav.product.gender}</p>
                        </div>
                        <div className="flex items-center mb-4">
                          <label className="mr-2">Category:</label>
                          <p>{fav.product.category}</p>
                        </div>
                        <CardContent className=" hidden lg:flex">
                          <InputText text={fav.productMeta.size} label="size" />
                          <InputText text={fav.quantity} label="quantity" />
                        </CardContent>
                      </CardContent>
                      <CardContent className=" flex lg:hidden">
                        <InputText text={fav.productMeta.size} label="size" />
                        <InputText text={fav.quantity} label="quantity" />
                      </CardContent>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
