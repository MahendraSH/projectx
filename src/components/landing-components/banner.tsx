import { FC, useEffect, useState } from "react";
import { AlertDescription, AlertTitle } from "@/components/ui/alert";
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

  useEffect(() => {
    // Fetch banners from JSON file or API
    fetch("/data/banner.json")
      .then((response) => response.json())
      .then((data) => setBanners(data))
      .catch((error) => console.error("Error fetching banners:", error));
  }, []);

  return (
    <>
      {banners.map((banner) => (
        <div
          className="flex flex-row px-2 md:px-20 p-0.5 rounded-md my-0.5 shadow shadow-muted justify-center items-baseline min-h-9  w-full bg-gradient-to-bl from-primary/50 via-secondary/70 to-primary/50  md:space-x-8 space-x-3"
          key={banner.id}
        >
          <span>
            {banner.image && (
              <img
                src={banner.image}
                alt={banner.message}
                className="size-6 inline"
              />
            )}
          </span>
          <div className=" md:text-base text-sm font-semibold capitalize">
            {banner.type}
          </div>
          <div className="md:text-sm text-xs">{banner.message}</div>
        </div>
      ))}
    </>
  );
};

export default Banner;
