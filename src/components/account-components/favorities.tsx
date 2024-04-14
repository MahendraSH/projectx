import { FC } from "react";
import {
  useGetSessionDataQuery,
  Favourite,
} from "@/app/features/sessionApiSlice";
import { useAppSelector } from "@/app/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import ImageCard from "@/components/produt-components/image-card"; // Import ImageCard component
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { MagicWandIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

interface FavoritesProps {}

const Favorites: FC<FavoritesProps> = () => {
  const user = useAppSelector((state) => state.user.idToken);
  const { data, isLoading } = useGetSessionDataQuery({ token: user });

  return (
    <div className=" w-full md:container">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {isLoading ? (
        <div className=" w-full flex flex-col gap-y-8 md:container lg:px-10">
          <Skeleton className="  w-full h-56" />
          <Skeleton className="  w-full h-56" />
          <Skeleton className="  w-full h-56" />
          <Skeleton className="  w-full h-56" />
        </div>
      ) : (
        <div className=" flex flex-col gap-y-8 md:container lg:px-10">
          {data &&
            Object.values(data.favourites).map((fav: Favourite) => (
              <Link to={`/product/${fav.productId}`}>
                <Card key={fav.productId} className=" py-4">
                  <CardContent className="flex flex-col md:flex-row flex-wrap  gap-6 justify-start items-start ">
                    {/* Use ImageCard component */}
                    <div className="max-w-80 h-full">
                      <ImageCard
                        image={{
                          imageUrl: fav.product.image.imageUrl,
                          alt: fav.product.title,
                        }}
                        isCard={true}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold flex gap-x-8 ">
                        {fav.product.title}{" "}
                        <HeartIcon className="w-6 h-6 text-red-500" />
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-lg">
                        {fav.product.description}
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
                    </CardContent>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
