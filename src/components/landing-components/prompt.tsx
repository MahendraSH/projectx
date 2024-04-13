import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SparklesIcon, WandSparklesIcon } from "lucide-react";
import PromptPotions from "./prompt-options";

interface AiPromptProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const formSchema = z.object({
  prompt: z.string().min(2),
});

const AiPrompt: FC<AiPromptProps> = ({ setIsLoading }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsOpen(!isOpen);
    setPrompt(values.prompt);
  }

  return (
    <div className="  mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 ">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="prompt .... "
                    {...field}
                    className=" w-full h-12 ring-1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex  justify-between md:mx-5 flex-col-reverse md:flex-row gap-8 ">
            <Button
              variant={"outline"}
              size={"lg"}
              type="button"
              className=" ring-1  border-x-primary  border-t-blue-400 border-b-blue-300  "
            >
              Surprise Me <WandSparklesIcon className=" ml-3 w-5 h-5 " />
            </Button>
            <Button variant={"primaryGradient"} size={"lg"} type="submit">
              Generate <SparklesIcon className=" ml-3 w-5 h-5 " />
            </Button>
          </div>
        </form>
      </Form>
      <>
        <PromptPotions
          setIsLoading={setIsLoading}
          onClose={() => {
            setIsOpen(!isOpen);
          }}
          isOpen={isOpen}
          prompt={prompt}
        />
      </>
    </div>
  );
};

export default AiPrompt;
