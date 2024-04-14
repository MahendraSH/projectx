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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { changeSize } from "@/app/features/sizeSlice";

interface ProductSizeProps {}
const sizes = ["S", "M", "L", "XL"];

const formSchema = z.object({
  value: z.string().min(1),
});

const ProductSize: FC<ProductSizeProps> = ({}) => {
  const dispatch = useAppDispatch();
  const sizeValue = useAppSelector((state) => state.size.value);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: sizeValue,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(changeSize(values.value));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-52">
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Size </FormLabel>
              <FormControl>
                <Select
                  onValueChange={(event) => {
                    dispatch(changeSize(event));
                    field.onChange(event);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className=" h-10">
                      <SelectValue
                        className="h-10"
                        placeholder="Select a verified email to display"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sizes.map((item) => (
                      <SelectItem value={item} key={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <input type="submit" className=" hidden" />
      </form>
    </Form>
  );
};

export default ProductSize;
