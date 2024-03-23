import { Button, buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ContactForm from "./contact-form";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactUsProps {
  label: string;
  isFooter?: boolean;
}

const ContactUs: FC<ContactUsProps> = ({ label, isFooter = false }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <div
        className={cn(buttonVariants({ variant: isFooter ? "link" : "ghost" }))}
        onClick={() => setOpen(true)}
      >
        {label}{" "}
      </div>
      <DrawerContent className="bggrad">
        <DrawerHeader>
          <Card className="  border-none shadow-none w-full h-full flex lg:flex-row flex-col bg-inherit  justify-between items-center m-0 p-0 ">
            <CardHeader className="w-1/2">
              <div className=" w-2/3 hidden lg:block">
                <CardTitle className=" text-4xl font-semibold">
                  Get in touch
                </CardTitle>
                <CardDescription className=" text-lg mt-4">
                  We value your feedback and are here to assist you with any
                  questions or concerns you may have—our dedicated team is
                  committed to providing exceptional support as we guide you
                  towards discovering the ideal tee that matches your unique
                  style and preferences.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className=" lg:w-1/2 w-full ">
              <ContactForm onClose={() => setOpen(false)} />
            </CardContent>
          </Card>
        </DrawerHeader>
        <div className=" fixed top-2 right-4 ">
          <Button
            variant="outline"
            size={"icon"}
            onClick={() => setOpen(false)}
          >
            <XIcon className="w-5 h-5 " />
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ContactUs;
