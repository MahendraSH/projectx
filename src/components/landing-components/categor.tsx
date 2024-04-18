import { FC, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ImageCategory from "./images-category";
import { useGetActiveCollectionsQuery } from "@/app/features/collectionsApiSlice";
import { Loader2 } from "lucide-react";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  const { data, isLoading, isError, isSuccess } =
    useGetActiveCollectionsQuery();
  const shopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#shop" && shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <Card className=" w-full p-2 flex flex-col justify-start items-start bggrad rounded-md border-none shadow-none">
      <div id="shop" ref={shopRef}>
        {" "}
      </div>
      <CardHeader>
        <CardTitle className="text-2xl"> Shop Colllections </CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-col flex-1 justify-center items-center gap-y-5 w-full">
        {(isLoading || isError) && (
          <div className=" w-full flex justify-center items-center min-h-screen">
            <Loader2 className=" size-10 animate-spin" />
          </div>
        )}
        {isSuccess &&
          data.map((item, index) => (
            <div
              className="flex flex-col justify-start items-start mr-auto "
              key={index}
            >
              <CardHeader>
                <CardTitle>{item.name} </CardTitle>
                <CardDescription> {item.description}</CardDescription>
              </CardHeader>
              <div className=" xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm max-w-[300px] ">
                <ImageCategory products={item.products} />
              </div>
            </div>
          ))}
      </CardContent>
    </Card>
  );
};

export default Category;
