import { FC, useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface Banner {
  id: number;
  message: string;
  type: "offer" | "low_stock"; // Define possible types
  image?: string; // Optional image URL
}

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [showBanner, setShowBanner] = useState<number[]>([]);

  useEffect(() => {
    // Fetch banners from JSON file or API
    fetch("/data/banner.json")
      .then((response) => response.json())
      .then((data) => setBanners(data))
      .catch((error) => console.error("Error fetching banners:", error));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {banners.map((banner) => (
        <Alert
          key={banner.id}
          className={cn(
            " max-w-xs sm:max-w-md lg:max-w-xl fixed z-50 top-20 ",
            showBanner.includes(banner.id) && " hidden"
          )}
        >
          <div className=" flex relative justify-start items-center gap-x-5">
            <span>
              {banner.image && (
                <img
                  src={banner.image}
                  alt={banner.message}
                  className="size-10 inline"
                />
              )}
            </span>
            <AlertTitle className="text-lg capitalize">
              {banner.type}
            </AlertTitle>
          </div>
          <AlertDescription>{banner.message}</AlertDescription>
          <Button
            variant={"outline"}
            size={"icon"}
            className="absolute top-3 right-5"
            onClick={() => setShowBanner([...showBanner, banner.id])}
          >
            <XIcon className="size-4" />
          </Button>
        </Alert>
      ))}
    </div>
  );
};

export default Banner;
