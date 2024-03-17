import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ImageCategory from "./images-category";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  return (
    <Card className=" w-full p-2 flex flex-col justify-center items-center bggrad">
      <CardHeader>
        <CardTitle>Categoies </CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-col flex-1 justify-center items-center gap-y-5 w-full">
        <ImageCategory />
        <ImageCategory />
        <ImageCategory />
      </CardContent>
    </Card>
  );
};

export default Category;
