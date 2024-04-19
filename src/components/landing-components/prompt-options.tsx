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
import { cn } from "@/lib/utils";
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
                        <FormItem>
                          <Card
                            className={cn(
                              "w-32 aspect-square hover:p-1 ",
                              field.value === "t-shirt" &&
                                "ring-4 outline-indigo-500 p-1"
                            )}
                          >
                            <FormControl>
                              <RadioGroupItem
                                className="w-5 h-5 hidden"
                                value="t-shirt"
                                checked={field.value === "t-shirt"}
                              />
                            </FormControl>
                            <FormLabel className=" w-full h-full cursor-pointer">
                              <img
                                className=" w-full h-full"
                                src="/options/t-shit.jpg"
                                alt="t-shirt"
                              />
                            </FormLabel>
                          </Card>
                        </FormItem>
                        <FormItem>
                          <Card
                            className={cn(
                              "w-32 aspect-square hover:p-1 ",
                              field.value === "full" &&
                                "ring-4 outline-indigo-500 p-1"
                            )}
                          >
                            <FormControl>
                              <RadioGroupItem
                                className="w-5 h-5 hidden"
                                value="full"
                              />
                            </FormControl>
                            <FormLabel className="w-full h-full cursor-pointer">
                              <img
                                className=" w-full h-full"
                                src="/options/full.jpg"
                                alt="full"
                              />
                            </FormLabel>
                          </Card>
                        </FormItem>
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
                        <FormItem>
                          {" "}
                          <Card
                            className={cn(
                              "w-32 aspect-square hover:p-1 ",
                              field.value === "male" &&
                                "ring-4 outline-indigo-500 p-1"
                            )}
                          >
                            <FormControl>
                              <RadioGroupItem
                                className="w-5 h-5 hidden"
                                value="male"
                              />
                            </FormControl>
                            <FormLabel className="w-full h-full cursor-pointer">
                              <img
                                className=" w-full h-full"
                                src="/options/male.jpg"
                                alt="male"
                              />
                            </FormLabel>
                          </Card>
                        </FormItem>
                        <FormItem>
                          <Card
                            className={cn(
                              "w-32 aspect-square hover:p-1 ",
                              field.value === "female" &&
                                "ring-4 outline-indigo-500 p-1 "
                            )}
                          >
                            <FormControl>
                              <RadioGroupItem
                                className="w-5 h-5 hidden"
                                value="female"
                              />
                            </FormControl>
                            <FormLabel className="w-full h-full cursor-pointer">
                              <img
                                className=" w-full h-full"
                                src="/options/female.jpg"
                                alt="female"
                              />
                            </FormLabel>
                          </Card>
                        </FormItem>
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
                        <FormItem>
                          <Card
                            className={cn(
                              "w-32 aspect-square hover:p-1 ",
                              field.value === "ALL_OVER_PRINT" &&
                                "ring-4 outline-indigo-500 p-1"
                            )}
                          >
                            <FormControl>
                              <RadioGroupItem
                                className="w-5 h-5 hidden"
                                value="ALL_OVER_PRINT"
                              />
                            </FormControl>{" "}
                            <FormLabel className="w-full h-full cursor-pointer">
                              <img
                                className=" w-full h-full"
                                src="/options/F.png"
                                alt="full"
                              />
                            </FormLabel>
                          </Card>
                        </FormItem>
                        <FormItem>
                          <Card
                            className={cn(
                              "w-32 aspect-square hover:p-1 ",
                              field.value === "HALF_PRINT" &&
                                "ring-4 outline-indigo-500 p-1"
                            )}
                          >
                            <FormControl>
                              <RadioGroupItem
                                className="w-5 h-5 hidden"
                                value="HALF_PRINT"
                              />
                            </FormControl>
                            <FormLabel className="w-full h-full cursor-pointer">
                              <img
                                className=" w-full h-full"
                                src="/options/S.png"
                                alt="S"
                              />
                            </FormLabel>
                          </Card>
                        </FormItem>
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
