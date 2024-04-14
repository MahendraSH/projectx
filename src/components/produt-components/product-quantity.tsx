import { FC } from "react";
import { useAppSelector, useAppDispatch } from "@/app/hooks";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  changeQuantity,
  decrementQuantity,
  incrementQuantity,
} from "@/app/features/productQuantity";
import { MinusCircle, PlusCircle } from "lucide-react";

const formSchema = z.object({
  value: z.coerce.number().positive(),
});
interface ProductQuantityProps {}

const ProductQuantity: FC<ProductQuantityProps> = ({}) => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => state.quantity.value);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: quantity,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(changeQuantity(values.value));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-52">
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <div className="flex flex-1  justify-center items-center border rounded-md focus-visible:ring-1  border-collapse hover:ring ">
                <Button
                  variant={"outline"}
                  size={"iconLg"}
                  disabled={quantity === 1}
                  onClick={() => {
                    form.setValue("value", quantity - 1);
                    dispatch(decrementQuantity());
                  }}
                >
                  {" "}
                  <MinusCircle className="size-6" />{" "}
                </Button>

                <FormControl>
                  <Input
                    {...field}
                    onChange={(event) => {
                      event.preventDefault();
                      field.onChange(event);
                      dispatch(changeQuantity(event.target.value));
                    }}
                    className=" focus-visible:ring-0"
                  />
                </FormControl>
                <Button
                  variant={"outline"}
                  size={"iconLg"}
                  onClick={() => {
                    form.setValue("value", quantity + 1);
                    dispatch(incrementQuantity());
                  }}
                >
                  {" "}
                  <PlusCircle className="size-6" />{" "}
                </Button>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <input type="submit" className=" hidden" />
      </form>
    </Form>
  );
};

export default ProductQuantity;
