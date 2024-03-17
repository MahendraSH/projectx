import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ColorItem from "./colors-item";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/app/hooks";
import { changeColor } from "@/app/features/colorsSlice";

interface ColorFormProps {
  colors: string[];
}

const formSchema = z.object({
  color: z.string().min(1),
});

const ColorForm: FC<ColorFormProps> = ({ colors }) => {
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: colors[0] || "white",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    dispatch(changeColor(values.color));
    toast.success("Color changed to: " + values.color);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-32 space-y-6">
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <Label>Color</Label>
              <Select
                onValueChange={(color) => {
                  // Trigger form submission when color changes
                  field.onChange(color);
                  form.handleSubmit(onSubmit)();
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {colors.map((item) => (
                    <SelectItem key={item} value={item}>
                      <ColorItem value={item} />
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ColorForm;
