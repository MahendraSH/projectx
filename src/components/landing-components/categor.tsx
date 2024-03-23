import { FC, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ImageCategory from "./images-category";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  const shopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#shop" && shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <Card className=" w-full p-2 flex flex-col justify-center items-center bggrad rounded-none">
      <div id="shop" ref={shopRef}>
        {" "}
      </div>
      <CardHeader>
        <CardTitle className="text-2xl"> Shop </CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-col flex-1 justify-center items-center gap-y-5 w-full">
        <div className="flex flex-col justify-center items-baseline ">
          <CardHeader>
            <CardTitle> Category 1 </CardTitle>
          </CardHeader>
          <div className=" xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm max-w-[300px] ">
            <ImageCategory />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Category;
