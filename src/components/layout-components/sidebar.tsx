import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLink } from "@/utils/nav-link";
import { SidebarOpen } from "lucide-react";
import { FC, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactUs from "../landing-components/contact-us";
import { Button } from "../ui/button";
import { useAppSelector } from "@/app/hooks";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const user = useAppSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useMemo(() => {
    setOpen(false);
  }, [location]);
  return (
    <>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <Button variant={"ghost"} onClick={() => setOpen(true)}>
          <SidebarOpen className="w-6 h-6" />
        </Button>
        <SheetContent
          className="max-w-[80%]  bg-secondary text-secondary-foreground   "
          side={"left"}
        >
          <SheetHeader className="mt-5">
            <div className="w-full flex flex-col justify-center items-center gap-y-6 md:gap-y-8  ">
              {navLink.map((item) =>
                item.link === "/#contact-us" ? (
                  <div
                    key={item.label}
                    className="min-w-full p-3 m-1  md:p-4  rounded-md text-lg font-medium bg-muted/30 text-muted-foreground  flex justify-center items-center  min-h-12"
                  >
                    <ContactUs label={item.label} />
                  </div>
                ) : (
                  <Link to={item.link} key={item.label} className="w-full">
                    <div className="min-w-full p-3 m-1  md:p-4  rounded-md text-lg font-medium bg-muted/30 text-muted-foreground  flex justify-center items-center  min-h-12">
                      {item.label}
                    </div>
                  </Link>
                ),
              )}
              {user?.idToken && (
                <Link to={"/account"} className="w-full">
                  <div className="min-w-full p-3 m-1  md:p-4  rounded-md text-lg font-medium bg-muted/30 text-muted-foreground  flex justify-center items-center  min-h-12">
                    Account
                  </div>
                </Link>
              )}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
