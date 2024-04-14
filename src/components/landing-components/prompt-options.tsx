import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { usePromptWithoutAuthMutation } from "@/app/features/promtApiSlice";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Card } from "../ui/card";
import { useAppDispatch } from "@/app/hooks";
import { setLoading } from "@/app/features/loadingSlice";
interface PromptPotionsProps {
  isOpen: boolean;
  prompt: string;
  onClose: () => void;
}
const formSchema = z.object({
  gender: z.string().min(1),
  category: z.string().min(1),
  printType: z.string().min(1),
});

const PromptPotions: FC<PromptPotionsProps> = ({ isOpen, prompt, onClose }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [createPrompt, { isLoading }] = usePromptWithoutAuthMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      printType: "",
      gender: "",
      category: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(setLoading(true));
    try {
      const res = await createPrompt({
        prompt: prompt,
        gender: values.gender,
        category: values.category,
        printType: values.printType,
      }).unwrap();
      if (res.productId) {
        toast.success("Prompt Success");
        navigate(`/product/${res.productId}`);
      } else {
        throw new Error("Some thing when wrong ");
      }
      onClose();
    } catch (error) {
      toast.error("Prompt Failed");
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="  max-h-[70lvh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle> Select The Thing </DialogTitle>
          <DialogDescription>
            Select the thing that can help us to create the AI art shirt.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="gap-x-40 ">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Card className=" overflow-y-auto max-w-xs flex justify-center items-center p-2 m-1">
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex  gap-x-4"
                      >
                        <Card className="w-32 aspect-square">
                          <RadioGroupItem className="w-5 h-5" value="shirt" />
                          <FormLabel className="font-normal">Shirt</FormLabel>
                        </Card>
                        <Card className="w-32 aspect-square">
                          <RadioGroupItem
                            className="w-5 h-5"
                            value="full-shirt"
                          />
                          <FormLabel className="font-normal">
                            Full Shirt
                          </FormLabel>
                        </Card>
                      </RadioGroup>
                    </Card>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Card className=" overflow-y-auto max-w-xs flex justify-center items-center p-2 m-1">
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex  gap-x-4"
                      >
                        <Card className="w-32 aspect-square">
                          <RadioGroupItem className="w-5 h-5" value="male" />
                          <FormLabel className="font-normal">Male</FormLabel>
                        </Card>
                        <Card className="w-32 aspect-square">
                          <RadioGroupItem className="w-5 h-5" value="female" />
                          <FormLabel className="font-normal">Female</FormLabel>
                        </Card>
                      </RadioGroup>
                    </Card>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="printType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Print Type</FormLabel>
                  <FormControl>
                    <Card className=" overflow-y-auto max-w-xs flex justify-center items-center p-2 m-1">
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex  gap-x-4"
                      >
                        <Card className="w-32 aspect-square">
                          <RadioGroupItem
                            className="w-5 h-5"
                            value="ALL_OVER_PRINT"
                          />
                          <FormLabel className="font-normal">
                            ALL_OVER_PRINT
                          </FormLabel>
                        </Card>
                        <Card className="w-32 aspect-square">
                          <RadioGroupItem
                            className="w-5 h-5"
                            value="option-2"
                          />
                          <FormLabel className="font-normal">
                            Option 2
                          </FormLabel>
                        </Card>
                      </RadioGroup>
                    </Card>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between md:mx-5 -reverse md:flex-row gap-8">
              <Button
                variant={"primaryGradient"}
                size={"lg"}
                type="submit"
                disabled={isLoading}
              >
                {isLoading && (
                  <Loader2Icon className=" w-4 animate-spin mr-3" />
                )}
                Apply
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PromptPotions;
