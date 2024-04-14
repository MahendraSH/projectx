import { FC } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  image: {
    imageUrl: string;
    alt: string;
  };
  isAllOver?: boolean;
  isDark?: boolean;
  color?: string;
  isSmall?: boolean;
  isCard?: boolean;
}

const ImageCard: FC<ImageCardProps> = ({
  image,
  isAllOver = false,
  isDark = false,
  color = "shirt-1.jpg",
  isSmall = false,
  isCard = false,
}) => {
  return (
    <>
      {!isCard ? (
        <>
          <Card
            className={cn(
              "w-96 aspect-square bg-white justify-center items-center p-2 ring-1 rounded-md ",
              isDark && "bg-black",
              isSmall ? "hidden" : "md:flex hidden",
            )}
          >
            <div
              style={{
                backgroundImage: `url(/images/shirt/${color})`,
                backgroundSize: "cover", // Set background size to cover
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundClip: "border-box",
                backdropFilter: "blur(10px)",
                zIndex: 40,
                WebkitBackgroundSize: "110%",
                MozBackgroundSize: "110%",
              }}
              className="h-full flex justify-center items-center w-full "
            >
              <img
                src={image.imageUrl}
                alt={image.alt}
                style={{ width: isAllOver ? "90%" : "8rem" }}
              />
            </div>
          </Card>
          <Card
            className={cn(
              "  w-11/12 aspect-square bg-white justify-center items-center p-2 ring-1 rounded-md",
              isDark && "bg-black",
              isSmall ? "flex " : "sm:flex md:hidden",
            )}
          >
            <div
              style={{
                backgroundImage: `url(/images/shirt/${color})`,
                backgroundSize: "cover", // Set background size to cover
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundClip: "border-box",
                backdropFilter: "blur(10px)",
                zIndex: 40,
                WebkitBackgroundSize: "110%",
                MozBackgroundSize: "110%",
              }}
              className="h-full flex justify-center items-center"
            >
              <img
                src={image.imageUrl}
                alt={image.alt}
                style={{ width: isAllOver ? "90%" : "6rem" }}
              />
            </div>
          </Card>
        </>
      ) : (
        <>
          {" "}
          <Card
            className={cn(
              "w-60 aspect-square bg-white justify-center items-center p-2 ring-1 rounded-md ",
              isDark && "bg-black",
            )}
          >
            <div
              style={{
                backgroundImage: `url(/images/shirt/${color})`,
                backgroundSize: "cover", // Set background size to cover
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundClip: "border-box",
                backdropFilter: "blur(10px)",
                zIndex: 40,
                WebkitBackgroundSize: "110%",
                MozBackgroundSize: "110%",
              }}
              className="h-full flex justify-center items-center w-full "
            >
              <img
                src={image.imageUrl}
                alt={image.alt}
                style={{ width: isAllOver ? "90%" : "5rem" }}
              />
            </div>
          </Card>
        </>
      )}
    </>
  );
};

export default ImageCard;
