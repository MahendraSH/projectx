import { Card } from "@/components/ui/card";
import { ShoppingBagIcon } from "lucide-react";

const CartPage = () => {
  return (
    <>
      <div className=" w-full flex flex-col gap-y-10 justify-center items-center min-h-screen text-muted-foreground">
        <ShoppingBagIcon className="w-16 h-16 animate-bounce " />
        <h3 className=" text-2xl text-muted-foreground  ">
          {" "}
          The Cart Is Empty
        </h3>
      </div>
      <div className=" w-full min-h-full md:flex-row flex-col flex gap-5 px-4 py-5  ">
        <Card className=" md:w-3/4 lg:w-4/5 w-full min-h-32"> </Card>
        <Card className=" md:w-1/2 lg:w-1/5 w-full min-h-32"> </Card>
      </div>
    </>
  );
};

export default CartPage;
